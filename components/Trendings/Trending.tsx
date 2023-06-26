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
  const SetPosts = usePostStore((state) => state.setData);
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
    <div className="flex justify-start w-screen m-1 p-0.5 md:p-3  md:m-2 ">
      <div className="gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-2  lg:grid-cols-4 bg-[#fafafafa]/90  mx-auto overflow-x-auto no-scrollbar grid grid-flow-row-dense ">
        {dataAvailable &&
          dataAvailable.map((post, index) => (
            <div
              key={post?._id || index}
              className="flex m-2 md:flex-col lg:flex-col justify-center items-center  "
            >
              {/* <div className=" object-contain flex  items-center  ">
                <Image
                  src={post?.image || "/blog/blog.jpg"}
                  alt={post?.title.slice(0, 20) || "post alt tag"}
                  width={200}
                  height={32}
                  priority
                  className="bg-[#fafafa]/50 object-fill  md:h-32 h-24 mx-2 hover:object-scale-down "
                />
              </div> */}

              <div className="flex flex-wrap justify-center md:items-center">
                <div className=" w-[60px]  h-[60px] sm:w-[230px] sm:h-[230px] md:h-[200px]  md:w-full flex">
                  <Image
                    src={post?.image || "/blog/blog.jpg"}
                    alt={post?.title.slice(0, 20) || "post alt tag"}
                    width={200}
                    height={32}
                    priority
                    className="shadow-lg rounded max-w-full h-auto align-middle border-none object-fill"
                  />
                </div>
              </div>
              <div className="bg-green-300">
                <div className=" flex   ">
                  {
                    // loop post.categories add alink to category
                    post?.categories?.map((category, idex) => (
                      <div key={idex} className=" flex-row mx-2 text-sm">
                        <Link
                          href={`/`}
                          className="hover:underline  flex-row  items-start"
                        >
                          <h3 className="text-[ 1.5rem ] font-light capitalize ">
                            {category?.title}
                          </h3>
                        </Link>
                      </div>
                    ))
                  }
                </div>

                <div className=" text-black text-start mx-2">
                  <Link
                    href={`/Content/${post?._id}`}
                    className="hover:underline flex justify-start items-start"
                  >
                    <h1>{post?.slug.slice(0, 40)}....</h1>
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
