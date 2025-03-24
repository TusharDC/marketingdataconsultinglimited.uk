import React from "react";

const Heading = ({ titletext, title, subtext }) => {
  return (
    <div className="container-ack md:pt-0 md:pb-0 pt-10 pb-5">
      <div className="relative">
        <div className="md:text-[8rem] text-[5rem] tracking-wider text-center texttransparent font-bold  md:pt-10 ">
          {titletext}
        </div>
        <div className="absolute md:top-[6.7rem] top-[4rem] inset-x-0 flex justify-center">
          <div className="text-[46px] max-[480px]:text-[30px] text-center font-bold max-w-xl">
            {title}
          </div>
        </div>
      </div>
      <p className="text-base text-gray-400 text-center w-[60%] mx-auto ">
        {subtext}
      </p>
    </div>
  );
};

export default Heading;
