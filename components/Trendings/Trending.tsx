"use client";
import React, { useCallback, useEffect } from "react";
import usePostStore from "@/Stores/PostStore";
import { shallow } from "zustand/shallow";
import { PortableText } from "@portabletext/react";
import { Block } from "typescript";
import { TypedObject } from "sanity";
// import Block  from '@sanity/types';
import Link from "next/link";


interface Post {
  body: TypedObject[] | undefined;
}

interface AppProps {
  post?: Post;
}

const Trending = () => {
  const posts = usePostStore((state) => state.data, shallow);
  console.log(
    "posts",
    posts[0]?.categories?.filter((category) =>
      category.title.includes("Trending")
    )
  );

  const dataAvailable = posts.map((post) => {
    const filteredCategories = post.categories?.filter((category) =>
      category.title.includes("Trending")
    );

    if (filteredCategories) {
      return post;
    }
    return null;
  });

  console.log("dataAvailable", dataAvailable);

  return (
    <div className="flex justify-center w-screen m-1 p-0.5 md:p-3 bg-green-400 md:m-2">
      <div className="gap-4 sm:grid-cols-2 md:grid-cols-4 bg-[#fafafafa]/90  mx-auto overflow-x-auto no-scrollbar grid grid-flow-row-dense grid-cols-3    ">
        {dataAvailable &&
          dataAvailable.map((post, index) => (
            <div key={post?._id || index} className="grid m-2 shadow-md border-x-[1px] border-gray-600/70  min-w-min max-w-xs ">
              <p className="">
                <Link href={`/Content/${post?._id}`} className="bg-black ">
                  <h1>{post?.slug}....</h1 >
                </Link>
                
              </p>
            </div>
          ))}
      </div>
     
    </div>
  );
};

export default Trending;
