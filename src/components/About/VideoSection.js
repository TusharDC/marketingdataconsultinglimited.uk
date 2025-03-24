import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const VideoSection = () => {
  return (
    <div className="container-ack md:px-0 px-5">
      <div className="grid md:grid-cols-5 items-center  ">
        <div className=" md:col-span-3 py-8">
          <div className="relative">
            <div className="md:text-[7rem] text-[5rem] tracking-wider text-left texttransparent font-bold  ">
              Video
            </div>
            <div className="absolute md:top-[4.3rem] top-[4rem]  inset-x-0 flex justify-left">
              <div className="text-4xl text-left font-bold ">
                Lorem Ipsum Dolor Sit Amet
              </div>
            </div>
          </div>

        </div>
        <div className="text-base md:text-left text-center text-textcolor md:col-span-2 ">
          Lorem ipsum dolor sit amet consectetur. Sapien porttitor non ultrices
          id enim lectus sagittis viverra interdum.Lorem ipsum dolor sit amet
          consectetur.
        </div>
      </div>

      <div className="  relative md:pt-0 pt-5">
        <img src="/assets/images/video.png" alt="" className="" />
        <div className=" absolute md:top-72 top-24 left-44 md:left-[32rem]">
          <div className="relative inline-flex">
            <span className="flex h-16 w-16">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white bg-opacity-50 opacity-75 duration-500"></span>
              <span className="">
                <AiFillPlayCircle className="text-white cursor-pointer relative inline-flex rounded-full h-16 w-16 " />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
