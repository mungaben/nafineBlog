import TagsPosts from "@/components/TagsPosts";
import React from "react";

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
