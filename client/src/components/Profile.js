import React, { useState } from 'react';
import axios from 'axios';
import {useAuth} from '../contexts/auth';
const Profile = () => {
  const [formData, setFormData] = useState({
    avatar: './Coins.jpg',
    gender: 'male',
    bio: ''
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const { userLoggedIn ,currentUser} = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.put(`http://localhost:5000/api/profile/addData/&token=${currentUser.uid}`, formData,{headers: {
            'Content-Type': 'multipart/form-data'
          }});

      console.log(res.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <div className="flex items-center">
          <img
            src={formData.avatar || 'defaultAvatar.jpg'}
            alt="User Avatar"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <input
              type="file"
              name="avatar"
              onChange={handleChange}
              className="mb-2"
            />
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">About Me</h3>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="text-gray-700"
            placeholder="Bio"
          />
        </div>
        <div className="mt-4">
          <label className="text-gray-600">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="ml-2"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save</button>
      </form>
    </div>
  );
};

export default Profile;
