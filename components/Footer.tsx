"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FcRight } from "react-icons/fc";

const Footer = () => {
  const [foot, setfoot] = useState(true);
  const blogTypes = {
    Politics: "politics",
    life: "life",
    Entertainment: "entertainment",
    Business: "business",
  };
  const blogAbout = {
    about: "about",
    contact: "contact",
    FAQ: "faq",
  };
  const handleFooter = () => {
    setfoot((prev) => !prev);
  };
  return (
    <div className="relative ">
      <div className="absolute z-50 h-10 my-auto bottom-5 ">
        <div className={`flex items-center justify-center w-10 rounded-r-lg shadow-md ${foot? "bg-[#fafafa]":"bg-rose-500"} md:h-20 shadow-slate-200`}>
          <button
            type="button"
            className="m-4 ml-0"
            onClick={() => {
              handleFooter();
            }}
          >
            <FcRight size={20} color="red"  className={`${foot && "animate-pulse"}`}/>
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 w-full mx-auto overflow-hidden transition md:pt-4 bg-rose-400/70">
        {foot && (
          <footer className="bottom-0 flex flex-row overflow-hidden transition delay-200 justify-evenly ">
            <div className="flex items-center justify-center rounded-md ">
              <Link href={"/"} className="md:hover:scale-150 ">
                <Image
                  src={"/blog/Nafine.png"}
                  width={150}
                  height={100}
                  alt={"NaFine footer  Logo"}
                  className="flex items-start justify-center object-center md:-rotate-45"
                />
              </Link>
            </div>
            <div className="flex-col ">
              {Object.keys(blogTypes).map((blogType) => (
                <Link href={"/"} key={blogType}>
                  <div className=" flex justify-start items-center  rounded-md p-2 hover:bg-[#f2f2f2] cursor-pointer ">
                    <span className=" text-center text-[#01010104]/70 md:text-xl font-medium ">
                      {blogType}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex-col ">
              {Object.keys(blogAbout).map((blogAbout) => (
                <Link href={"/Contact"} key={blogAbout}>
                  <div className=" flex justify-start items-center  rounded-md p-2 hover:bg-[#f2f2f2f3] cursor-pointer mt-2">
                    <span className=" text-center text-[#01010101]/70 md:text-xl font-medium ">
                      {blogAbout}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </footer>

        )}
      </div>
      <div className="bottom-0 flex items-center justify-center ">
        <h4>
        By mungaben &copy; {new Date().getFullYear()}
        </h4>
      </div>
    </div>
  );
};
export default Footer;
