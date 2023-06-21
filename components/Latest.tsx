
"use client"
import usePostStore from '@/Stores/POstStore'
import { log } from 'console'
import React, { useCallback, useState } from 'react'
import { useEffect } from 'react';

const Latest = async() => {
  const [postdata, setpostdata] = useState([])
  const datavail=useCallback(()=>{
    const {data}=usePostStore()
    setpostdata(data)


  },[])
  console.log("data",postdata);
  
    useEffect(()=>{
      datavail()
    },[])
   
    
  return (
    <div>Latest</div>
  )
}

export default Latest