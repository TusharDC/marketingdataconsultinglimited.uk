import Link from "next/link";
import React from "react";

const Subscription = () => {
  return (
    <div className="container-ack">
      <div className="bg-black rounded-md grid md:grid-cols-12 py-8 px-7">
        <div className="md:col-span-7">
          <p className="font-semibold text-white text-3xl">
          Ready for accelerated growth?
          </p>
          <p className="text-sm text-white">
          Get a personalized boost with industry trends, inspiring stories & expert guidance. 
          </p>
        </div>
        <div className="md:col-span-5 md:pt-0 pt-5">
          <div className="md:flex space-x-3 justify-between">
            <div className="w-full">
              <input
                type="text"
                placeholder="Share your email"
                className="outline-none p-2  text-white bg-transparent border border-white w-full rounded-md placeholder:text-gray px-4"
              />
            </div>

            <div className=" w-full md:mt-0 mt-4">
              <button className=" button-1  px-12 py-2 rounded-md">
                <div className="eff-1"></div>
                <span className="text-base flex items-center font-semibold">
                  Book a Demo
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
