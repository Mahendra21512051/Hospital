import React from 'react';
import { assets } from '../assets/assets';
import { Navigate, useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate= useNavigate();
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between bg-blue-600 py-10 px-6 lg:px-12 rounded-lg">
      {/* Left Box */}
      <div className="lg:w-1/2 flex flex-col space-y-6 lg:space-y-8">
        <div className="text-left space-y-2">
          <p onClick={()=>('/SpeclityMenu')} className="text-4xl lg:text-5xl font-bold text-white">
            Book Appointment
          </p>
          <p className="text-4xl lg:text-5xl font-bold text-white">
            With Trusted
          </p>
          <p className="text-4xl lg:text-5xl font-bold text-white">
            Doctors
          </p>
        </div>
        <button onClick={()=>{navigate('/Login') ; scrollTo(0,0)}}className="w-max bg-white text-blue-600 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-100">
  Create Account
</button>

      </div>

      {/* Right Box */}
      <div className="w-1/2">
        <img src={assets.appointment_img} alt="Appointment" className="" />
      </div>
    </div>
  );
};

export default Banner;
