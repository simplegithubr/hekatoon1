// components/Navbar.js
import React from 'react';
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md w-[1117px] h-[50px] mx-auto mt-5  ">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto px-4 py-2 ">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">Hekto</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <a href="#" className="text-pink-500">Home</a>
          <a href="#">Pages</a>
          <a href="#">Products</a>
          <a href="#">Blog</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </nav>

        {/* Search Icon */}
        <div className="flex justify-between bg-white border rounded-md  text-sm focus:outline-none   ">
        
          <input type="text" />
          <CiSearch  size={32} className='bg-pink-500 rounded  px-1 text-white'/>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
