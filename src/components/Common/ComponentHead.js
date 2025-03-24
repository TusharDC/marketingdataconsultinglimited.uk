import React from "react";
const ComponentHead = ({ title, sub, head }) => {
  return (
    <div className="container-ack">
      <div className="text-center">
        <div className="dynamic-text" data-content={title}></div>
        <div className="text-[46px] max-[480px]:text-[30px] text-secondary relative bottom-[18px] z-10 font-bold ">
          {sub}
        </div>
        <div className="load-wrapp relative bottom-[30px]">
            <div className="load">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
        </div>
        <p className="text-base text-gray-400 relative bottom-[22px] md:w-[80%] mx-auto ">
        {head}
      </p>
      </div>
      
    </div>
  );
};

export default ComponentHead;
