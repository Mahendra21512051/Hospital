import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RelatedDoctor = ({ speciality, docId }) => {
  const [relDoc, setRelDocs] = useState([]);
  const navigate = useNavigate();

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/getDoctors');
      const allDoctors = response.data.doctors || [];

      const filtered = allDoctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(filtered);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  useEffect(() => {
    if (speciality && docId) {
      fetchDoctors();
    }
  }, [speciality, docId]);

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 tracking-tight  text-3xl font-medium'>Related Doctors</h1>
    
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6 sm:px-0'>
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            key={index}
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
          >
            <img className='bg-blue-50 w-full h-48 object-cover' src={item.image} alt={item.name} />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 rounded-full bg-green-500'></p>
                <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-500 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/Doctor');
          window.scrollTo(0, 0);
        }}
        className='bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 items-center px-12 py-3 rounded-full mt-5 font-medium'
      >
        More
      </button>
    </div>
  );
};

export default RelatedDoctor;

