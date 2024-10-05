import React, { useEffect, useState, useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctor = ({ speciality, docId }) => {
    const { doctors } = useContext(Appcontext) // Correctly using useContext to get doctors from Appcontext
    const [relDoc, setRelDocs] = useState([])
    const navigate = useNavigate() // Fixed navigate to lowercase (as per React Router convention)

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDocs(doctorsData)
        }
    }, [doctors, speciality, docId])

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Related Doctors</h1>
            <p className='sm:w-1/3 py-4'>Simply browse through our extensive list of trusted doctors.</p>
            <div className='w-full grid grid-cols-4 gap-4 pt-5 gap-y-6 sm:px-0'>
                {
                    relDoc.slice(0, 5).map((item, index) => (
                        <div
                            onClick={() => navigate(`/appointment/${item._id}`)}
                            key={index}
                            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500' // Updated hover class
                        >
                            <img className='bg-blue-50' src={item.image} alt="Doctor" />
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                    <p className='w-2 h-2 rounded-full bg-green-500'></p>
                                    <p>Available</p>
                                </div>
                                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                <p className='text-gray-500 text-sm'>{item.speciality}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <button
                onClick={() => { navigate('/Doctor'); window.scrollTo(0, 0) }}
                className='bg-blue-50 text-gray-800 items-center px-12 py-3 rounded-full mt-5 font-medium'
            >
                More
            </button>
        </div>
    )
}

export default RelatedDoctor
