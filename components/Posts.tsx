import React from 'react'
import Latest from './Latest'
import Trending from './Trendings/Trending'

const Posts = () => {
  return (
    <div className='flex-col w-full '>
        <div >
           <Latest/>
        </div>
        <div className='w-full '>
            <Trending/>
        </div>
    </div>
  )
}

export default Posts