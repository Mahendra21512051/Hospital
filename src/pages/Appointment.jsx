import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Appcontext } from '../context/Appcontext';
import { assets } from '../assets/assets';
import RelatedDoctor from '../components/RelatedDoctor';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(Appcontext); // Correct spelling: currencySymbol
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const Navigate = useNavigate()

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);

  const fetchDocInfo = () => {
    const doc = doctors.find(doc => doc._id === docId);
    if (doc) {
      setDocInfo(doc);
    } else {
      console.error("Doctor not found");
    }
  };

  const getAvailableSlots = () => {
    const slots = [];
    let today = new Date();

    for (let i = 1; i <= 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      slots.push(timeSlots);
    }
    setDocSlots(slots);
  };

  useEffect(() => {
    if (doctors.length > 0) {
      fetchDocInfo();
    }
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  return (
    <div className='w-full items-start'>
      {docInfo ? (
        <div className='w-full flex flex-row gap-7'>
          <div className='w-1/2 border rounded-lg bg-blue-600'>
            <img src={docInfo.image} alt={docInfo.name} />
          </div>
          <div className='flex flex-col gap-5 border border-gray-600 rounded-lg px-10 w-full'>
            <div className='flex flex-row gap-4 items-center mt-4'>
              <p className='text-3xl font-semibold text-gray-700'>{docInfo.name}</p>
              <img className='w-5 h-5' src={assets.verified_icon} alt='Verified' />
            </div>
            <div className='flex flex-row items-start gap-3'>
              <p className='font-semibold text-gray-600 text-lg'>{`${docInfo.degree} - ${docInfo.speciality}`}</p>
              <button className='border border-black rounded-xl px-2 font-semibold text-gray-500'>{docInfo.experience}</button>
            </div>
            <div className='gap-1 mb-1'>
              <p className='flex flex-row gap-2'>About <img src={assets.info_icon} alt='Information' /></p>
              <p className='text-gray-600 font-normal'>{docInfo.about}</p>
            </div>
            <div className='flex flex-row gap-0'>
              <p>Appointment Fee: </p>
              <p>{currencySymbol}{docInfo.fees}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className='sm:ml-72 sm:pl-4 font-medium text-gray-700 mt-5'>
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {docSlots.map((item, index) => (
            <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-[64px] rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-300'}`} key={index}>
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-7'>
          {docSlots[slotIndex] && docSlots[slotIndex].map((item, index) => (
            <p className='text-sm border border-gray-800 px-2 font-light flex-shrink-0 py-2 text-gray-600 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white ' key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <div className='mt-5'>
          <button onClick={() => Navigate('/Login')} className="cursor-pointer border rounded-full bg-blue-600 text-white font-semibold py-4 px-8">Book an Appointment</button>
        </div>
      </div>

      {/* Related Doctors */}
      {docInfo && <RelatedDoctor docId={docId} speciality={docInfo.speciality} />}
    </div>
  );
};

export default Appointment;
