// import  { useContext, useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Appcontext } from '../context/Appcontext';

// const Doctor = () => {
//   const navigate = useNavigate();
//   const { speciality } = useParams();
//   const [filterDoc, setFilterDoc] = useState([]);
//   const { doctors } = useContext(Appcontext);

//   // Filter doctors based on the selected speciality
//   const applyFilter = () => {
//     if (speciality) {
//       setFilterDoc(
//         doctors.filter(doc =>
//           doc.speciality.toLowerCase() === speciality.toLowerCase()
//         )
//       );
//     } else {
//       setFilterDoc(doctors);
//     }
//   };

//   // Apply filter when doctors data or speciality changes
//   useEffect(() => {
//     applyFilter();
//   }, [doctors, speciality]);

//   return (
//     <div className='w-full px-4 py-8'>
//       <p className='text-center text-2xl font-semibold mb-6 text-gray-700'>Browse through the specialist doctors</p>

//       {/* Speciality categories */}
//       <div className='flex justify-around mb-10 gap-4 cursor-pointer'>
//         {['General Physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((category, index) => (
//           <button
//             key={index}
//             className={`px-4 py-2 rounded-full border transition-all duration-300 ease-in-out ${
//               speciality === category
//                 ? 'bg-blue-500 text-white border-blue-500'
//                 : 'border-gray-300 text-blue-600 hover:bg-gray-200'
//             }`}
//             onClick={() => navigate(`/doctors/${category}`)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Doctors Grid */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
//         {filterDoc.length > 0 ? (
//           filterDoc.map((item, index) => (
//             <div
//               onClick={() => navigate(`/appointment/${item._id}`)}
//               key={index}
//               className='border border-blue-300 shadow-lg rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'
//             >
//               <img className='w-full h-48 object-cover' src={item.image} alt={`${item.name}`} />
//               <div className='p-4'>
//                 <div className='flex items-center gap-2 text-sm text-green-600'>
//                   <span className='w-2 h-2 rounded-full bg-green-500'></span>
//                   <p>Available</p>
//                 </div>
//                 <p className='text-gray-600 text-lg font-medium '>{item.name}</p>
//                 <p className='text-gray-500 text-sm'>{item.speciality}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className='text-center text-gray-500'>No doctors available for this speciality.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Doctor;

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Doctor = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch doctors from API
  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/getDoctors');
      setDoctors(response.data.doctors || []);
      console.log("its doctors data",response);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      setDoctors([]);
      setLoading(false);
    }
  };

  // Apply speciality filter
  const applyFilter = () => {
    if (speciality) {
      const filtered = doctors.filter(doc =>
        doc.speciality.toLowerCase() === speciality.toLowerCase()
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(doctors);
    }
  };

  // Fetch doctors on component mount
  useEffect(() => {
    fetchDoctors();
  }, []);

  // Apply filter when data or speciality changes
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className='w-full px-4 py-8'>
      <p className='text-center text-2xl font-semibold mb-6 text-gray-700'>
        Browse through the specialist doctors
      </p>

      {/* Speciality buttons */}
      <div className='flex flex-wrap justify-center gap-4 mb-10'>
        {[
          'General Physician',
          'Gynecologist',
          'Dermatologist',
          'Pediatricians',
          'Neurologist',
          'Gastroenterologist'
        ].map((category, index) => (
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

      {/* Doctors grid */}
      {loading ? (
        <p className='text-center text-blue-500'>Loading doctors...</p>
      ) : filteredDoctors.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filteredDoctors.map((doc, index) => (
            <div
              onClick={() => navigate(`/appointment/${doc._id}`)}
              key={index}
              className='border border-blue-300 shadow-lg rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'
            >
              <img
                className='w-full h-48 object-cover'
                src={doc.image}
                alt={doc.name}
              />
              <div className='p-4'>
              <div className={`flex items-center gap-2 text-sm ${doc.available ? 'text-green-600' : 'text-red-600'}`}>
              <span className={`w-2 h-2 rounded-full ${doc.available ? 'bg-green-500' : 'bg-red-500'}`}></span>
              <p>{doc.available ? 'Available' : 'Not Available'}</p>
                      </div>

                <p className='text-gray-800 text-lg font-semibold'>{doc.name}</p>
                <p className='text-gray-500 text-sm'>{doc.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-center text-gray-500'>
          No doctors available for this speciality.
        </p>
      )}
    </div>
  );
};

export default Doctor;

