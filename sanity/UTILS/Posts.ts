import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export const getPosts = async () => {
    const posts = await client.fetch(
        groq`*[_type == "post"   ]| order(_createdAt desc)
        {
 _id,
 _createdAt,
      title,
      "slug": slug.current,
      author->{name, slug, image},
      "image": mainImage.asset->url,
      categories[]->,
      tags[],
      comments[]{
        authorName,
        content,
        timestamp
      },
      publishedAt,
      body

        }[0..9]
          
       
    `
    );
    return posts;
};