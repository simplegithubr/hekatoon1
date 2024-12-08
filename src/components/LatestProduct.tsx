import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

 function LatestProduct() {
  return (
    <div className='w-[920px] h-[1100px] mx-auto text-center  '>
      <div className='mt-9 p-9'>
         <div className='w-[600px] h-[42px] mx-auto'>
          <h1 className='text-3xl font-bold  mb-8'>Latest Products</h1>
          </div>
          <div className='w-[827px] h-[72px] mx-auto mt-5'>
          <Link className='text-[#FB244B] underline mr-9  ' href="" >New Arrival</Link>
          <Link className='text-[#151875] mr-9' href="" >Best Seller</Link>
          <Link className='text-[#151875] mr-9' href="" >Featured</Link>
          <Link className='text-[#151875] mr-9' href="" >Special Offer</Link>
         </div>


      </div>
      
      <div className="w-[1000px] grid grid-cols-3 gap-6">
  {/* Product 1 */}
  <div className="flex flex-col items-center">
    {/* Card with background */}
    <div className="bg-gray-300 w-[300px] h-[300px] p-6 flex justify-center items-center">
      <Image src="/image16.png" alt="Product Image" width={250} height={250} />
    </div>
    {/* Text outside the card */}
    <div className="mt-3 text-center">
      <p>Comfort Handy Craft</p>
      <div className="flex gap-2 justify-center mt-1">
        <p className="text-sm text-[#151875]">$42.00</p>
        <p className="text-[#FB244B] line-through">$65.00</p>
      </div>
    </div>
  </div>

  {/* Product 2 */}
  <div className="flex flex-col items-center">
    <div className="bg-gray-300 w-[300px] h-[300px] p-6 flex justify-center items-center">
      <Image src="/image 15.png" alt="Product Image" width={250} height={250} />
    </div>
    <div className="mt-3 text-center">
      <p>Comfort Handy Craft</p>
      <div className="flex gap-2 justify-center mt-1">
        <p className="text-sm text-[#151875]">$42.00</p>
        <p className="text-[#FB244B] line-through">$65.00</p>
      </div>
    </div>
  </div>

  {/* Product 3 */}
  <div className="flex flex-col items-center">
    <div className="bg-gray-300 w-[300px] h-[300px] p-6 flex justify-center items-center">
      <Image src="/image3.png" alt="Product Image" width={250} height={250} />

    </div>
    <div className="mt-3 text-center">
      <p>Comfort Handy Craft</p>
      <div className="flex gap-2 justify-center mt-1">
        <p className="text-sm text-[#151875]">$42.00</p>
        <p className="text-[#FB244B] line-through">$65.00</p>
      </div>
    </div>
  </div>
</div>
{/*secd produts */}
<div className="w-[1000px] grid grid-cols-3 gap-6 mt-9">
  {/* Product 1 */}
  <div className="flex flex-col items-center">
    {/* Card with background */}
    <div className="bg-gray-300 w-[300px] h-[300px] p-6 flex justify-center items-center">
      <Image src="/image 23.png" alt="Product Image" width={250} height={250} />
    </div>
    {/* Text outside the card */}
    <div className="mt-3 text-center">
      <p>Comfort Handy Craft</p>
      <div className="flex gap-2 justify-center mt-1">
        <p className="text-sm text-[#151875]">$42.00</p>
        <p className="text-[#FB244B] line-through">$65.00</p>
      </div>
    </div>
  </div>

  {/* Product 2 */}
  <div className="flex flex-col items-center">
    <div className="bg-gray-300 w-[300px] h-[300px] p-6 flex justify-center items-center">
      <Image src="/image32.png" alt="Product Image" width={250} height={250} />
    </div>
    <div className="mt-3 text-center">
      <p>Comfort Handy Craft</p>
      <div className="flex gap-2 justify-center mt-1">
        <p className="text-sm text-[#151875]">$42.00</p>
        <p className="text-[#FB244B] line-through">$65.00</p>
      </div>
    </div>
  </div>

  {/* Product 3 */}
  <div className="flex flex-col items-center">
    <div className="bg-gray-300 w-[300px] h-[300px] p-6 flex justify-center items-center">
      <Image src="/image 3.png" alt="Product Image" width={300} height={300} />
    </div>
    <div className="mt-3 text-center">
      <p>Comfort Handy Craft</p>
      <div className="flex gap-2 justify-center mt-1">
        <p className="text-sm text-[#151875]">$42.00</p>
        <p className="text-[#FB244B] line-through">$65.00</p>
      </div>
    </div>
  </div>
</div>

  


    </div>
  )
}
export default LatestProduct

