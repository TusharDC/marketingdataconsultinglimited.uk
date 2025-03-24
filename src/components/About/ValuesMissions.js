import React from "react";

const ValuesMissions = () => {
  return (
    <div className="bg-[]">
      <div className="grid md:grid-cols-5 gap-6 items-center  container-ack md:pt-24 pt-72">
        <div className=" md:col-span-2 md:px-0 px-5 pb-5 md:pb-0 ">
          <div className="dynamic-text  " data-content="Goals">
          </div>
          <div className="">
            <div className="text-[46px] max-[480px]:text-[30px] text-secondary relative bottom-[18px] z-10 font-bold">
             
                We Deliver Promises
              
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
              Our objective is to create new, unique products or enhance existing ones to satisfy client
              needs, outperform rivals, and promote business growth.
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
              Our aim is to make a meaningful impact on the world through the power of technology,
              creating a brighter and more prosperous future for all. We are constantly exploring
              for fresh approaches to improve user experience and develop solutions that are both
              simple to use and powerful.
            </div>
          </div>
        </div>
        <div className=" md:col-span-3 grid md:grid-cols-2 gap-3 items-center md:py-8 py-2">
          <div>
            <div className="group p-3" key="id">
              <div className="relative text-left px-6  py-3 duration duration-200 group-hover:-translate-y-2 bg-gray-50 hover:bg-white hover:drop-shadow-xl bg-transparent rounded-xl ">
                <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">
                  <img
                    src="/assets/images/aboutpage/mission1.png"
                    alt=""
                    className="  rounded-lg w-20 h-20 mx-auto "
                  />
                </div>
                <h2 className="font-semibold text-lg py-2 text-black text-left">
                  Our Mission
                </h2>

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-justify tracking-tighter  text-sm ">
                  To be a pioneer in offering technological services and products. Our goal is to create long-lasting
                  relationships with our clients, founded on trust, transparency, and a deep understanding of their business needs.
                </p>
              </div>
            </div>
            <div className="group p-3" key="id">
              <div className="relative text-left px-6  py-3 duration duration-200 group-hover:-translate-y-2  bg-gray-50 hover:bg-white hover:drop-shadow-xl bg-transparent rounded-xl  ">
                <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">
                  <img
                    src="/assets/images/aboutpage/value1.png"
                    alt=""
                    className="  rounded-lg w-20 h-20 mx-auto "
                  />
                </div>
                <h2 className="font-semibold text-lg py-2 text-black text-left">
                  Our Values
                </h2>

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-justify tracking-tighter  text-sm ">
                  We hold ethical and environmentally friendly practises in high respect. We are conscious of the significance of
                  environmental stewardship and work to create products that benefit society.{" "}
                </p>

              </div>
            </div>
          </div>
          <div>
            <div className="group p-3" key="id">
              <div className="relative text-left px-6  py-3  duration duration-200 group-hover:-translate-y-2 bg-gray-50 hover:bg-white hover:drop-shadow-xl bg-transparent rounded-xl ">
                <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">
                  <img
                    src="/assets/images/aboutpage/vision1.png"
                    alt=""
                    className="  rounded-lg w-20 h-20 mx-auto "
                  />
                </div>
                <h2 className="font-semibold text-lg py-2 text-black text-left">
                  Our Vision
                </h2>

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-justify tracking-tighter text-sm ">
                  Our vision is to be the leading innovator in product development,
                  driving transformative solutions that shape the future. In the future,
                  we see technology as a force for good change, creativity, and advancement as well as a tool for efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesMissions;
