


import Latest from '@/components/Latest'
import { getPosts } from '@/sanity/UTILS/Posts'

export default async function Home() {
 
  const posts=await  getPosts()
  console.log("posts",posts);
  
  // const dataavil=useCallback(async ()=>{
  //   const { setData,data}=usePostStore()
  //   
  //   setData(posts)
  //   console.log("fdata available",posts);
  //   console.log("datata",data);
    
    
  // } ,[])
  // console.log("data");
  // useEffect(()=>{
  //   dataavil()
  // },[])
  
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
