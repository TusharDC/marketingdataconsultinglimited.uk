import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { IoMdThermometer } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const aboutdata = [
    {
        id: 1,
        image: "/assets/images/about/slide-1.jpg",
        alttext: "Marketing Services in UK ",
    },
    {
        id: 2,
        image: "/assets/images/about/slide-2.jpg",
        alttext: "Marketing Agency in UK",
    },
    {
        id: 3,
        image: "/assets/images/about/slide-3.jpg",
        alttext: "ad company in UK",
    },
    {
        id: 4,
        image: "/assets/images/about/slide-4.jpg",
        alttext: "Best Marketing agency in UK ,",
    },
    {
        id: 5,
        image: "/assets/images/about/slide-6.jpeg",
        alttext: "Marketing agency in UK",
    },
];

const About = () => {
    const settings = {
        className: "center",
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        focusOnSelect: false,
        dots: true,
        infinite: true,
        arrows: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 300,
        lazyLoad: true,
        accessibility: true,
        cssEase: "ease-out",
        swipeToSlide: true,
        // adaptiveHeight: true,

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
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <div className="bg-[#F6F8F9] md:py-10 md:pt-0 pt-12">
            <div className="items-center grid-cols-5 gap-4 md:grid justfiy-center mobile-hide ">
                <div className="col-span-2 px-5 md:px-0 ">
                    <div className="">
                        <div className="md:w-[95%] pl-16 w-full md:text-base text-xs text-textcolor text-justify font-text pb-4">
                            <div className="line-heading">
                                <div className="text-[46px] max-[480px]:text-[30px] text-secondary relative z-10 pb-5 text-left font-bold max-w-xl">
                                    Why Choose
                                </div>
                            </div>
                            <div className="load-wrapp relative bottom-[15px]">
                                <div className="load">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                            </div>
                            <p className="pb-2 font-bold">
                                Marketing Data Consulting Limited{" "}
                            </p>
                            <p className="mb-2">
                                {" "}
                                Choose Marketing Data Consulting Limited. for a
                                partnership that values commitment,
                                collaboration, and innovation. Together, we can
                                create a digital future that goes beyond the
                                ordinary.
                            </p>

                            <div className="flex justify-start pt-5 pb-10">
                                <Link href="/about">
                                    <button className="px-8 py-2 rounded-md button-2">
                                        <div className="eff-2"></div>
                                        <span className="flex items-center text-base">
                                            {" "}
                                            Read More
                                            <MdKeyboardArrowRight className="text-base" />
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 AboutSliderSection">
                    <Slider {...settings} className="mx-auto ">
                        {aboutdata?.map((item, index) => (
                            <>
                                <div
                                    className="relative py-2 group SldrDtaAbout"
                                    key={index}
                                >
                                    <div className="px-2">
                                        <img
                                            src={item.image}
                                            alt={item.alttext}
                                            className="w-full rounded-lg "
                                        />
                                    </div>
                                </div>
                            </>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="px-5 container-ack md:hidden">
                <div className="relative md:pb-0">
                    <div className="w-full pb-4 text-xs text-justify md:text-base text-textcolor font-text">
                        <div className="line-heading">
                            <div className="text-[46px] max-[480px]:text-[30px] text-secondary relative z-10 pb-5 text-left font-bold max-w-xl">
                                Who We Are
                            </div>
                        </div>
                        <div className="load-wrapp relative bottom-[15px]">
                            <div className="load">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="w-full pb-4 text-base text-justify text-textcolor font-text ">
                            marketingdataconsultinglimited Pvt Ltd is an award
                            winning product conceptualization & development
                            company that partners with businesses to create
                            digital experiences to their customer&apos;s love,
                            across strategy, design, mobile applications and web
                            technologies.
                        </div>
                        <div className="w-full py-4 text-base text-justify text-textcolor font-text">
                            Over the last Eight years, we have employed
                            technology as a force-multiplier and built
                            disruptive, business-driven and measurable design
                            and technology interventions to make this complex
                            world of ours, exceedingly obvious. We have
                            successfully moved business metrics and delivered
                            high impact work for 120+ startups, unicorns,
                            nonprofits and industry titans across sectors such
                            as Jindal Steel & Power (JSPL) , Intech Organics,
                            Expert Buddy, Nesto Hub & many more..
                        </div>
                        <div className="flex pt-4 pb-10">
                            <Link href="/about">
                                <button className="px-12 py-2 rounded-md button-2">
                                    <div className="eff-2"></div>
                                    <span className="flex items-center text-base ">
                                        {" "}
                                        Know More
                                        <MdKeyboardArrowRight className="text-base " />
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pb-5">
                    <Slider {...settings} className="mx-auto ">
                        {aboutdata.map((item) => (
                            <>
                                <div className="relative group" key={item}>
                                    <div className="px-2">
                                        <img
                                            src={item.image}
                                            alt=" "
                                            className="  rounded-lg  md:w-[90%]"
                                        />
                                    </div>
                                </div>
                            </>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default About;
