import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { assets } from '../assets/assets';
import RelatedDoctor from '../components/RelatedDoctor';
import { useAuth } from "../context/Appcontext";
import { toast } from 'react-toastify';

const Appointment = () => {
  const { docId } = useParams();
  const Navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [docInfo, setDocInfo] = useState(null);
  const [slotIndex, setSlotIndex] = useState(0);
  const currencySymbol = '₹';
  const { user } = useAuth();

  const fetchDocInfo = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/getDoctors');
      const foundDoctor = response.data.doctors.find(doc => doc._id === docId);
      setDocInfo(foundDoctor);
    } catch (error) {
      console.error('Error fetching doctor data:', error);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [docId]);

  const bookAppointment = async () => {
    if (!user?.data?.user?._id) {
      Navigate('/Login');
      return;
    }

    if (!selectedSlot) {
      toast.error("Please select a valid time slot.");
      return;
    }

    const today = new Date();
    const appointmentDate = new Date();
    appointmentDate.setDate(today.getDate() + slotIndex + 1);

    const appointmentData = {
      userId: user?.data?.user?._id,
      doctorId: docInfo._id,
      doctorName: docInfo.name,
      speciality: docInfo.speciality,
      appointmentDate: appointmentDate.toISOString().split('T')[0],
      appointmentDay: docInfo.slots_booked[slotIndex]?.day || "",
      appointmentTime: selectedSlot,
      fees: docInfo.fees,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/appointment/book', appointmentData);
      toast.success("Appointment booked successfully!");
      console.log("its send data",response)
      Navigate('/MyAppointments');
    } catch (error) {
      console.error("Error booking appointment:", error);
      toast.error("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className='w-full items-start px-4 py-6'>
      {docInfo ? (
        <div className='w-full flex flex-col md:flex-row gap-7'>
          <div className='md:w-1/2 border rounded-lg bg-blue-100'>
            <img src={docInfo.image} alt={docInfo.name} className='rounded-lg w-full object-cover' />
          </div>
          <div className='flex flex-col gap-5 border border-gray-300 rounded-lg p-6 w-full'>
            <div className='flex gap-4 items-center'>
              <p className='text-3xl font-semibold text-gray-800'>{docInfo.name}</p>
              <img className='w-5 h-5' src={assets.verified_icon} alt='Verified' />
            </div>
            <div className='flex items-start gap-3'>
              <p className='font-semibold text-gray-700 text-lg'>{`${docInfo.degree} - ${docInfo.speciality}`}</p>
              <button className='border border-black rounded-xl px-2 text-gray-600'>{docInfo.experience}</button>
            </div>
            <div>
              <p className='flex items-center gap-2'>About <img src={assets.info_icon} alt='Information' /></p>
              <p className='text-gray-600'>{docInfo.about}</p>
            </div>
            <div className='flex gap-1'>
              <p>Appointment Fee:</p>
              <p>{currencySymbol}{docInfo.fees}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className='text-center text-gray-600'>Loading doctor information...</p>
      )}

      {/* Booking Slots */}
      <div className='mt-10 font-medium text-gray-700'>
        <p className='mb-3'>Booking Slots</p>

        {/* Day Selection */}
        <div className='flex gap-3 overflow-x-auto'>
          {docInfo?.slots_booked?.map((daySlot, index) => (
            <div
              key={index}
              onClick={() => {
                setSlotIndex(index);
                setSelectedSlot(null);
              }}
              className={`text-center py-4 px-3 min-w-[64px] rounded-full cursor-pointer ${
                slotIndex === index ? 'bg-blue-600 text-white' : 'border border-gray-300'
              }`}
            >
              <p>{daySlot.day}</p>
            </div>
          ))}
        </div>

        {/* Time Slot Selection */}
        <div className='flex gap-3 overflow-x-auto mt-6'>
          {docInfo?.slots_booked?.[slotIndex]?.slots?.map((time, index) => (
            <div
              key={index}
              onClick={() => setSelectedSlot(time)}
              className={`text-sm text-center py-2 px-4 min-w-[100px] rounded-full cursor-pointer ${
                selectedSlot === time ? 'bg-blue-600 text-white' : 'border border-gray-300 text-gray-700'
              }`}
            >
              {time}
            </div>
          ))}
        </div>

        {/* Book Button */}
        <div className='mt-6'>
          <button
            onClick={bookAppointment}
            className='bg-blue-600 text-white rounded-full py-3 px-6 font-semibold'
          >
            Book an Appointment
          </button>
        </div>
      </div>

      {/* Related Doctors */}
      {docInfo && <RelatedDoctor docId={docId} speciality={docInfo.speciality} />}
    </div>
  );
};

export default Appointment;
