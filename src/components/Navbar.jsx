import React, { useState } from 'react'
import {assets} from "../assets/assets"
import { NavLink, useNavigate } from 'react-router-dom'
export const Navbar = () => {
   const navigate = useNavigate();
   const[showMenu, setshowMenu] = useState(false);
   const[token, settoken] = useState(true);
  return (
    <div className='w-full h-14 border-b border-black items-center py-4 mb-5  flex flex-row justify-between '>
      <img onClick={()=>navigate('/')} className = " w-44 cursor-pointer"src={assets.logo} alt='images'/>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to="/">
          <li className='py-1 text-center text-gray-700 font-semibold text-xl '>
            Home
          </li>
          <hr className='border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden'/>
          </NavLink>
          <NavLink to="About">
          <li className='py-1 text-center text-gray-700 font-semibold text-xl'> 
            About
          </li>
          <hr className='border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden' />
          </NavLink >
          <NavLink to="Doctor">
          <li className='py-1 text-center text-gray-700 font-semibold text-xl'>
            Doctor
          </li>
          <hr className='border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden'/>
          </NavLink>
          <NavLink to="Content">
          <li className='py-1 text-center font-semibold text-gray-700 text-xl'>
            Contact
          </li>
          <hr className='border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden'/>
          </NavLink>
       

      </ul>
      <div>
        {

        token?
        <div className='flex items-center gap-2 cursor-pointer group relative '>
          <img className='w-8 rounded-full' src={assets.profile_pic} alt=''/>
          <img  className=" w-2.5"src={assets.dropdown_icon} alt=''/>
           <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block '>
          <div className='min-w-48 bg-stone-100 flex-col gap-x-40 '>
            <p onClick={()=>navigate('/MyProfile')} className="hover:text-black"> My Profile</p>
            <p onClick={()=>navigate('/MyAppointments')} className="hover:text-black"> MY Appointments</p>
            <p onClick={()=>settoken(false)} className="hover:text-black"> Logout</p>
          </div>
          </div>  
        </div>
        
      
         
          :
          


        <button onClick={()=>navigate("/login")}className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 text-white rounded-lg">
          Create Account
        </button>
        }
        
        </div>
      </div>
    
  )
}
export default Navbar;
