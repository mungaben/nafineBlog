"use client";
import usePostStore from "@/Stores/PostStore";
import { useEffect, useMemo, useState } from "react";
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
console.log("post data available");

const Trending = () => {
  const posts = usePostStore((state) => state.data, shallow);
  const SetPosts = usePostStore((state) => state.setData);
  const [fetch, setfetch] = useState(false);
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
    if (!dataAvailable) {
      SetPosts();
      setfetch(true);
    }
  }, [fetch]);

  console.log("datavailable", dataAvailable[0]);

  return (
    <div className="flex justify-start w-screen m-1 p-0.5 md:p-3  md:m-2  ">
      <div className="gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-2  lg:grid-cols-3 xl:grid-cols-4 bg-[#fafafafa]/90  mx-auto overflow-x-auto no-scrollbar grid grid-flow-row-dense ">
        {dataAvailable &&
          dataAvailable.map((post, index) => (
            <div
              key={post?._id || index}
              className="flex items-center justify-center m-2 md:flex-col lg:flex-col "
            >
              <div className="grid flex-wrap justify-center md:items-center">
                <div className="w-[60px] h-[60px] sm:w-[230px] sm:h-[230px] md:w-full">
                  <Image
                    src={post?.image || "/blog/blog.jpg"}
                    alt={post?.title.slice(0, 20) || "post alt tag"}
                    width={200}
                    height={32}
                    priority
                    className="object-cover w-full h-full align-middle border-none rounded shadow-lg"
                  />
                </div>
              </div>

              <div className="grid flex-col items-start justify-start gap-4 p-2 mx-auto">
                <div className="flex items-start w-full p-2 overflow-x-scroll sm:flex md:flex no-scrollbar">
                  {
                    // loop post.categories add alink to category
                    post?.categories?.map((category, idex) => (
                      <div key={idex} className="mx-2 ">
                        <Link href={`/`} className="hover:underline">
                          <h3 className="text-xs font-light capitalize ">
                            {category?.title}
                          </h3>
                        </Link>
                      </div>
                    ))
                  }
                </div>

                <div className="flex mx-2 text-black text-start">
                  <Link
                    href={`/Content/${post?._id}`}
                    className="flex items-start justify-start text-lg font-semibold hover:underline"
                  >
                    <p>{post?.slug}....</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Trending;
