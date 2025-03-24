import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container-ack relative overflow-hidden md:px-0 px-4">
        <div className="md:absolute">
          <div className=" md:col-span-2 md:px-0 pb-5 md:pb-0  relative">
            <div className="md:text-[8rem] text-[5rem] tracking-wider text-left texttransparent font-bold  md:pt-10 ">
              Memories
            </div>
            <div className="absolute md:top-[6.7rem] top-[4rem]   inset-x-0 flex justify-left">
              <div className="text-[46px]  text-left font-bold max-w-xl">
                Our Memories
              </div>
            </div>
            <div className="w-96 text-base text-textcolor font-text pb-4">
            Our life experiences are fundamentally shaped by our memories. Understanding why some memories are better recalled than others and embracing that fluidity can reduce conflict and help us better understand how our memories affect
             our lives. We value our memories highly. Our thoughts are dominated by memories that make a significant contribution to our autobiography.
            </div>
          </div>
        </div>
        {/* images section start */}
        <div className="md:grid grid-cols-4 gap-4 py-5 md:space-y-0 space-y-4">
          <div className="col-span-3"></div>
          <div className="shadow rounded-lg">
            <img src="/assets/images/memories/img1.png" />
          </div>
          <div className="col-span-2"></div>
          <div className="rounded-lg row-span-2">
            <img src="/assets/images/memories/img2.png" />
          </div>
          <div className="rounded-lg">
            <img src="/assets/images/memories/mom1.png" />
          </div>
          <div className="rounded-lg"></div>
          <div className="rounded-lg">
            <img src="/assets/images/memories/mom11.png" />
          </div>
          <div className="rounded-lg">
            <img src="/assets/images/memories/mom2.png" />
          </div>
        </div>
        {/* images section end */}
      </div>
    </>
  );
};

export default Banner;
