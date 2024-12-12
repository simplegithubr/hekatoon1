
import Sectionimg from '@/components/Sectionimg'
import React from 'react'
import Image from 'next/image'
import { CiHeart } from "react-icons/ci";
import { GoStarFill } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

export default function page() {
  return (
    <div className='md:w-[1300px] w-full md:h-[1500px] h-full mx-auto p-8 '>
      {/**part1 */}
        <div className='bg-[#F6F5FF] w-full'>
        <div className='md:w-[300px] w-full p-9  '>
            <h1 className='text-3xl'>My Account</h1>
            <div className='flex space-x-3 mt-2'>
                
                <p className='text-sm'>Home </p>
                <p className='text-sm'>Pages</p>
                <p className='text-sm text-pink-600'>My Account</p>
            </div>
        </div>
        </div>
        {/**part2 */}
        <div className='md:w-[1200px] w-full mx-auto mt-9  p-9 ml-[22%]'>
            <div className='md:flex-row flex flex-col'>
              <div className='mr-2'>
                <Image src="/Rectangle 134.png" alt='' width={100} height={100}></Image>
                <Image src="/Rectangle1.png" alt='' width={100} height={100}></Image>
                <Image src="/Rectangle 137.png" alt='' width={100} height={100}></Image>
              </div>
              <div className='border-gray-700 shadow-md'>
              <Image src="/Rectangle 138.png" alt='' width={240} height={600}></Image>
              </div>
              <div className='space-x-9 mt-2 flex flex-col justify-between'>
                <p className='ml-9 text-[#151875] text-2xl'>Playwood arm chair</p>
                <div className='flex'>
                <GoStarFill fill='yellow'/>
                <GoStarFill fill='yellow'/>
                <GoStarFill fill='yellow'/>
                <GoStarFill fill='yellow'/>
                <GoStarFill fill='yellow'/>
                    <p className='text-sm ml-2 text-[#151875]'>(22)</p>
                </div>
                <div className='flex gap-3'>
                    <p className='text-[#151875]'>$32.00</p>
                    <p className='text-[#Fb2E86]'>$32.00</p>
                </div>
                <h5 className='text-[#151875] '>Color</h5>
                <p className='text-[#A9ACC6] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus <br />porttitor purus, et volutpat sit.</p>
                <div className='flex gap-2'>
                    <h5 className='text-[#151875] ml-9'>Add To cart</h5>
                    <CiHeart size={16} className='mt-1'/>
                </div>
                <p className='text-[#151875]'>Categories:</p>
                <p className='text-[#151875]'>Tags</p>
                <div className='flex'>
                    <p className='text-sm text-[#151875]'>Share</p>
                    <GoArrowRight size={12} className='ml-4 bg-[#151875] rounded-full text-white mt-1'/>
                    <GoArrowRight size={12} className='ml-4 bg-[#Fb2E86] rounded-full text-white mt-1' />
                    <GoArrowRight size={12} className='ml-4 bg-[#151875] rounded-full text-white mt-1'/>
                </div>
              </div>


            </div>

        </div>
        {/**par3 */}
        <div className='md:w-[1200px] w-full md:h-[400px] h-full mt-6 p-14 mx-auto bg-[#F9F8FE]'>
          <ul className='md:flex-row flex flex-col  justify-evenly md:w-[500px] w-full gap-4'>
            <li className='text-xl  mt-2 text-[#151875] font-semibold mb-2 ml-2 underline'>Description</li>
            <li className='text-xl  mt-2 text-[#151875] font-semibold mb-2 ml-2'>Additional Info</li>
            <li className='text-xl  mt-2 text-[#151875] font-semibold mb-2 ml-2'>Reviews</li> 
            <li className='text-xl  mt-2 text-[#151875] font-semibold mb-2 ml-2'>Video</li>
          </ul>
          <div>
            <h1 className='text-xl  mt-2 text-[#151875] font-semibold mb-2 ml-2'>Varius tempor.</h1>
            <p className='text-base font-medium text-[#A9ACC6] ml-2'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
               ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac
                est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, 
                aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt.
                 Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat,
                  quis diam arcu, nulla lobortis justo netus
               dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            <h1 className='text-xl  mt-2 text-[#151875] font-semibold mb-2 ml-2'>More details</h1>
            <p className='text-base font-medium text-[#A9ACC6] '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            <p className='text-base font-medium text-[#A9ACC6] '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            <p className='text-base font-medium text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            <p className='text-base font-medium text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
          </div>

        </div>
        {/**part4 */}
        <div className='max-w-[800px] w-full md:h-[300px] h-full  mt-14 mx-auto'>
          <h1 className='text-xl  mt-2 text-[#151875] font-semibold'>Related Products</h1>
          <div className='md:flex-row flex flex-col space-x-6 mt-3'>
            <div>
              <Image src="/boys (1).png" alt='' width={470} height={350}></Image>
              <div className='flex justify-between '>
                <h3 className='text-xs  ml-2 text-[#151875] '>Mens Fashion Wear 
                </h3>
                <div className='flex  '>
                <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                <GoStarFill size={9} fill='gray' className='mt-1 '/>
                </div>

              </div>
              <p className='text-xs ml-2 text-[#151875] '>$43.00</p>
            </div>
            <div>
              <Image src="/boys (4).png" alt='' width={470} height={350}></Image>
              <div className='flex justify-between'>
                <h3 className='text-xs  ml-2 text-[#151875] '>Women’s Fashion
                </h3>
                <div className='flex '>
                <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                </div>

              </div>
              <p className='text-xs ml-2 text-[#151875] '>$43.00</p>
            </div>
            <div>
              <Image src="/boys (2).png" alt='' width={470} height={350}></Image>
              <div className='flex justify-between'>
                <h3 className='text-xs  ml-2 text-[#151875] '>Mens Fashion Wear</h3>
                <div className='flex '>
                <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                <GoStarFill size={9} fill='gray' className='mt-1 '/>
                </div>

              </div>
              <p className='text-xs ml-2 text-[#151875] '>$43.00</p>
            </div>
            <div>
              <Image src="/boys (3).png" alt='' width={470} height={350}></Image>
              <div className='flex justify-between'>
                <h3 className='text-xs ml-2 text-[#151875] '>Top Wall Digital Clock</h3>
                <div className='flex '>
                <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                <GoStarFill size={9} fill='gray' className='mt-1 '/>
                <GoStarFill size={9} fill='gray' className='mt-1 '/>
                </div>

              </div>
              <p className='text-xs ml-2 text-[#151875] '>$43.00</p>
            </div>
          </div>
        </div>
        <Sectionimg/>
      
    </div>
  )
}
