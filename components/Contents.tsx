"use client";
import React, { useEffect, useState } from "react";
import usePostStore from "@/Stores/PostStore";
import { shallow } from "zustand/shallow";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useParams } from "next/navigation";

import { IData } from "./Types";
import Link from "next/link";

interface PropsId {
  id: string;
}

const Contents = ({ id }: PropsId) => {
  const [dataFetched, setDataFetched] = useState(false);
  const params = useParams();
  const dataavil = usePostStore((state) => state.data, shallow);
  const setdata = usePostStore((state: { setData: () => Promise<void>; }) => state.setData, shallow);

  const filteredData = dataavil?.filter((data: { _id: string; }) => data._id === params.id);
  console.log(filteredData);

  if (!filteredData || filteredData.length === 0) {
    
    return <div>
      <h1>404</h1>
      <p>Post not found</p>
    </div>;
  }

  useEffect(() => {
    if (!dataFetched) {
      setdata();
      setDataFetched(true);
    }
  }, []);

  const data = filteredData[0];
  const formattedDate = new Date(data?._createdAt).toLocaleString("en-US", {
    weekday: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <section className="flex-col mb-80 ">
      <div className="flex-col mx-auto " key={data._id}>
        <div className="">
          {/* tags display name */}
          {data.tags?.map((tag: { _key: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
            <span className="text-sm text-gray-300 " key={tag._key}>
              <Link
                href={`/Tags/${tag.name}`}
                className="hover:underline hover:text-blue-400/50 "
              >
                {tag.name}
              </Link>
            </span>
          ))}
        </div>
        <h1 className="justify-start p-4 text-2xl font-bold text-black">
          {data.title}
        </h1>
        <div className="flex p-3 space-x-3 md:mx-4">
          <div className="flex items-center justify-center rounded-lg md:flex-col ">
            <Image
              src={data.author.image.url || "/blog/blog.jpg"}
              alt={data.author.name}
              width={40}
              height={40}
              className="rounded-full p-[0.5px] ring-2 ring-black ring-opacity-10 mr-[2px]"
            />
            <div className="flex justify-start">
              {/* <Link href={`/Authors/${data.author.name}`}> */}
            
              <span className="m-2 font-bold text-black md:text-xl md:p-2 ">
               
                {data?.author?.name.slice(0, 15)}
              </span>
              {/* </Link> */}
            </div>
          </div>
          <div className="flex justify-start text-xs md:flex-col md:mx-4 text-start md:text-center md:justify-center md:items-center ">
            <div className="flex-col md:flex-row text-start md:text-center ">
              <div className="flex">
                <span className="text-xs font-thin text-black ">
                  {formattedDate}
                </span>
              </div>
              <div>
                <span className="text-sm font-thin text-start ">
                  {data.estimatedReadingTime} min read
                </span>
              </div>
            </div>
          </div>
        </div>
        <article className="flex justify-start w-3/5 pl-5">
          <div className="flex-col mx-auto space-y-4 text-xl">
            <PortableText value={data.body} />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contents;
