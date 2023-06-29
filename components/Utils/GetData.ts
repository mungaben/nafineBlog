// get store data
"use client"
import usePostStore from "@/Stores/PostStore"
import { shallow } from "zustand/shallow"


export const getData = () => {
    const data=usePostStore((state)=>state.data,shallow)
    return data
}