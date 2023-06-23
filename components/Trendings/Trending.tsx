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
    <div className="p-3 m-2 bg-[#fafafafa] ">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 bg-[#fafafafa]/90 overflow-scroll no-scrollbar   ">
        {dataAvailable &&
          dataAvailable.map((post, index) => (
            <div key={post?._id || index} className="flex m-2 shadow-md border-x-[1px] border-gray-600/70 overflow-clip min-w-min max-w-xs">
              <h1 className="truncate text-bold">
                <Link href={`/Content/${post?._id}`} className=" text-[#000001]/90 md:font-medium font-normal  md:p-4 p-2   overflow-scroll max-w-sm no-scrollbar">
                  {post?.slug.slice(0,30)}...
                </Link>
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Trending;
