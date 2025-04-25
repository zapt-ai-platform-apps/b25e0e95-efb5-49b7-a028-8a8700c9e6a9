import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-xl font-bold text-blue-700">Tee Mastery</span>
    </Link>
  );
}