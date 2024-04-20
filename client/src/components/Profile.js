import React from 'react';
const Profile = ({ user }) => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white shadow-md rounded-md">
      <div className="flex items-center">
        <img
          //src={user.avatar ? user.avatar : defaultAvatar}
          alt="User Avatar"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-700">{user.bio}</p>
      </div>
      {/* Add more user information as needed */}
    </div>
  );
};

export default Profile;
