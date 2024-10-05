import React, { useContext } from 'react'

import { Navigate, useNavigate } from 'react-router-dom'
import Appointment from '../pages/Appointment';
import { Appcontext } from '../context/Appcontext';

const TopDoctor = () => {
    const Navigate= useNavigate();
    const {doctors} = useContext(Appcontext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
       
            <h1 className='text-3xl font-medium'>Top doctor to Book</h1>
            <p className='sm:w-1/3 py-4 '>Simply browse through our extensive list of trusted doctors.</p>
            <div className='w-full grid grid-cols-4 flow-col gap-4 pt-5 gap-y-6 sm:px-0'>
                {
                    doctors.slice(0,10).map((item,index)=>(
                        <div onClick={()=>Navigate(`/appointment/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                            <img className='bg-blue-50' src={item.image} alt=" "/>
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                    <p className='w-2 h-2 rounded-full bg-green-500'></p>
                                    <p className=''>Available</p>
                                    </div>
                                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                    <p className='text-gray-500 text-sm'>{item.speciality}</p>
                                </div>
                            </div>

                    ))
                }
            </div>

        <button onClick={()=>{Navigate('/Doctor'); scrollTo(0,0)}}className='bg-blue-50  text-gray-800 items-center px-12 py-3 rounded-full mt-5 font-medium'>more</button>
       
    </div>
  )
}

export default TopDoctor