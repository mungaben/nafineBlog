
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
    <div>
      <div className="flex justify-center w-screen m-1 p-0.5 md:p-3  md:m-2 h-auto ">
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
    </div>
  );
};

export default page;
