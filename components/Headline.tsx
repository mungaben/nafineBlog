"use client";
import usePostStore from "@/Stores/PostStore";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { shallow } from "zustand/shallow";
import { IData } from "./Types";

const Headline = () => {
    const [fetch, setfetch] = useState(false)
  const posts = usePostStore((state) => state.data, shallow);
//   const SetPosts = usePostStore((state) => state.setData);
  // console.log("setposts", SetPosts);
  

  const dataAvailable = useMemo(() => {
    return posts.map((post) => {
      const filteredCategories = post.categories?.filter((category) =>
        category.title.includes("e")
      );

      if (filteredCategories) {
        return post;
      }
      return null;
    });
  }, [posts]);
  useEffect(() => {
    if (!dataAvailable) {
     
      setfetch(true);
    }
  }, [fetch]);


  const hotnews = dataAvailable[0];
  console.log(hotnews?.slug);

  return (
    <div>
      <div>
        <Link href={`/Content/${hotnews?._id}`}>
          <h1>{hotnews?.title}</h1>
        </Link>
      </div>
    </div>
  );
};

export default Headline;
