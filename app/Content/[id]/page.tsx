import Link from 'next/link'
import React from 'react'
type paramprops = {
  id: string
}


const page = (
    { params }: { params: { id: string } }
) => {
  const { id } = params
    
  return (
    <div className='flex flex-col w-full   min-h-screen p-24 bg-[#fafafafa]/90 text-[#000001] '>
        <div className='flex items-center justify-center h-full mx-auto mt-20 border-2 border-black sm:mt-20'>
            <Link href={'/'}>Home</Link>
        </div>
    </div>
  )
}

export default page