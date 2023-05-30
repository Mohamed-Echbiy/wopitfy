"use client";

import React from "react";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

function Library() {
  const onClick = () => {
    //handel upload later
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-prim cursor-pointer hover:text-white transition-all"
        />
      </div>
      <div className="flex flex-col gap-y-2 px-3 mt-4">List Of Songs</div>
    </div>
  );
}

export default Library;
