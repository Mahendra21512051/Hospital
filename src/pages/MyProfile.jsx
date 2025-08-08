import { useEffect, useState } from 'react';
import axios from 'axios';
import { assets } from '../assets/assets';
import { useAuth } from '../context/Appcontext';
import { useNavigate } from "react-router-dom";


const MyProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const userId = user?.data.user._id;
  
  const [userData, setUserData] = useState(null);
  const [isEdit, setEdit] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/profile/${userId}`);
      setUserData(response.data.user);

    } catch (error) {
      console.error('Error fetching profile data:', error.message);
    }
  };

  useEffect(() => {
    if (!user || !user.data?.user?._id) {
      navigate("/"); 
    } else {
      fetchUserData();
    }
  }, [user, navigate]);
  

  if (!userData) return <p className="text-center mt-10 gradient-heading">Loading profile...</p>;

  return (
    <div className='p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-20'>
      <div className='flex justify-center'>
        <img src={userData.image || assets.profile_pic} alt="Profile" className='w-32 h-32 rounded-full shadow-md' />
      </div>

      {isEdit ? (
        <input
          type='text'
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          className='block w-full border rounded-md p-2 mt-4 text-center text-lg font-semibold'
        />
      ) : (
        <p className='text-center text-2xl font-bold mt-4 gradient-heading'>{userData.name}</p>
      )}

      <hr className='my-6' />

      <div>
        <p className='font-bold text-lg mb-3 gradient-heading'>Contact Information</p>
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
                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                className='bg-gray-100 px-2 py-1 rounded-md border border-gray-300'
              />
            ) : (
              <p className='bg-gray-200 px-2 py-1 rounded-md'>{userData.phone}</p>
            )}
          </div>

          <div>
            <p className='font-semibold gradient-heading'>Address:</p>
            {isEdit ? (
              <div className='space-y-2'>
                <input
                  type='text'
                  value={userData.address || ''}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, address: e.target.value },
                    }))
                  }
                  className='w-full bg-gray-100 px-2 py-1 rounded-md border border-gray-300'
                />
               
              </div>
            ) : (
              <p className='bg-gray-200 px-2 py-1 rounded-md'>
                {userData.address}
                <br />
              
              </p>
            )}
          </div>
        </div>
      </div>

      <hr className='my-6' />

      <div>
        <p className='font-bold text-lg mb-3 gradient-heading'>Basic Information</p>
        <div className='space-y-4'>
          <div className='flex justify-between'>
            <p className='font-semibold'>Gender:</p>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
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
                onChange={(e) => setUserData({ ...userData, dob: e.target.value })}
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
            className=' text-white px-6 py-2 rounded-md shadow-md gradient-bg transition'
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setEdit(true)}
            className=' text-white px-6 py-2 rounded-md gradient-bg transition'
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
