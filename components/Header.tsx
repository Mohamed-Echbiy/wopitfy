"use client";

interface HeaderProp {
  children: React.ReactNode;
  className?: string;
}

import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./SignIn/Button";
function Header({ children, className }: HeaderProp) {
  const router = useRouter();
  const handelLogout = () => {
    //handel logout
  };
  return (
    <div
      className={
        (twMerge(`h-fit bg-gradient-to-b from-emerald-800p-6`), className)
      }
    >
      <div className="flex items-center w-full mb-4 justify-between">
        <div className=" hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black
           flex items-center justify-center hover:opacity-75 transition-all"
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black
           flex items-center justify-center hover:opacity-75 transition-all"
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div className=" flex md:hidden gap-x-2 items-center">
          <button
            className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition-all
          "
          >
            <HiHome size={20} className=" text-black" />
          </button>
          <button
            className="
          rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition-all
          "
          >
            <BiSearch size={20} className=" text-black" />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div className="">
              <Button
                className="text-neutral-300 font-medium bg-transparent"
                onClick={() => console.log("wow")}
              >
                SignUp
              </Button>
            </div>
            <div className="">
              <Button
                onClick={() => console.log("wow")}
                className="bg-white px-6 py-2"
              >
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Header;
