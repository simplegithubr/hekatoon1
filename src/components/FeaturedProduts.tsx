

import React from 'react'
import Image from 'next/image'

function FeaturedProduts() {
  return (
    <div className='bg-gray-100 py-12'>
      
      <h1 className='text-3xl font-bold text-center mb-8'> Featured Products</h1>
      <div className='grid gap-6  xs:grid-cols-1 mx-auto md:w-[1220px] w-full p-9 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4'>
      <div className='relative bg-white rounded-lg shadow-lg p-8 hover:shadow-xl border '>
        <Image src="/chairs3.png" alt='' width={100} height={100} className='w-full h-40 rounded-md p-4 mb-4'></Image>
        <h3 className='text-lg font-semibold
        '>Cantilever Chair</h3>
        <p className='text-gray-500 mt-2'>Code: Y523201</p>
        <p className='text-blue-500 font-bold mt-2'>$42.00</p>

      </div>
      <div className='relative bg-white rounded-lg shadow-lg p-8 hover:shadow-xl border '>
        <Image src="/chairs1.png" alt='' width={100} height={100} className='w-full h-40 rounded-md p-4 mb-4'></Image>
        <h3 className='text-lg font-semibold
        '>Cantilever Chair</h3>
        <p className='text-gray-500 mt-2'>Code: Y523201</p>
        <p className='text-blue-500 font-bold mt-2'>$42.00</p>

      </div>
      <div className='relative bg-white rounded-lg shadow-lg p-8 hover:shadow-xl border '>
        <Image src="/chairs4.png" alt='' width={50} height={50} className='w-full h-40 rounded-md p-4 mb-4'></Image>
        <h3 className='text-lg font-semibold
        '>Cantilever Chair</h3>
        <p className='text-gray-500 mt-2'>Code: Y523201</p>
        <p className='text-blue-500 font-bold mt-2'>$42.00</p>

      </div>
      <div className='relative bg-white rounded-lg shadow-lg p-8 hover:shadow-xl border '>
        <Image src="/chairs2.png" alt='' width={100} height={100} className='w-full h-40 rounded-md p-4 mb-4'></Image>
        <h3 className='text-lg font-semibold
        '>Cantilever Chair</h3>
        <p className='text-gray-500 mt-2'>Code: Y523201</p>
        <p className='text-blue-500 font-bold mt-2'>$42.00</p>

      </div>
      </div>
    </div>
  )
}

export default FeaturedProduts
