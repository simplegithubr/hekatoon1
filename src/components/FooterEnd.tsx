import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
function FooterEnd() {
  return (
    <div className=' w-[1350px]  bg-gray-300 flex  justify-center gap-9 p-2'>
        <p className='text-sm text-[#ACABC3]'>©Webecy - All Rights Reserved</p>
        <div className='flex gap-3 ml-9'>
        <CiFacebook size={20} className='bg-[#1A0B5B] text-white rounded-full'/>
        <CiLinkedin size={20} className='bg-[#1A0B5B] text-white rounded-full'/>
        <CiTwitter size={20} className='bg-[#1A0B5B] text-white rounded-full'/>
        </div>
      
    </div>
  )
}

export default FooterEnd
