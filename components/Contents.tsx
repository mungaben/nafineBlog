"use client"
import React, { useEffect } from "react";
import usePostStore from "@/Stores/PostStore";
import { shallow } from "zustand/shallow";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useParams } from 'next/navigation';

import { IData } from './Types';

interface PropsId {
  id: string;
}

const Contents = ({ id }: PropsId) => {
  const params = useParams();
  const dataavil = usePostStore((state) => state.data, shallow);
  const setdata = usePostStore((state) => state.setData, shallow);

  const filteredData = dataavil?.filter((data) => data._id === params.id);



  if (!filteredData || filteredData.length === 0) {
    setdata()
    return;
  }

  const data = filteredData[0];

  return (
    <section className="flex-col">
      <div className="flex-col mx-auto" key={data._id}>
        <h1 className="text-2xl font-bold text-black justify-start p-4">
          {data.title}
        </h1>
        <div className="p-5 flex md:mx-4  bg-blue-400">
          <div className="rounded-lg flex md:flex-col justify-center items-center bg-red-500 ">
            <Image
              src={data.author.image.url || "/blog/blog.jpg"}
              alt={data.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex justify-start">
                <span className="md:text-xl font-bold text-black md:p-4 p-2">
                  {data?.author?.name}
                </span>
              </div>
          </div>
          <div className="flex bg-red-400 p-4">
            <div className="flex-col md:flex-row bg-green-500">
              
              <div>
                <span className="text-xs font-bold text-black md:p-4 p-2">
                  {new Date(data?._createdAt).toLocaleString()}
                </span>
              </div>
              <div>
                <span className="md:p-4 font-bold text-sm p-2">
                  {10 * 0.5} min read
                </span>
              </div>
            </div>
          </div>
        </div>
        <article className="flex justify-start w-3/5 pl-5">
          <div className="text-xl mx-auto flex-col space-y-4">
            <PortableText value={data.body} />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contents;
