import React from 'react'
import Posts from './Posts'
import Headline from './Headline'

const HomePage = () => {
  console.log("homrpage");
  
  return (
    <div className='flex w-full px-2 no-scrollbar'>

    
    <center className=''>
     <section>
      <div>
        <Headline/>
      </div>
     </section>
    <section className='w-screen md:w-9/12 sm:w-4/5'>
      <div className='flexjustify-center '>
        <Posts/>
      </div>
    </section> 
  </center> 
  </div>
  )
}

export default HomePage