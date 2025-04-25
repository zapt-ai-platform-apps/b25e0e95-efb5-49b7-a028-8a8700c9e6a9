import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="bg-blue-700 text-white p-1.5 rounded-md">
        <span className="font-bold text-lg">T</span>
      </div>
      <div className="font-bold text-lg text-gray-900">Tee Mastery</div>
    </Link>
  );
}