import Image from 'next/image'
 import React from 'react';




export default function Hero() {
  return (
    <div className="py-12  md:w-[1300px] max-h-[600px] w-full h-full p-9 mt-9 ml-9 mx-auto  ">
      <div className='max-w-[1300px] w-full mx-auto flex flex-col md:flex-row items-center '>
        <div className='text-center lg:text-left md:w-1/2 space-y-4'>
        <p className='text-sm text-pink-500 font-medium'>
        Best Furniture For Your Castle...
        </p>
        <h1 className='text-4xl font-bold text-gray-600 leading-tight'></h1>
        <p className='text-gray-600'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
                    est adipiscing in phasellus non in justo.
        </p>
        <button className='bg-pink-500 text-white px-6 p-2 rounded-md '>Shop Now</button>

        </div>

        <div className='md:w-1/2 flex items-center justify-center relative mt-8 md:mt-0'>
        <Image src="/chair.png" alt="chair" width={200}  height={200} className='w-3/4'/>
        <div className='absolute top-4 right-4 bg-blue-500 text-white text-sm font-bold rounded-full md:w-16 md:h-16 flex items-center justify-center  '>
        50% <br /> off
        </div>

        </div>



      </div>
      
    </div>
  )
}
