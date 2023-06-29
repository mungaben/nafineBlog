import Link from "next/link";
import React from "react";
import Contents from "@/components/Contents";

import { Metadata } from "next";
import { getData } from "@/components/Utils/GetData";

type paramprops = {
  id: string;
};

export async function generateMetadata({
  params,
}: {
  params: paramprops;
}): Promise<Metadata> {
  return {
    title: `data for post`,
    description: "Description",
    alternates: {
      canonical: `https://www.nafine.com/contet/${params.id} `,
    },
    openGraph: {
      title: "Title",
      description: "Description",
      type: "website",
      url: "https://www.nafine.com",
      images: [
        {
          url: "https://www.nafine.com/blog/blog.jpg",
          width: 800,
          height: 600,
          alt: "Nafine Blog",
        },
      ],
    },
  };
}

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log("data avil", getData);

  // const dataavil=Posts?.find((post)=>post._id===id)

  return (
    <div className="  min-h-screen  bg-[#fafafafa]/90 text-[#000001] mx-auto  w-4/5 mt-10 ">
      <div className="flex-col justify-center items-center  h-full mx-auto ">
        {/* <Link href={'/'}>Home</Link> */}
        <div className=" mx-auto ">
          <Contents id={id} />
        </div>
      </div>
    </div>
  );
};

export default page;
