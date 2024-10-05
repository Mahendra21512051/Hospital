import React, { useContext } from 'react';
import { Appcontext } from '../context/Appcontext';

const MyAppointments = () => {
  const { doctors } = useContext(Appcontext);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Appointments</h2>
      <div className="space-y-6">
        {doctors.slice(0, 2).map((item, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md flex space-x-4">
            <div className="w-32 h-32">
              <img
                src={item.image}
                alt="Doctor"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.speciality}</p>
              <p className="font-bold mt-2">Address:</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p className="mt-4">
                <span className="font-bold">Date & Time:</span> 25 July 2024 | 8:30 PM
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Pay Online
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
