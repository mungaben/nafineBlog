import React from "react";
import About from "./About";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `about page`,
    description: "about page of nafine blog",
    alternates: {
      canonical: `https://www.nafine.com/contact} `,
    },
    openGraph: {
      title: "Title",
      description: "Description",
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
    <div className="bottom-20">
      <About />
    </div>
  );
};

export default page;
