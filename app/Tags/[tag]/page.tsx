import TagsPosts from "@/components/TagsPosts";
import { Metadata } from "next";
import {GetParams} from "@/components/Utils/GetParams";
import React from "react"


// metadata dynamic with params.id and slug
type paramprops = {
  tag: string
}




export async function generateMetadata({params}: {params: paramprops}): Promise<Metadata> {
  return {
    title: `${params.tag} - Nafine`,
    description: `Nafine is a social media platform that connects people, organizations and businesses to create a unique and unique world.`,
   
   
  };

}

const page = () => {
  return (
    <div className='flex  px-2 no-scrollbar overflow-hidden'>
    <section className="w-screen  mx-auto flex justify-center items-center">
      <div className=" flex justify-center items-center ">
        <div className=" flex justify-center items-center ">
          <TagsPosts />
        </div>
      </div>
    </section>
    </div>
  );
};

export default page;
