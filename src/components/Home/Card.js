import Link from "next/link";
import React, { useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Card = () => {
    useEffect(() => {
        document.querySelectorAll(".card-slider").forEach((item) => {
            let clone = item
                .querySelector(".card-slider-items")
                .cloneNode(true);
            clone.classList.add("clone");
            clone.ariaHidden = true;
            item.append(clone);
        });
    }, []);

    return (
        <div className="px-5 pt-16 container-ack">
            <div className="bg-[#F6F8F9] rounded-xl ">
                <div className="relative grid items-center gap-6 md:grid-cols-2">
                    <div className="px-5 pb-10 md:px-0 md:pb-0">
                        <div className="px-5 pt-5 md:pl-8 md:px-0 md:pt-0">
                            <h5 className="text-[32px] max-[480px]:text-[20px] font-bold  ">
                                Great Things In Business Are Never Done By One
                                Person.
                                <br />
                                <span className="text-primary">
                                    They&apos;re Done By A Team Of People
                                </span>
                            </h5>

                            <div className="flex pt-5 justify-left">
                                <Link href="/contact">
                                    <button className="px-8 py-2 rounded-md button-2">
                                        <div className="eff-2"></div>
                                        <span className="flex items-center text-base ">
                                            {" "}
                                            Let's Do It Together
                                            <MdKeyboardArrowRight className="text-base " />
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative card-cta">
                        <div className="card-slide">
                            <div className="card-slider sliderOne">
                                <div className="card-slider-items">
                                    <div className="item">
                                        <img
                                            src="/assets/images/doItTogether/slide-1.jpg"
                                            alt="Media Buying Agency in UK"
                                            width="300"
                                            height="450"
                                        />
                                    </div>
                                    <div className="item">
                                        <img
                                            src="/assets/images/doItTogether/slide-2.jpg"
                                            alt="Pr Agency in UK"
                                            width="300"
                                            height="450"
                                        />
                                    </div>
                                    <div className="item">
                                        <img
                                            src="/assets/images/doItTogether/slide-3.jpg"
                                            alt="Online marketing services in UK"
                                            width="300"
                                            height="450"
                                        />
                                    </div>
                                    <div className="item">
                                        <img
                                            src="/assets/images/doItTogether/slide-4.jpg"
                                            alt="Internet markeitng agency in UK"
                                            width="300"
                                            height="450"
                                        />
                                    </div>
                                    <div className="item">
                                        <img
                                            src="/assets/images/doItTogether/slide-5.jpg"
                                            alt="Website development services in UK"
                                            width="300"
                                            height="450"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card-slider">
                                <div className="card-slider-items">
                                    {[1, 1, 1, 1, 1]?.map((item, index) => {
                                        return (
                                            <div key={index} className="item">
                                                <img
                                                    src="/assets/images/doItTogether/slide-3.jpg"
                                                    alt="Online marketing services in UK"
                                                    width="300"
                                                    height="450"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="card-slider hidden-m">
                                <div className="card-slider-items">
                                    {[1, 1, 1, 1, 1]?.map((item, index) => {
                                        return (
                                            <div key={index} className="item">
                                                <img
                                                    src="/assets/images/doItTogether/slide-2.jpg"
                                                    alt="Pr Agency in UK"
                                                    width="300"
                                                    height="650"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
