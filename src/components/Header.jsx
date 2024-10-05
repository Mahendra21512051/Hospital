import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    
  return (
    <div className='bg-blue-600 w-full h-full border rounded-lg flex overflow-auto'>
        {/*left box--------------*/}
        <div className=' flex flex-col w-1/2 h-full items-center gap-2 justify-around space-y-10 mt-20'>
            <div className='font-extrabold text-white text-start text-4xl'>
                book Appointment 
                <br/>
                with Trust 
                <br/>
                Doctor

     
            </div>
            <div className='flex flex-row gap-4 mt-5 ml-10'>
                <img className='w-20 h-10' src={assets.group_profiles} alt='group profile'/>
                <p>
                Simply browse through our extensive list of trusted 
                <br/>
                doctors, 
                <br/>
                schedule your appointment hassle-free.
                </p>
            </div>
            <div className='flex items-center gap-2 bg-white rounded-lg cursor-pointer mt-20 px-4 py-2 mb-10'>
                 <a href='#speciality' className='font-bold text-sm flex flex-row gap-3'>Book Appointment
                 
                  <img className="w-5 h-5" src={assets.arrow_icon} alt='arrow icon' />
                 </a>
                 </div>
              </div>
        {/*------right Box--------*/}
        <div className='w-1/2 '>
            <img src={assets.header_img} alt='header image'/>

        </div>
        
    </div>
    
  )
}

export default Header;