

"use client"
import Image from 'next/image'
import { getPosts } from '@/sanity/UTILS/Posts'
import { log } from 'console'
import { PortableText } from '@portabletext/react'
import usePostStore from '@/Stores/POstStore'
import { useCallback, useEffect } from 'react'
import Latest from '@/components/Latest'

export default async function Home() {
 
  
  const dataavil=useCallback(async ()=>{
    const { setData,data}=usePostStore()
    const posts=await  getPosts()
    setData(posts)
    console.log("fdata available",posts);
    console.log("datata",data);
    
    
  } ,[])
  console.log("data");
  useEffect(()=>{
    dataavil()
  },[])
  
  return (
    <main className="flex flex-col w-full   min-h-screen p-24 bg-slate-200/70 ">
     {/* {
      posts?.map((post)=>(
        <div key={post?._id} className=' w-fit text-ellipsis overflow-hidden  mt-16    '>
          <div className='truncate overflow-hidden ' >
          <PortableText   value={post.body}/>
          </div>
         
        </div>
      ))
     } */}
     <Latest/>
    </main>
  )
}
