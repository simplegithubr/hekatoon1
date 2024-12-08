// components/Header.js
import React from 'react';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { VscCheck } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
function Header () {
  return (
    <div className="bg-purple-500 text-white text-sm py-4 px-4 w-[1350px]  h-[44px] mx-auto">
      <div className="flex justify-evenly items-center max-w-[1600px] mx-auto">
        {/* Left Section */}
        <div className="flex space-x-4  mr-[22%]">
          <p>
            <i className="fas fa-envelope"></i> nhhasanul@gmail.com
          </p>
          <div className='flex gap-2'>
          <MdOutlinePhoneInTalk size={20} />
          <p>
            <i className="fas fa-phone"></i> (12345)67890
          </p>
         
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-2 items-center ">
          <div className='flex gap-2'>
          <p>English</p>
          <VscCheck />
          </div>
          <div className='flex gap-2'>
          <p>USD</p>
          <VscCheck />
          </div>
          <div className='flex gap-2 '>
          <p>Login</p>
          <VscAccount className='mt-1' />
          </div>
          <div  className='flex gap-2 '>
          <p>Wishlist</p>
          <CiHeart size={22}/>
          </div>
          <p>
            <i className="fas fa-shopping-cart"></i>
          </p>
          <MdOutlineShoppingCart size={22} />
        </div>
      </div>
    </div>
  );
};

export default Header;
