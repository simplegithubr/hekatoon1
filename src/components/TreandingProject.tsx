
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
 function TreandingProject() {
  return (
    <div className='w-[1350px] h-[550px] bg-[#F1F0FF]  '>
        <div  className='w-[1050px] h-[550px] flex items-center justify-center  mx-auto gap-[55px] p-9 ' >
            {/**img */}
            <div className='w-[300px] h-[350px] bg-[#F5E1FC] rounded-full '>
             <Image src="/sofaimg.png" alt='img' width={609} height={650} ></Image>
            </div>
            <div className='mt-7 w-[500px]' >

            <h2 className=' text-3xl mt-3 text-[#1A0B5B]'>Unique Features Of leatest &
            Trending Poducts</h2>
            <p className='text-sm mt-3 text-[#ACABC3]'>All frames constructed with hardwood solids and laminates</p>
            <p className='text-sm mt-3 text-[#ACABC3]'>Reinforced with double wood dowels, glue, screw - nails corner 
            blocks and machine nails</p>
            <p className='text-sm mt-3 text-[#ACABC3]'>Arms, backs and seats are structurally reinforced</p>
            
            <div className='flex '>
                <Link className=' bg-pink-500  text-white  p-2 px-4 mt-4 ml-3 mr-4 ' href="/" >Add To Cart</Link>
                
                
                <p className='mt-7 ml-5 text-[#1A0B5B]'>B&B Italian Sofa </p> 
                <p className='mt-7 ml-2 text-[#1A0B5B]'>$32.00</p>
                
                </div>
                </div>
           

        </div>
      
    </div>
  )
}
export default TreandingProject