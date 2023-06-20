import Image from 'next/image'
import { getPosts } from '@/sanity/UTILS/Posts'
import { log } from 'console'

export default async function Home() {
  const posts=await  getPosts()
  log(posts)
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
     
    </main>
  )
}
