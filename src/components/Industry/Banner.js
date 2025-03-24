import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Banner = () => {
  return (
    <div>
      <div className="md:px-0 px-5 pb-10">
        <div className="">
          <div className="md:grid grid-cols-2 gap-6 items-center container-ack">
            <div className="pb-5 pt-10 relative ">
              <img
                src="/assets/images/industry/lineCircle.png"
                className="absolute top-4 -left-8 w-24"
              />
              <img
                src="/assets/images/industry/industrypage.png"
                alt=""
                className="rounded-md"
              />
              <img
                src="/assets/images/industry/Frame.png"
                className="absolute bottom-0 -right-8 w-24"
              />
            </div>

            <div className=" md:px-0 px-2 pb-10 md:pb-0  relative">
              <div className="">
                <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4 md:pt-8 pt-4 mb-7">
                  marketingdataconsultinglimited collaborates with a diverse
                  range of industries to provide technological solutions and
                  support. By leveraging their expertise in information
                  technology, marketingdataconsultinglimited assists businesses
                  in optimizing their operations, enhancing productivity, and
                  achieving their goals. Their services encompass a broad
                  spectrum of industries. Some of the companies we serve are
                  healthcare, educational, financial and tour and travel
                  industry etc. These are just a few examples of the industries
                  that marketingdataconsultinglimited works with. Their
                  expertise and adaptability enable them to cater to the unique
                  technological needs of various sectors, enabling businesses to
                  thrive in an increasingly digital world.
                </div>
                {/* <div className="text-3xl   font-bold ">
                  Lorem Ipsum dolor sit amet Eget at auctor purus
                </div>
                <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4 md:pt-8 pt-4">
                  Lorem ipsum dolor sit amet consectetur. Sapien porttitor non
                  ultrices id enim lectus sagittis viverra interdum. Nisi
                  lobortis tincidunt convallis viverra. Scelerisque sed orci
                  amet proin cras quam pellentesque. Sollicitudin sed velit nunc
                  nunc morbi sed aliquam.
                </div>
                <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
                  Lorem ipsum dolor sit amet consectetur. Fermentum tortor et
                  arcu pellentesque tempor cursus cursus amet odio. Orci eu
                  sagittis leo duis enim mi massa etiam.
                </div> */}

                <div className="pt-4">
                  <Link href="/contact">
                    <button className="bg-secondary hover:bg-primary text-white px-8 py-2 rounded-md flex items-center">
                      <span className="text-base"> Know More </span>
                      <MdKeyboardArrowRight className=" text-base text-white hover:text-" />
                    </button>
                  </Link>
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
