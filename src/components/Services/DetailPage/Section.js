import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tabs from "./Tabs";

const clientsData = [
  {
    id: 1,

    image: "/assets/images/clientone.png",
  },
  {
    id: 2,

    image: "/assets/images/clienttwo.png",
  },
  {
    id: 3,

    image: "/assets/images/clientthree.png",
  },
  {
    id: 4,

    image: "/assets//images/clientone.png",
  },
  {
    id: 5,

    image: "/assets//images/clienttwo.png",
  },
  {
    id: 6,

    image: "/assets//images/clientthree.png",
  },
];

const Section = () => {

  return (
    <div className="container-ack py-16 md:px-0 px-5">
      <div className="grid md:grid-cols-2 gap-6 items-start container-ack  ">
        <div className="  pb-10 md:pb-0  relative">
        <div className="md:text-[8rem] text-[5rem] tracking-wider text-left texttransparent font-bold  md:pt-10 ">
            Lorem
          </div>
          <div className="">
          <div className="absolute md:top-[6.7rem] top-[4rem] inset-x-0 flex justify-left">
          <div className="text-[46px]  text-left font-bold max-w-xl">
              Lorem ipsum dolor
            </div>
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
              Lorem ipsum dolor sit amet consectetur. Sapien porttitor non
              ultrices id enim lectus sagittis viverra interdum. Nisi lobortis
              tincidunt convallis viverra. Scelerisque sed orci amet proin cras
              quam pellentesque. Sollicitudin sed velit nunc nunc morbi sed
              aliquam.
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
              Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
              pellentesque tempor cursus cursus amet odio. Orci eu sagittis leo
              duis enim mi massa etiam.
            </div>
            <div className="md:w-[95%] w-full  flex space-x-3 pt-10  ">
              <div>
                {" "}
                <hr className="w-[30px] h-[5px] bg-primary mt-2" />{" "}
              </div>
              <span className="text-base text-textcolor text-justify font-text">
                Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
                pellentesque tempor cursus cursus amet odio. Orci eu sagittis
                leo duis enim mi massa etiam.
              </span>
            </div>
            <div className="md:w-[95%] w-full  flex space-x-3 pt-3 ">
              <div>
                {" "}
                <hr className="w-[30px] h-[5px] bg-secondary mt-2" />{" "}
              </div>
              <span className="text-base text-textcolor text-justify font-text">
                Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
                pellentesque tempor cursus cursus amet odio. Orci eu sagittis
                leo duis enim mi massa etiam.
              </span>
            </div>
            <div className="md:w-[95%] w-full  flex space-x-3  pt-3">
              <div>
                {" "}
                <hr className="w-[30px] h-[5px] bg-primary mt-2" />{" "}
              </div>
              <span className="text-base text-textcolor text-justify font-text">
                Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
                pellentesque tempor cursus cursus amet odio. Orci eu sagittis
                leo duis enim mi massa etiam.
              </span>
            </div>
          </div>
        </div>

        <div className="pb-5 md:pt-10  ">
          <Tabs />
        </div>
      </div>
     
    </div>
  );
};

export default Section;
