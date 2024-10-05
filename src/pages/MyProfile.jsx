import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Mahendra Kumar',
    image: assets.profile_pic,
    email: 'mahendramaury420@gmail.com',
    phone: '+91 9555642486',
    address: {
      line1: 'Phrenda Mahrajganj',
      line2: 'Anandnagar Mahrajganj',
    },
    gender: 'Male',
    dob: '2004-12-14',
  });

  const [isEdit, setEdit] = useState(false);

  return (
    <div className='p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto'>
      <div className='flex justify-center'>
        <img src={userData.image} alt="Profile" className='w-32 h-32 rounded-full shadow-md' />
      </div>

      {isEdit ? (
        <input
          type='text'
          value={userData.name}
          onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
          className='block w-full border rounded-md p-2 mt-4 text-center text-lg font-semibold'
        />
      ) : (
        <p className='text-center text-2xl font-bold mt-4'>{userData.name}</p>
      )}

      <hr className='my-6' />

      <div>
        <p className='font-bold text-lg mb-3'>Contact Information</p>
        <div className='space-y-4'>
          <div className='flex justify-between'>
            <p className='font-semibold'>Email ID:</p>
            <p className='bg-gray-200 px-2 py-1 rounded-md'>{userData.email}</p>
          </div>
          <div className='flex justify-between'>
            <p className='font-semibold'>Phone:</p>
            {isEdit ? (
              <input
                type='text'
                value={userData.phone}
                onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
                className='bg-gray-100 px-2 py-1 rounded-md border border-gray-300'
              />
            ) : (
              <p className='bg-gray-200 px-2 py-1 rounded-md'>{userData.phone}</p>
            )}
          </div>

          <div>
            <p className='font-semibold'>Address:</p>
            {isEdit ? (
              <div className='space-y-2'>
                <input
                  type='text'
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  className='w-full bg-gray-100 px-2 py-1 rounded-md border border-gray-300'
                />
                <input
                  type='text'
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  className='w-full bg-gray-100 px-2 py-1 rounded-md border border-gray-300'
                />
              </div>
            ) : (
              <p className='bg-gray-200 px-2 py-1 rounded-md'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>
      </div>

      <hr className='my-6' />

      <div>
        <p className='font-bold text-lg mb-3'>Basic Information</p>
        <div className='space-y-4'>
          <div className='flex justify-between'>
            <p className='font-semibold'>Gender:</p>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
                className='bg-gray-100 px-2 py-1 rounded-md border border-gray-300'
              >
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
              </select>
            ) : (
              <p className='bg-gray-200 px-2 py-1 rounded-md'>{userData.gender}</p>
            )}
          </div>

          <div className='flex justify-between'>
            <p className='font-semibold'>Birthday:</p>
            {isEdit ? (
              <input
                type='date'
                value={userData.dob}
                onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
                className='bg-gray-100 px-2 py-1 rounded-md border border-gray-300'
              />
            ) : (
              <p className='bg-gray-200 px-2 py-1 rounded-md'>{userData.dob}</p>
            )}
          </div>
        </div>
      </div>

      <div className='mt-6 text-center'>
        {isEdit ? (
          <button
            onClick={() => setEdit(false)}
            className='bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition'
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setEdit(true)}
            className='bg-gray-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-600 transition'
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
