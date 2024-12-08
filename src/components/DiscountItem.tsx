
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function DiscountItem() {
  return (
    <div className='max-w-[920px] mx:h-[600px] mx-auto text-center  '>
        <div className='mt-9 p-9'>
         <div className='w-[600px] h-[42px] mx-auto'>
          <h1 className='text-3xl font-bold  mb-8'>Discount Item</h1>
          </div>
          <div className='w-[827px] h-[72px] mx-auto mt-5'>
          <Link className='text-[#FB244B] underline mr-9  ' href="" >Wood Chair</Link>
          <Link className='text-[#151875] mr-9' href="" >Plastic Chair</Link>
          <Link className='text-[#151875] mr-9' href="" >Sofa Colletion</Link>
        
         </div>


      </div>
      <div className='w-[970px] mb-[20%]'>
      <div className='flex '>
        {/**left-side */}
       <div className='mt-[10%] w-[700px] '>
        <h1 className='text-2xl font-bold text-[#151875] mr-[25%]'>20% Discount Of All Products</h1>
        <h5 className='mr-[65%] mt-4 text-sm text-[#ACABC3]'>Eams Sofa Compact</h5>
        <p className='text-sm mt-4 mr-[25%]  text-[#ACABC3]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Eu eget  feugiat habitasse nec,  bibendum condimentum.</p> 
        
        <div className='flex gap-5' >
            <p className='text-sm mt-4  text-[#ACABC3]'>✔Material expose like metals</p>
            <p className='text-sm mt-4  text-[#ACABC3]'>✔Clear lines and geomatric figures</p>
        </div>
        <div className='flex gap-5'>
            <p className='text-sm mt-4  text-[#ACABC3]'>✔ Simple neutral colours.</p>
            <p className='text-sm mt-4 ml-4 text-[#ACABC3]' >✔Material expose like metals</p>
        </div>
        <button className="mt-6 px-4 mr-[76%] py-2 bg-pink-500 text-white rounded hover:bg-pink-600">Shop Now</button>

       </div>
       {/**rigt section */}
       <div className='bg-pink-100 rounded-full '>
       <Image src="/tortuga.png" alt='image' width={700} height={800} ></Image>
       </div>

      </div>
      </div>
      
    </div>
  )
}
