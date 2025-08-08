
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams, useNavigate } from 'react-router-dom';

const timeSlots = [
  '9:00 AM - 9:30 AM',
  '9:30 AM - 10:00 AM',
  '10:00 AM - 10:30 AM',
  '10:30 AM - 11:00 AM',
  '11:00 AM - 11:30 AM',
  '11:30 AM - 12:00 AM',
  '12:00 PM - 12:30 PM',
  '12:30 PM - 1:00 PM',
  '1:00 PM - 1:30 PM',
  '1:30 PM - 2:00 PM',
  '2:00 PM - 2:30 PM',
  '2:30 PM - 3:00 PM',
  '3:00 PM - 3:30 PM',
  '3:30 PM - 4:00 PM',
  '4:00 PM - 4:30 PM',
  '4:30 PM - 5:00 PM',
  '5:00 PM - 5:30 PM',
  '5:30 PM - 6:00 PM',
];

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const AddDoctors = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    speciality: '',
    degree: '',
    experience: '',
    about: '',
    available: false,
    fees: '',
    address: '',
    slots_booked: [],
  });

  const [selectedDays, setSelectedDays] = useState([]);
  const [slotsByDay, setSlotsByDay] = useState({});
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      if (id) {
        try {
          const res = await axios.get(`http://localhost:5000/api/admin/getDoctordataByid/${id}`);
          const data = res.data.doctor;

          setFormData({
            name: data.name,
            email: data.email,
            password: data.password,
            speciality: data.speciality,
            degree: data.degree,
            experience: data.experience,
            about: data.about,
            available: data.available,
            fees: data.fees,
            address: data.address,
            slots_booked: data.slots_booked || [],
          });

          const slotObj = {};
          (data.slots_booked || []).forEach(entry => {
            slotObj[entry.day] = entry.slots;
          });
          setSlotsByDay(slotObj);
          setSelectedDays(Object.keys(slotObj));
        } catch (error) {
          console.error("Failed to fetch doctor:", error);
          Swal.fire({ icon: 'error', title: 'Error', text: 'Failed to fetch doctor data' });
        }
      }
    };
    fetchDoctor();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleDayChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedDays((prev) => [...prev, value]);
      setSlotsByDay((prev) => ({ ...prev, [value]: [] }));
    } else {
      setSelectedDays((prev) => prev.filter((day) => day !== value));
      setSlotsByDay((prev) => {
        const updated = { ...prev };
        delete updated[value];
        return updated;
      });
    }
  };

  const handleSlotChange = (day, slot) => {
    setSlotsByDay((prev) => {
      const slots = prev[day] || [];
      const newSlots = slots.includes(slot)
        ? slots.filter((s) => s !== slot)
        : [...slots, slot];
      return { ...prev, [day]: newSlots };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id && !imageFile) {
      Swal.fire({ icon: 'warning', title: 'Image Required', text: 'Please upload an image.' });
      return;
    }

    const updatedFormData = {
      ...formData,
      slots_booked: selectedDays.map(day => ({
        day,
        slots: slotsByDay[day] || []
      })),
    };

    const data = new FormData();
    Object.entries(updatedFormData).forEach(([key, value]) => {
      if (key === 'slots_booked') {
        data.append(key, JSON.stringify(value));
      } else {
        data.append(key, value);
      }
    });

    if (imageFile) {
      data.append('image', imageFile);
    }

    try {
      Swal.fire({
        title: id ? 'Updating Doctor...' : 'Creating Doctor...',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

       id
        ? await axios.put(`http://localhost:5000/api/admin/updatedoctor/${id}`, data)
        : await axios.post(`http://localhost:5000/api/admin/add-doctor`, data);

      Swal.fire({
        icon: 'success',
        title: id ? 'Doctor Updated' : 'Doctor Added',
        text: `Doctor has been successfully ${id ? 'updated' : 'added'}!`,
      });

      navigate('/admin/alldoctors');
    } catch (error) {
      console.error('Error saving doctor:', error);
      Swal.fire({ icon: 'error', title: 'Error', text: 'Something went wrong.' });
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">{id ? 'Edit Doctor' : 'Add New Doctor'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[{ label: 'Name', name: 'name' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Password', name: 'password', type: 'password' },
          { label: 'Speciality', name: 'speciality' },
          { label: 'Degree', name: 'degree' },
          { label: 'Experience', name: 'experience' },
          { label: 'About', name: 'about' },
          { label: 'Fees', name: 'fees', type: 'number' },
          { label: 'Address', name: 'address' },
        ].map(({ label, name, type = 'text' }) => (
          <div key={name}>
            <label className="block font-medium mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <div>
          <label className="block font-medium mb-1">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
            {...(!id ? { required: true } : {})}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Available</label>
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
            className="w-5 h-5"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Select Available Days</label>
          <div className="grid grid-cols-3 gap-2">
            {weekDays.map((day) => (
              <label key={day} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={day}
                  checked={selectedDays.includes(day)}
                  onChange={handleDayChange}
                  className="w-4 h-4"
                />
                {day}
              </label>
            ))}
          </div>
        </div>

        {selectedDays.map((day) => (
          <div key={day} className="border p-4 rounded-md bg-gray-50">
            <label className="block font-semibold mb-2">Select Time Slots for {day}</label>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => (
                <label key={slot} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={slotsByDay[day]?.includes(slot) || false}
                    onChange={() => handleSlotChange(day, slot)}
                    className="w-4 h-4"
                  />
                  {slot}
                </label>
              ))}
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          {id ? 'Update Doctor' : 'Add Doctor'}
        </button>
      </form>
    </div>
  );
};

export default AddDoctors;
