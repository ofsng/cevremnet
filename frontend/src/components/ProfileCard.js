// Çevrem.net Profile Card Bileşeni - ProfileCard.js
import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <div className="flex items-center space-x-4">
        <img
          src={user.profilePicture || '/default-profile.png'}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.role}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-800">{user.bio}</p>
      </div>
      <div className="flex mt-4 space-x-2">
        {user.skills.map((skill, index) => (
          <span
            key={index}
            className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
