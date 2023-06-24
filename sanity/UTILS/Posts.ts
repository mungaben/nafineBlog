import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

import {Posttypes} from '@/components/Types'
export const getPosts =async () => {
    const posts = await client.fetch(
        groq`*[_type == "post"   ]| order(_createdAt desc)
        {
 _id,
 _createdAt,
      title,
      "slug": slug.current,
      author->{name, slug, image},
      "image": mainImage.asset->url,
     
      
      categories[]->{
        title,
        description,
        _createdAt,
      },
      tags[],
      comments[],
      publishedAt,
      body,
      
        }
    `
    );
    return posts;
};
