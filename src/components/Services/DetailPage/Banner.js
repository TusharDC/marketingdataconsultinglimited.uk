import React from 'react';

const Banner = ({
  bannertitle,
  bannersubtext,
  serviceimg,
  serviceimgAlt,
  servicehead,
  servicedesc1,
  servicedesc2,
  servicedesc3,
  servicedesc4,
}) => {
  return (
    <div>
      <div className="px-5 container-ack md:px-0 ">
        <div className="pt-24 md:w-[80%]  mx-auto">
          <h1 className="text-3xl font-bold leading-normal text-center capitalize ">
            {bannertitle}
          </h1>
          <div className="load-wrapp relative bottom-[15px] top-0 text-center">
            <div className="load">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <p className="pt-3 text-base text-center text-textcolor">
            {bannersubtext}
          </p>
        </div>
        <div>
          <div className="grid-cols-2 gap-6 pt-12 md:grid container-ack ">
            <div className="pb-5 ">
              {/* <img src="/assets/images/aboutusimg3.png" alt="" /> */}
              <img src={serviceimg} alt={serviceimgAlt} />
            </div>

            <div className="relative px-5 pb-10  md:px-0 md:pb-0">
              <div className="">
                <h2 className="text-2xl font-semibold capitalize ">
                  {servicehead}
                </h2>
                <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4 md:pt-8 pt-4">
                  {servicedesc1}
                </div>
                <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4 md:pt-3 pt-2">
                  {servicedesc2}
                </div>
                <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4 md:pt-3 pt-2">
                  {servicedesc3}
                </div>
                <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4 md:pt-3 pt-2">
                  {servicedesc4}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
