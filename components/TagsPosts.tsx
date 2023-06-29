
"use client"
import usePostStore from "@/Stores/PostStore";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";
import { shallow } from "zustand/shallow";
import Image from "next/image";
import Link from "next/link";


const page = () => {
  const params = useParams();
  console.log("params",params);
  
  const dataavil = usePostStore((state) => state.data, shallow);
  const setdata = usePostStore((state) => state.setData, shallow);

  const dataAvailable = useMemo(() => {
    return dataavil.map((post) => {
      const filteredCategories = post.tags?.filter((tag) =>
        tag.name.includes(params?.tag)
      );

      if (filteredCategories) {
        return post;
      }
      return null;
    });
  }, [dataavil]);

  if (!dataAvailable || dataAvailable.length === 0) {
    setdata();
    return;
  }

  return (
    <div className="flex justify-start w-screen md:w-9/12 sm:w-4/5 m-1 p-0.5 md:p-3  mb-40 overflow-hidden">
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

export default page;
