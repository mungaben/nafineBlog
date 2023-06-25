"use client";
import React, { useEffect, useMemo, useState } from "react";
import usePostStore from "@/Stores/PostStore";
import { shallow } from "zustand/shallow";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

interface PropsId {
  id: string;
}
const Contents = async ({ id }: PropsId) => {
  const dataavil = usePostStore((state) => state.data, shallow);
  // console.log("data avil", dataavil);
  // get data matching _id
  const datav = useMemo(() => {
    return dataavil?.filter((data) => data._id === id);
  }, [id]);
  // console.log( "datav", datav);
  

  return (
    <section className=" flex-col ">
      {datav?.map((data) => (
        <div className=" flex-col mx-auto  " key={data._id}>
          <h1 className=" text-2xl font-bold text-black justify-start p-4 ">
            {data.title}
          </h1>
        
            <div className=" p-5 flex md:mx-4 ">
              <div className=" rounded-lg">
                <Image
                  src={data.author.image.url || "/blog/blog.jpg"}
                  alt={data.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div className=" flex bg-red-400 ">
              <div className=" flex-col md:flex-row">
                <div>
                  <span className="md:text-xl font-bold text-black md:p-4 p-2">
                    {data?.author?.name}
                  </span>
                </div>
                <div>
                  <span className=" text-xs font-bold text-black md:p-4 p-2">
                    {new Date(data?._createdAt).toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className=" md:p-4 font-bold text-sm  p-2">
                    {data.body.length * 0.5} min read
                  </span>
                </div>
              </div>
            </div>
          </div>
          <article className=" flex justify-start  w-3/5 pl-5">
            <div className=" text-xl mx-auto flex-col space-y-4 ">
              <PortableText value={data.body} />
            </div>
          </article>
        </div>
      ))}
    </section>
  );
};

export default Contents;
