import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className='w-full items-center '>
      <div className='text-xl font-bold mt-5 text-center text-gray-700'>About us</div>
      <div className='flex flex-row gap-10 mt-10'>
        <div className='w-1/2 mt-5'>
          <img src={assets.about_image} alt="About image" />
        </div>
        <div className='w-1/2 flex flex-col justify-between space-y-5'>
          <p className='text-gray-600 font-medium'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p className='text-gray-600 font-medium'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <h1 className='text-lg  text-gray-600 font-semibold'>Our Vision</h1>
          <p className='text-gray-600 font-medium'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='text-xl text-start mt-10 font-bold text-gray-700'>Why Choose Us</div>
      <div className='flex flex-row items-start mt-5 border border-black rounded-lg'>
        <div className='flex flex-col gap-4 p-5 border-r border-black hover:bg-blue-600 hover:text-white cursor-pointer'>
          <h1 className='text-xl font-medium'>EFFICIENCY</h1>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='flex flex-col gap-4 p-5 border-r border-black hover:bg-blue-600 hover:text-white cursor-pointer'>
          <h1 className='text-xl font-medium text-gray-700'>CONVENIENCE</h1>
          <p className='text-gray-600'>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='flex flex-col gap-4 p-5 hover:bg-blue-600 hover:text-white  cursor-pointer'>
          <h1 className='text-xl font-medium text-gray-700'>PERSONALIZATION</h1>
          <p className='text-gray-600'>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
