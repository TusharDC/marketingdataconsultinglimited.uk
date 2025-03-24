import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Advisors = () => {
  const advisor = [
    {
      id: 1,

      image: "/assets/images/advisorone.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,

      image: "/assets/images/advisortwo.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,

      image: "/assets/images/advisorthree.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,

      image: "/assets/images/advisortwo.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 5,

      image: "/assets/images/advisorthree.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 6,

      image: "/assets/images/advisorone.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  const settings = {
    className: "center",
    slidesToShow: 3,
    autoplaySpeed: 1000,
    focusOnSelect: true,
    dots: true,
    infinite: true,
    arrows: false,
    loop: true,
    autoplay: true,
    speed: 1000,

    lazyLoad: true,
    accessibility: true,
    cssEase: "ease-out",
    swipeToSlide: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          speed: 4000,
        },
      },
    ],
  };

  return (
    <div className="container-ack">
      <div className="">
        <Slider {...settings} className=" mx-auto ">
          {advisor.map((item,index) => (
            <>
              <div className="group p-6" key={index}>
                <div className="relative text-center py-6 border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-sm hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl">
                  <div className="inline-flex justify-center items-center rounded-md md:mt-8 ">
                    <img
                      src={item.image}
                      alt=""
                      className="  rounded-lg w-20 h-20 mx-auto "
                    />
                  </div>

                  <h2 className="font-semibold text-lg py-3 text-black text-center">
                    {item.name}
                  </h2>

                  <p className="text-black/50 group-hover:text-black py-2 pb-4  text-center px-3 text-sm ">
                    {item.desc}
                  </p>

                  <div className="pb-5">
                    <button className="text-black py-2 text-sm border-b group-hover:border-primary group-hover:border-b-2">
                      See More
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Advisors;
