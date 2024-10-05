import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
const SpecalityMenu = () => {
  return (
    <div  id ="speciality" className='mt-10 items-center flex flex-col gap-1 '>
        <div className='text-3xl font-medium'>
          Find Specality
        </div>
        <div> 
         <p>Simply browse through our extensive list of trusted </p>
         <p>doctors, schedule your appointment hassle-free.</p>
        </div>
        <div className='flex sm:justify-center flex-row mt-5 gap-4 w-full overflow-scroll'>
            {
                specialityData.map((item,index)=>(
                    <Link onClick={()=> scrollTo(0,0)} className='flex flex-col items-center cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transilation-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                    <img className="w-20 sm:w-24 mb-2" src={item.image} alt="jj"/>
                    <p>{item.speciality}</p>

                    </Link>



                )

                )
            }

        </div>





    </div>
  )
}

export default SpecalityMenu