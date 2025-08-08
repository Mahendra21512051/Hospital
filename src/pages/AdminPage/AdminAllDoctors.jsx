import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminAllDoctors = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/getDoctors');
      console.log("its all data", response);
      setDoctors(response.data.doctors || []);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      setDoctors([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete this doctor?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/deleteDoctor/${id}`);
        setDoctors((prev) => prev.filter((doc) => doc._id !== id));
        Swal.fire('Deleted!', 'The doctor has been removed.', 'success');
      } catch (error) {
        console.error('Error deleting doctor:', error);
        Swal.fire('Error!', 'Failed to delete the doctor.', 'error');
      }
    }
  };

  const handleEdit = (id) => {
    Swal.fire({
      title: 'Edit Doctor',
      text: `Redirecting to edit page for doctor ID: ${id}`,
      icon: 'info',
      confirmButtonText: 'OK'
    }).then(() => {
      navigate(`/admin/addDoctors/${id}`);
    });
  };

  if (loading) {
    return <p className="text-center mt-10 text-gray-600">Loading doctors...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors.map((doc) => (
          <div
            key={doc._id}
            className="border border-gray-300 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <div className={`flex items-center gap-2 text-sm ${doc.available ? 'text-green-600' : 'text-red-600'}`}>
                <span className={`w-2 h-2 rounded-full ${doc.available ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <p>{doc.available ? 'Available' : 'Not Available'}</p>
              </div>
              <p className="text-lg font-semibold text-gray-800">{doc.name}</p>
              <p className="text-sm text-gray-500">{doc.speciality}</p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEdit(doc._id)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(doc._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAllDoctors;
