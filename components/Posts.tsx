import React from 'react'
import Latest from './Latest'
import Trending from './Trendings/Trending'

const Posts = () => {
  return (
    <div className='flex-col '>
        <div >
           <Latest/>
        </div>
        <div className='flex overscroll-contain'>
            <Trending/>
        </div>
    </div>
  )
}

export default Posts