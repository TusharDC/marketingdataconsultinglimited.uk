import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clientsData = [
    {
        id: 1,

        image: "/assets/images/clients/jindal-steel.png",
    },
    {
        id: 2,

        image: "/assets/images/clients/c1-UK.png",
    },
    {
        id: 3,

        image: "/assets/images/clients/rsm.png",
    },
    {
        id: 4,

        image: "/assets//images/clients/discovery-land.png",
    },
    {
        id: 5,

        image: "/assets//images/clients/dancewala-studio.png",
    },
    {
        id: 6,

        image: "/assets//images/clients/ehesas.png",
    },
    {
        id: 7,

        image: "/assets//images/clients/expert-buddy.png",
    },
    {
        id: 8,

        image: "/assets//images/clients/ezzy.png",
    },
    {
        id: 9,

        image: "/assets//images/clients/flexi-world.png",
    },
    {
        id: 10,

        image: "/assets//images/clients/mr-furniture.png",
    },
    {
        id: 11,

        image: "/assets//images/clients/grande-arte.png",
    },
    {
        id: 12,

        image: "/assets//images/clients/i2v.png",
    },
    {
        id: 13,

        image: "/assets//images/clients/insaano-health.png",
    },
    {
        id: 14,

        image: "/assets//images/clients/intech-logo.png",
    },
    {
        id: 15,

        image: "/assets//images/clients/jindal-arogya.png",
    },
    {
        id: 16,

        image: "/assets//images/clients/kazuki-official.png",
    },
    {
        id: 17,

        image: "/assets//images/clients/lords-logo.png",
    },
    {
        id: 18,

        image: "/assets//images/clients/milestone.png",
    },
    {
        id: 19,

        image: "/assets//images/clients/Nesto-Hub.png",
    },
    {
        id: 20,

        image: "/assets//images/clients/peptone-logo.png",
    },
    {
        id: 21,

        image: "/assets//images/clients/plumber-babu.png",
    },
    {
        id: 22,

        image: "/assets//images/clients/pplacd.png",
    },
    {
        id: 23,

        image: "/assets//images/clients/rg-consultancy.png",
    },
    {
        id: 24,

        image: "/assets//images/clients/ripik-ai.png",
    },
    {
        id: 25,

        image: "/assets//images/clients/simran.png",
    },
    {
        id: 26,

        image: "/assets//images/clients/toir.png",
    },
    {
        id: 27,

        image: "/assets//images/clients/wonderland.png",
    },
    {
        id: 28,

        image: "/assets//images/clients/xposure.png",
    },
    {
        id: 29,

        image: "/assets//images/clients/carritos.png",
    },
    {
        id: 30,

        image: "/assets//images/clients/coal-giene.png",
    },
    {
        id: 31,

        image: "/assets//images/clients/greenupmyspaces.png",
    },
    {
        id: 32,

        image: "/assets//images/clients/sanjh.png",
    },
    {
        id: 33,

        image: "/assets//images/clients/payments-pro.png",
    },
    {
        id: 34,

        image: "/assets//images/clients/vivo.png",
    },
    {
        id: 35,

        image: "/assets//images/clients/incoin.png",
    },
    {
        id: 36,

        image: "/assets//images/clients/itdi.png",
    },
];

const Clients = () => {
    const settings = {
        className: "center",
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 700,
        focusOnSelect: true,
        dots: false,
        infinite: true,
        arrows: true,
        loop: true,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,

                    speed: 4000,
                },
            },
        ],
    };

    return (
        <div className="container-ack md:px-0 px-5 md:pt-0 pt-12">
            <div className="md:grid grid-cols-2 items-center  md:pt-12 ">
                <div className="">
                    <div className="client-line-heading">
                        <div className="text-[46px] max-[480px]:text-[30px]  text-secondary relative z-10 bottom-[34px] md:text-left text-center font-bold max-w-xl">
                            Customer Delight
                        </div>
                    </div>
                    <div className="load-wrapp relative bottom-[44px] ml-32 md:ml-0">
                        <div className="load">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>

                <p className="pt-1 text-base text-left text-textcolor">
                    Fueling growth for startups and giants alike, we craft
                    data-driven solutions that deliver real results. Jindal
                    Steel & Power saw a 20% brand awareness boost and 15% more
                    leads. For Intech Organics, we optimised supply chains,
                    cutting costs by 10% and enhancing quality. Across
                    healthcare, education, and 120+ industries, we partner with
                    ambitious brands to support their full potential. Looking to
                    fuel your growth success story? Let’s talk!{" "}
                </p>
            </div>

            {/* <div className="relative md:hidden block">
        <div className="md:text-[10rem] text-[5rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
          Clients
        </div>
        <div className="absolute md:top-[9.5rem] top-5 md:left-[11rem]">
          <div className="text-3xl  text-center font-bold ">
            Our Satisfied Clients
          </div>
          <p className="text-base text-center ">
            Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas
            tincidunt urna vulputate. Elit amet nam nulla
          </p>
        </div>
      </div> */}

            <div className="pb-16">
                <ul className="clients-grid grid-6 nobottommargin clearfix">
                    {clientsData.map((item, index) => (
                        <>
                            <li key={index} className="clientzoom">
                                <img
                                    src={item.image}
                                    alt="Clients"
                                    className="rounded-lg w-[70%] mx-auto zoom-client"
                                />
                            </li>
                        </>
                    ))}
                </ul>

                {/* <Slider {...settings} className="logo-slider mx-auto">
          {clientsData.map((item, index) => (
            <>
              <div className="group " key={index}>
                <div className="relative text-center">
                  <div className="">
                    <img
                      src={item.image}
                      alt=" "
                      className="  rounded-lg w-[70%] mx-auto "
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </Slider> */}
            </div>
        </div>
    );
};

export default Clients;
