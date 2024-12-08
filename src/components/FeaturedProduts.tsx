import React from "react";

const FeaturedProducts = () => {
  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid gap-6 xs:grid-cols-1 mx-auto w-[1220px]  p-9 sm:grid-cols-2 lg:grid-cols-4 px-4">
        {/* Card 1 */}
        <div className="relative bg-white rounded-lg shadow-lg p-8 hover:shadow-xl border">
          <img
            src="/chairs3.png" // Replace with your image URL
            alt="Cantilever Chair"
            className="w-full h-40 object-cover rounded-md p-4 mb-4"
          />
          <h3 className="text-lg font-semibold mt-[33px]">Cantilever Chair</h3>
          <p className="text-gray-500 mt-2">Code: Y523201</p>
          <p className="text-blue-600 font-bold mt-2">$42.00</p>
        </div>

        {/* Card 2 with hover effect */}
        <div className="relative bg-white  text-white rounded-lg shadow-lg p-9 hover:shadow-xl">
          <img
            src="/chairs1.png" // Replace with your image URL
            alt="Cantilever Chair"
            className="w-full h-40 object-cover rounded-md mb-4 opacity-80 hover:opacity-100 transition"
          />
          <button className="absolute  left-9 bg-green-500 text-white px-4 py-2 rounded">
            View Details
          </button>
          <h3 className="text-lg font-semibold mt-[66px] text-black">Cantilever Chair</h3>
          <p className="text-gray-500">Code: Y523201</p>
          <p className="font-bold text-red-400">$42.00</p>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white rounded-lg shadow-lg p-9 hover:shadow-xl border">
        <img
            src="/chairs4.png" // Replace with your image URL
            alt="Cantilever Chair"
            className="w-full h-40 object-cover rounded-md mb-4 opacity-80 hover:opacity-100 transition"
          /> 
          
          <h3 className="text-lg font-semibold mt-[33px]">Cantilever Chair</h3>
          <p className="text-gray-500 mt-2">Code: Y523201</p>
          <p className="text-blue-600 font-bold mt-2">$42.00</p>
        </div>

        {/* Card 4 */}
        <div className="relative bg-white rounded-lg shadow-lg p-9 hover:shadow-xl border">
          <img
            src="/chairs2.png" // Replace with your image URL
            alt="Cantilever Chair"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold mt-[33px]">Cantilever Chair</h3>
          <p className="text-gray-500 mt-2">Code: Y523201</p>
          <p className="text-blue-600 font-bold mt-2">$42.00</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

