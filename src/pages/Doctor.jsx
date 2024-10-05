import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Appcontext } from '../context/Appcontext';

const Doctor = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(Appcontext);

  // Filter doctors based on the selected speciality
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(
        doctors.filter(doc =>
          doc.speciality.toLowerCase() === speciality.toLowerCase()
        )
      );
    } else {
      setFilterDoc(doctors);
    }
  };

  // Apply filter when doctors data or speciality changes
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className='w-full px-4 py-8'>
      <p className='text-center text-2xl font-semibold mb-6 text-gray-700'>Browse through the specialist doctors</p>

      {/* Speciality categories */}
      <div className='flex justify-around mb-10 gap-4 cursor-pointer'>
        {['General Physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full border transition-all duration-300 ease-in-out ${
              speciality === category
                ? 'bg-blue-500 text-white border-blue-500'
                : 'border-gray-300 text-blue-600 hover:bg-gray-200'
            }`}
            onClick={() => navigate(`/doctors/${category}`)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Doctors Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {filterDoc.length > 0 ? (
          filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className='border border-blue-300 shadow-lg rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'
            >
              <img className='w-full h-48 object-cover' src={item.image} alt={`${item.name}`} />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-green-600'>
                  <span className='w-2 h-2 rounded-full bg-green-500'></span>
                  <p>Available</p>
                </div>
                <p className='text-gray-600 text-lg font-medium '>{item.name}</p>
                <p className='text-gray-500 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500'>No doctors available for this speciality.</p>
        )}
      </div>
    </div>
  );
};

export default Doctor;
