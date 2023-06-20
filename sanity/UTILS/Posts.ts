import {groq } from 'next-sanity'
import {client} from '@/sanity/lib/client'

export const getPosts = async () => {
    const posts = await client.fetch(
        groq`*[_type == "post"]{
        _id,
        title,
        slug,
        "author": author-> {
            _id,
            name
        }}
    `)
    return posts
}