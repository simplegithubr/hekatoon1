
import React from 'react'
import Image from 'next/image'

 function ShopixOffer() {
  return (
 <div className='w-[1092px] h-[400px] mx-auto text-center'>
    <div className='w-[700px] h-42px] mx-auto  '>
        <h1 className='text-3xl font-bold  mb-8 text-[#1A0B5B] ' >What Shopex Offer!</h1>
    </div>
    <div className="w-[1200px] h-[200px] mx-auto mr-6 grid grid-cols-4 gap-9 mt-9" >
        
            <div className='bg-gray-100 w-[250px] h-[250px] p-6 flex justify-center items-center flex-col'>
                <Image src="/deliver.png" alt='' width={100}  height={100}></Image>
                <p className='mt-2 text-2xl text-[#1A0B5B]  '>24/7 Support</p>
            <p className='text-sm mt-2 text-gray-500 hover:text-[#1A0B5B]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
            </div>
            <div className='bg-gray-100 w-[250px] h-[250px] p-6 flex justify-center items-center flex-col'>
                <Image src="/cashback.png" alt='' width={100}  height={100}></Image>
                <p className='mt-3 text-2xl text-[#1A0B5B]  '>24/7 Support</p>
            <p className='text-sm mt-2 text-gray-500 hover:text-[#1A0B5B]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
            </div>
            <div className='bg-gray-100 w-[250px] h-[250px] p-6 flex justify-center items-center flex-col'>
                <Image src="/premium.png" alt='' width={100}  height={100}></Image>
                <p className='mt-3 text-2xl text-[#1A0B5B]  '>24/7 Support</p>
            <p className='text-sm mt-2 text-gray-500 hover:text-[#1A0B5B]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
            </div>
            <div className='bg-gray-100 w-[250px] h-[250px] p-5 flex justify-center items-center flex-col'>
                <Image src="/24-hours-support.png" alt='' width={100}  height={100}></Image>
                <p className='mt-3 text-2xl text-[#1A0B5B]  '>24/7 Support</p>
            <p className='text-sm mt-2 text-gray-500 hover:text-[#1A0B5B]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
            </div>


        </div>
    
 </div>
  )
}
export default ShopixOffer