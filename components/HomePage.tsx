import React from 'react'
import Posts from './Posts'

const HomePage = () => {
  return (
    <div className='flex px-2  no-scrollbar '>

    
    <center className='mx-auto '> 
    <section className=''>
      <div className='w-screen'>
        <Posts/>
      </div>
    </section>
  </center>
  </div>
  )
}

export default HomePage