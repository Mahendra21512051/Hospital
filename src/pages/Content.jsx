import React from 'react'
import { assets } from '../assets/assets'

const Content = () => {
  return (
    <div className='w-full items-center text-center ml-20'>
      <h1 className='text-center font-semibold text-lg text-gray-600'>Contect Us</h1>
      <div className='flex flex-row  items-center max-w gap-10 mt-10  '>
        <div className='w-1/3 items-center'>
          <img src={assets.contact_image} alt='contect-us'/>
        </div>
        <div className='flex flex-col gap-5 items-center'>
          <h1 className='text-lg font-semibold text-gray-600  '>OUR OFFICE</h1>
          <p className='text-gray-500'>00000 Willms Station
          Suite 000, Washington, USA</p>
          <p className='text-gray-500'  >Tel: (000) 000-0000
            <br/>
          Email: greatstackdev@gmail.com</p>
          
          
          <h1 className='text-lg item-center font-semibold text-gray-600 '>CAREERS AT PRESCRIPTO</h1>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='text-gray-600 font-bold border border-black  cursor-pointer hover:bg-black hover:text-white duration-500 py-3 px-3 '>Lern more</button>
        </div>
      </div>
    </div>
  )
}

export default Content