import { Metadata } from 'next';
import React from 'react'




export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `data for post`,
    description: "Description",
    alternates: {
      canonical: `https://www.nafine.com/category `,
    },
    openGraph: {
      title: "category page",
      description: " category of nafine blog",
      type: "website",
      url: "https://www.nafine.com",
      images: [
        {
          url: "https://www.nafine.com/blog/blog.jpg",
          width: 800,
          height: 600,
          alt: "Nafine Blog",
        },
      ],
    },
  };
}


const page = () => {
  return (
    <div>page</div>
  )
}

export default page