import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TopDoctor = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/getDoctors');
      setDoctors(response.data.doctors || []);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 my-16 px-4 md:px-10 text-gray-900">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-300 bg-white shadow-sm"
          >
            <img
              className="w-full h-48 object-cover bg-blue-50"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4 space-y-2">
            <div className={`flex items-center gap-2 text-sm ${item.available ? 'text-green-600' : 'text-red-600'}`}>
              <span className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-red-500'}`}></span>
              <p>{item.available ? 'Available' : 'Not Available'}</p>
                      </div>
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/Doctor');
          scrollTo(0, 0);
        }}
        className="bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 px-8 py-3 rounded-full mt-8 font-medium transition-all"
      >
        See More Doctors
      </button>
    </div>
  );
};

export default TopDoctor;

