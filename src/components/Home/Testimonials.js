import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import ComponentHead from "../Common/ComponentHead";

const clientsData = [];

const Testimonial = () => {
    const settings = {
        className: "center",
        slidesToShow: 3,
        focusOnSelect: true,
        dots: false,
        infinite: true,
        arrows: true,
        loop: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
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
        <>
            <div className="px-5 pt-12 container-ack mmd:px-0 md:pt-0">
                <div>
                    <div className="">
                        <Slider
                            {...settings}
                            className="mx-auto testimonialSlider"
                        >
                            {clientsData.map((item, index) => (
                                <>
                                    <div
                                        className="relative py-10 testimonial group"
                                        key={index}
                                    >
                                        <div className="hover:bg-[#F6F8F9] border-2 border-[#F6F8F9] text-left mx-3 py-8 rounded-md  hovertestimonial">
                                            <div className="flex flex-col items-center justify-left">
                                                <img
                                                    src={item.image}
                                                    alt=" "
                                                    className="  rounded-lg w-[25%] absolute top-0  left-[9rem]"
                                                />
                                                <div className="px-4 pt-6">
                                                    <div className="pt-4 text-sm text-center text-textcolor font-text">
                                                        {item.para}
                                                    </div>
                                                    <div className="pt-3 text-xl font-semibold text-center text-black">
                                                        {item.text}
                                                    </div>
                                                    <div className="text-sm text-center text-black">
                                                        {item.designation}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </Slider>
                    </div>

                    <div className="flex justify-center pt-5 pb-10">
                        <Link href="/testimonials">
                            <button className="px-12 py-2 rounded-md button-2">
                                <div className="eff-2"></div>
                                <span className="flex items-center text-base ">
                                    {" "}
                                    View All
                                    <MdKeyboardArrowRight className="text-base " />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
