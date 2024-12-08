// components/FurnitureCollection.js
import React from 'react';

function FurnitureCollection  ()  {
  return (
    <div className=" py-12 w-[1300px] max-h-[600px] p-9 mt-9 ml-9 mx-auto">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center px-4">
        {/* Left Section */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-4">
          <p className="text-sm text-pink-500 font-medium">
            Best Furniture For Your Castle...
          </p>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full font-medium">
            Shop Now
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex items-center justify-center relative mt-8 lg:mt-0">
          {/* Chair Image */}
          <img
            src="/chair.png" // Replace with the actual image path
            alt="Chair"
            className="w-3/4"
          />

          {/* Discount Badge */}
          <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm font-bold rounded-full w-16 h-16 flex items-center justify-center">
            50%<br />Off
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCollection;
