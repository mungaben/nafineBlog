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
    <div className=" bottom-0  transition  md:mt-10  mx-auto  overflow-hidden fixed bg-[#fafafafa]/70 w-full mt-8 bg-rose-400">
      <footer className=" flex flex-row justify-evenly   overflow-hidden bottom-0 ">
        <div className=" flex justify-center  items-center rounded-md  "> 
          <Image src={"/blog/wp.png"} width={100} height={100} alt={"NaFine footer  Logo"} className=" flex justify-center items-start  object-center -rotate-45" />
        </div>
        <div className=" flex-col   ">
        {
          Object.keys(blogTypes).map((blogType) => (
            <Link href={"/"} key={blogType}>
              <div className=" flex justify-start items-center  rounded-md p-2 hover:bg-[#f2f2f2] cursor-pointer">
                <span className=" text-center text-[#01010104]/70 md:text-2xl font-bold ">
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
                 <div className=" flex justify-start items-center  rounded-md p-2 hover:bg-[#f2f2f2f3] cursor-pointer">
                   <span className=" text-center text-[#01010101]/70 md:text-2xl font-bold ">
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
