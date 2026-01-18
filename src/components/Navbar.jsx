import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 border-b border-transparent"> 
      {/* Swapped: Now says khushalogs */}
      <div className="text-xl font-medium">
        <Link to="/">khushalogs</Link>
      </div>

      <ul className="flex gap-8 text-sm font-light uppercase tracking-wide">
        <li className="cursor-pointer hover:text-gray-500">About</li>
        <li className="cursor-pointer hover:text-gray-500">Services</li>
        <li className="cursor-pointer hover:text-gray-500">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;