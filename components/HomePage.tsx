import React from 'react'
import Posts from './Posts'

const HomePage = () => {
  return (
    <div className='flex mx-auto overflow-x-auto border-2 border-black md:mx-10 sm:mt-20 no-scrollbar'>

    
    <center className='flex'>
    <section className=''>
      <div className=''>
        <Posts/>
      </div>
    </section>
  </center>
  </div>
  )
}

export default HomePage