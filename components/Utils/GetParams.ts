
"use client"
import { useParams } from 'next/navigation'


export const GetParams = () => {
    const {tag} = useParams()
    return {tag}
}

