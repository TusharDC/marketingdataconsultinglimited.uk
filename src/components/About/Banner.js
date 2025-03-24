import React from 'react';

const Banner = () => {
  return (
    <div
      className="h-screen bg-right"
      style={{
        backgroundImage: 'url("/assets/images/mainbackground.png ")',
      }}
    >
      <div className="md:grid grid-cols-2 gap-6 items-center container-ack  ">
        <div className="pb-5 pt-10 ">
          <img src="/assets/images/aboutpage/aboutpage.png" alt="" />
        </div>

        <div className=" md:px-0 px-5 pb-10 md:pb-0  relative">
          <div className="dynamic-text  " data-content="About"></div>

          <div className="">
            <div className="text-[46px] max-[480px]:text-[30px] text-secondary relative bottom-[18px] z-10 font-bold">
              <span className="text-primary">Driving success </span> through the
              power of technology
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
              We are all about changing lives and solving problems. With our
              team of experts, we are here to turn an idea into a successful
              product that exceeds expectations.
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
              marketingdataconsultinglimited is known for its innovative
              approach, teamwork, and commitment to excellence. Our only goal is
              to deliver the best solutions and meet the clients needs, and help
              them achieve their goals.
            </div>
          </div>
        </div>
      </div>

      <div className=" grid md:grid-cols-12 md:gap-0 gap-4 justify-center container-ack pt-8">
        <div className="md:col-span-3 flex flex-col  items-center">
          <p className=" text-2xl font-bold text-secondary"> 1056+</p>
          <p>Projects Completed</p>
        </div>
        <div className=" md:col-span-3 flex flex-col items-center">
          <p className=" text-2xl font-bold text-secondary"> 50+</p>
          <p>Active Clients</p>
        </div>
        <div className="md:col-span-3 flex flex-col items-center">
          <p className=" text-2xl font-bold text-secondary">740+ </p>
          <p>Cups of Coffee</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
