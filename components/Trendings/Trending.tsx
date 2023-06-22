"use client";
import React, { useCallback, useEffect } from "react";
import usePostStore from "@/Stores/PostStore";
import { shallow } from "zustand/shallow";
import { PortableText } from "@portabletext/react";
import { Block } from "typescript";
import { TypedObject } from "sanity";
// import Block  from '@sanity/types';


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
    <div>
      <div>
        {dataAvailable &&
          dataAvailable.map((post, index) => (
            <div key={post?._id || index}>
              <h1 className="text-bold trancate  ">{post?.title}</h1>
              {/* <div className="m-4 flex flex-col justify-start items-start text-start p-4"> */}
                {/* <PortableText value={post?.body}/> */}
                {/* <PortableText blocks={post?.body} /> */}
              {/* </div> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Trending;
