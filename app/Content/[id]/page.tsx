
import Link from 'next/link'
import React from 'react'
import Contents from '@/components/Contents'

type paramprops = {
  id: string
}


const page = (
    { params }: { params: { id: string } }
) => {
  const { id } = params
 
  


  
  
  // const dataavil=Posts?.find((post)=>post._id===id)
  

  
    
  return (
    <div className='  min-h-screen  bg-[#fafafafa]/90 text-[#000001] mx-auto  w-4/5 mt-10 '>
        <div className='flex-col justify-center items-center  h-full mx-auto '>

            {/* <Link href={'/'}>Home</Link> */}
            <div className=' mx-auto ' >
              <Contents id={id}/>
            </div>
        </div>

    </div>
  )
}

export default page