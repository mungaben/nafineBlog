


import Posts from '@/components/Posts';

export default async function Home() {
 

  
  return (
    <main className="flex flex-col w-full   min-h-screen p-24 bg-[#fafafafa]/90 text-[#000001] ">
   
    <center className=' flex items-center justify-center mt-20 sm:mt-20   mx-auto border-black border-2 w-full h-full    '>
      <section>
        <div>
          <Posts/>
        </div>
      </section>
    </center>
    </main>
  )
}
