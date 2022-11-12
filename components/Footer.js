/** @format */

import React from "react";

function Footer() {
  return (
    <div className="relative font-neutralFace px-3">
      <div className="hidden lg:block mb-[10vh]">
        <div className="mx-1 font-monument font-semibold py-10 text-[13.2vmax] my-1 leading-none">
          TAIMOOR <br /> SHAHZADA
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div>FOLLOW US</div>
        <div className="text-4xl underline">INSTAGRAM</div>
        <div className="text-4xl underline">FACEBOOK</div>
        <div className="text-4xl underline">VIMEO</div>
        <div className="text-4xl underline">SPOTIFY</div>
      </div>
      <div className="flex pt-5 flex-col lg:flex-row items-end lg:items-center justify-between">
        <div>TOP</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">WORK</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">ABOUT</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">
          PUBLICATIONS
        </div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">
          OFFICE
        </div>
      </div>
      <div className="w-full h-[2px] bg-white"></div>
      <div className="flex flex-col lg:flex-row lg:mt-20 mb-2 items-start lg:items-end justify-between">
        <div className="my-5 lg:my-0">COPYRIGHT 2023 - TS</div>
        <div>JOBS</div>
        <div>
          A independent <br /> music agency
        </div>
        <div>open roles</div>
        <div className="flex space-x-3 mt-5">
          <div>INSTAGRAM</div>
          <div>FACEBOOK</div>
          <div>VIMEO</div>
          <div>SPOTIFY</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
