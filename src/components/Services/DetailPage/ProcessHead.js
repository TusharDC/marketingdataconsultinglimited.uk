import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const ProccessHead = ({processhead, processsub, processdesc, processimg,proocessalt}) => {
    return (
      <div>        
            <div className="grid md:grid-cols-2 gap-10 items-center container-ack">
              <div className="relative">
                <div className="tracking-wider text-left textorange font-bold md:pt-10 ">
                  {processhead}
                </div>
                <div className="absolute md:top-[6.7rem] top-[5rem] inset-x-0 flex justify-left">
                  <h2 className="text-[30px] leading-normal text-left font-bold max-w-xl">
                    {processsub} 
                  </h2>
                </div>
                <div className="load-wrapp relative bottom-[20px]">
                  <div className="load">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                </div>
                <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text pb-4">
                  {processdesc}
                </div>
              </div>
  
  
              <div className="pb-5 md:pt-10  ">
                <div className="  relative ">
                  <img
                    src={processimg}
                    alt={proocessalt}
                    className=""
                  />
                  {/* <div className=" absolute md:top-[8rem] top-[4.5rem] md:left-[15rem] left-[10rem]">
                    <div className="relative inline-flex">
                      <span className="flex h-16 w-16">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary bg-opacity-50 opacity-75 duration-500"></span>
                        <span className="">
                          <AiFillPlayCircle className="text-secondary cursor-pointer relative inline-flex rounded-full h-16 w-16 " />
                        </span>
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
      </div>
    );
  };
  
  export default ProccessHead;