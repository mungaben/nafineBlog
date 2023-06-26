import React from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "autoprefixer";


const Footer = () => {
  const blogTypes={
    "Politics": "politics",
    "life": "life",
    "Entertainment": "entertainment",
    "Business": "business",
  }
  const blogAbout={
    "about": "about",
    "contact": "contact",
    "FAQ": "faq",
  }
  return (
    <div className=" bottom-0  transition    mx-auto  overflow-hidden fixed  w-full  bg-rose-400/70">
      <footer className=" flex flex-row justify-evenly   overflow-hidden bottom-0 ">
        <div className=" flex justify-center  items-center rounded-md  "> 
        <Link href={'/'} className="hover:scale-150 ">
        <Image src={"/blog/Nafine.png"} width={200} height={150} alt={"NaFine footer  Logo"} className=" flex justify-center items-start  object-center -rotate-45" />
        </Link>
         
        </div>
        <div className=" flex-col   ">
        {
          Object.keys(blogTypes).map((blogType) => (
            <Link href={"/"} key={blogType}>
              <div className=" flex justify-start items-center  rounded-md p-2 hover:bg-[#f2f2f2] cursor-pointer mt-2">
                <span className=" text-center text-[#01010104]/70 md:text-xl font-medium ">
                  {blogType}
                </span>
              </div>
            </Link>
          ))
        }
        </div>
        <div className=" flex-col ">
           {
             Object.keys(blogAbout).map((blogAbout) => (
               <Link href={"/Contact"} key={blogAbout}>
                 <div className=" flex justify-start items-center  rounded-md p-2 hover:bg-[#f2f2f2f3] cursor-pointer mt-2">
                   <span className=" text-center text-[#01010101]/70 md:text-xl font-medium ">
                     {blogAbout}
                   </span>
                 </div>
               </Link>
             ))
            
           }


        </div>
      </footer>
    </div>
  );
};
export default Footer;
