// Cevrem.net Role Badge Bileşeni - RoleBadge.js
import React from 'react';

const RoleBadge = ({ role }) => {
  let badgeStyle = "";
  switch (role) {
    case 'Alpha':
      badgeStyle = "bg-green-100 text-green-800";
      break;
    case 'Golden':
      badgeStyle = "bg-yellow-100 text-yellow-800";
      break;
    case 'Premium':
      badgeStyle = "bg-purple-100 text-purple-800";
      break;
    default:
      badgeStyle = "bg-gray-100 text-gray-800";
  }

  return (
    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${badgeStyle}`}>
      {role}
    </span>
  );
};

export default RoleBadge;
