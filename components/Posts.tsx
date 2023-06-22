import React from 'react'
import Latest from './Latest'
import Trending from './Trendings/Trending'

const Posts = () => {
  return (
    <div>
        <div>
           <Latest/>
        </div>
        <div>
            <Trending/>
        </div>
    </div>
  )
}

export default Posts