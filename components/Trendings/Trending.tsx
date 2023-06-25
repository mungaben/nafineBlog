"use client";
import usePostStore from "@/Stores/PostStore";
import { useEffect, useMemo } from "react";
import { TypedObject, set } from "sanity";
import { shallow } from "zustand/shallow";
// import Block  from '@sanity/types';
import Image from "next/image";
import Link from "next/link";

interface Post {
  body: TypedObject[] | undefined;
}

interface AppProps {
  post?: Post;
}

const Trending = () => {
  const posts = usePostStore((state) => state.data, shallow);
  const SetPosts=usePostStore((state) => state.setData);
  // console.log("setposts", SetPosts);

  
  
  const dataAvailable = useMemo(() => {
    return posts.map((post) => {
      const filteredCategories = post.categories?.filter((category) =>
        category.title.includes("en")
      );

      if (filteredCategories) {
        return post;
      }
      return null;
    });
  }, [posts]);

 useEffect(() => {
  
   SetPosts();
  
  
 }, []);

  return (
    <div className="flex justify-center w-screen m-1 p-0.5 md:p-3  md:m-2">
      <div className="gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:gap-2  lg:grid-cols-4 bg-[#fafafafa]/90  mx-auto overflow-x-auto no-scrollbar grid grid-flow-row-dense     ">
        {dataAvailable &&
          dataAvailable.map((post, index) => (
            <div
              key={post?._id || index} 
              className="grid m-2 shadow-md border-x-[1px] border-gray-600/70  min-w-min max-w-xs "
            >
              <div className=" object-contain bg-green-500 flex justify-center items-center object-center  ">
                <Image
                  src={post?.image || "/blog/blog.jpg"}
                  alt={post?.title.slice(0, 20) || "babla"}
                  width={200}
                  height={32}
                  className="bg-[#fafafa]/50 max-w-sm md:h-32 h-24 object-cover hover:object-scale-down"
                />
              </div>

              <div className=" text-black">
                <Link
                  href={`/Content/${post?._id}`}
                  className="hover:underline flex justify-start items-start"
                >
                  <h1>{post?.slug.slice(0, 40)}....</h1>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Trending;


