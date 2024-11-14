// Cevrem.net Profile Card Bileşeni - ProfileCard.js
import React from 'react';

const ProfileCard = ({ user }) => {
  if (!user) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <div className="flex items-center space-x-4">
        <img
          src={user.profilePicture || '/default-profile.png'}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.name || 'İsim Belirtilmemiş'}</h2>
          <p className="text-gray-600">{user.role || 'Rol Belirtilmemiş'}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-800">{user.bio || 'Biyografi bilgisi mevcut değil.'}</p>
      </div>
      <div className="flex mt-4 space-x-2">
        {user.skills && user.skills.length > 0 ? (
          user.skills.map((skill, index) => (
            <span
              key={index}
              className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))
        ) : (
          <span className="text-gray-600">Yetenek bilgisi mevcut değil.</span>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
