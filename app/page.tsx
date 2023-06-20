import Image from 'next/image'
import { getPosts } from '@/sanity/UTILS/Posts'
import { log } from 'console'
import { PortableText } from '@portabletext/react'

export default async function Home() {
  const posts=await  getPosts()
  log(posts)
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
     {
      posts?.map((post)=>(
        <div key={post._id}>
          <PortableText value={post.body}/>
        </div>
      ))
     }
    </main>
  )
}
