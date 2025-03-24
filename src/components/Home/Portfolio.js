import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ComponentHead from "../Common/ComponentHead";

const Portfolio = () => {
    return (
        <div className="bg-[#F6F8F9] ">
            <div className="container-ack md:px-0 px-5  md:pt-0 pt-12 ">
                <ComponentHead
                    title="Portfolio"
                    sub="Portfolio"
                    head="At the Intersection of Imagination and Technology, We Artfully Craft Products that Surpass Your Expectations and Pioneer 'What's Next?' with Unique & Best marketing Services in UK."
                />
                <div className="masonry-grid pb-2">
                    <div className="masonry-grid-item containerzoom">
                        <img
                            className="zoomimg drop-shadow-md"
                            src="/assets/images/portfolio/jindal.jpg"
                            alt=""
                        />
                    </div>
                    <div className="masonry-grid-item containerzoom">
                        <img
                            className="zoomimg drop-shadow-md"
                            src="/assets/images/portfolio/EB.jpg"
                            alt=""
                        />
                    </div>
                    <div className="masonry-grid-item containerzoom">
                        <img
                            className="zoomimg drop-shadow-md"
                            src="/assets/images/portfolio/vivo.jpg"
                            alt=""
                        />
                    </div>
                    <div className="masonry-grid-item containerzoom">
                        <img
                            className="zoomimg drop-shadow-md"
                            src="/assets/images/portfolio/insaano.jpg"
                            alt=""
                        />
                    </div>
                    <div className="masonry-grid-item containerzoom">
                        <img
                            className="zoomimg drop-shadow-md"
                            src="/assets/images/portfolio/toir.jpg"
                            alt=""
                        />
                    </div>
                    <div className="masonry-grid-item containerzoom">
                        <img
                            className="zoomimg drop-shadow-md"
                            src="/assets/images/portfolio/milestone.jpg"
                            alt=""
                        />
                    </div>
                    <div className="masonry-grid-item containerzoom">
                        <img
                            className="zoomimg drop-shadow-md"
                            src="/assets/images/portfolio/kazuki.jpg"
                            alt=""
                        />
                    </div>
                    <div className="masonry-grid-item containerzoom">
                        <img
                            className="zoomimg drop-shadow-md"
                            src="/assets/images/portfolio/c1UK.jpg"
                            alt=""
                        />
                    </div>
                    <div className="masonry-grid-item containerzoom">
                        <img
                            className="zoomimg drop-shadow-md"
                            src="/assets/images/portfolio/discovery.png"
                            alt=""
                        />
                    </div>
                    <div className="masonry-grid-item containerzoom">
                        <img
                            className="zoomimg drop-shadow-md"
                            src="/assets/images/portfolio/mr-furniture.jpg"
                            alt=""
                        />
                    </div>
                </div>

                {/* <section className="portfolio_block">
          <div className="gallery">
            <div className=" img_box containerzoom pic">
              <img className="zoomimg drop-shadow-md" src="/assets/images/portfolio/jindal.jpg" alt="" />
            </div>
            <div className=" img_box containerzoom">
              <img className="zoomimg drop-shadow-md" src="/assets/images/portfolio/insaano.jpg" alt="" />
            </div>
            <div className=" img_box containerzoom">
              <img className="zoomimg drop-shadow-md" src="/assets/images/portfolio/EB.jpg" alt="" />
            </div>
            <div className=" img_box containerzoom">
              <img className="zoomimg drop-shadow-md" src="https://unsplash.it/600/400?image=767" alt="" />
            </div>
            <div className=" img_box containerzoom">
              <img className="zoomimg drop-shadow-md" src="https://unsplash.it/600/400?image=296" alt="" />
            </div>
            <div className=" img_box containerzoom">
              <img className="zoomimg drop-shadow-md" src="https://unsplash.it/600/400?image=168" alt="" />
            </div>
            <div className=" img_box containerzoom">
              <img className="zoomimg drop-shadow-md" src="https://unsplash.it/600/400?image=871" alt="" />
            </div>
            <div className=" img_box containerzoom">
              <img className="zoomimg drop-shadow-md" src="https://unsplash.it/600/400?image=821" alt="" />
            </div>
            <div className=" img_box containerzoom">
              <img className="zoomimg drop-shadow-md" src="https://unsplash.it/600/400?image=164" alt="" />
            </div>
            <div className=" img_box containerzoom">
              <img className="zoomimg drop-shadow-md" src="https://unsplash.it/600/400?image=872" alt="" />
            </div>
            <div className=" img_box containerzoom ">
              <img className="zoomimg drop-shadow-md" src="https://unsplash.it/600/400?image=826" alt="" />
            </div>
          </div>
        </section> */}

                {/* <div className="grid md:grid-cols-12 gap-4 pb-10 md:pt-0 pt-5 items-center">
          <div className="md:col-span-5">
            <div className="md:flex md:space-x-4 items-baseline">
              <div className="containerzoom">
                <img
                  src="/assets/images/portfolio/jindal.jpg"
                  className="md:w-60 md:h-80 w-full h-full object-fill zoomimg drop-shadow-md"
                  alt="jindal"
                />
              </div>
              <div className="containerzoom">
                <img
                  src="/assets/images/portfolio/insaano.jpg"
                  className="md:w-80 md:h-60 w-full object-fill object-top zoomimg drop-shadow-md"
                  alt="Insano Health"
                />
              </div>
            </div>
            <div className="md:flex md:space-x-4 pt-4">
              <div className="containerzoom">
                <img
                  src="/assets/images/portfolio/EB.jpg"
                  className="md:w-60 md:h-80 w-full h-full object-fill zoomimg drop-shadow-md"
                  alt="Expert Buddy"
                />
              </div>
              <div className="containerzoom">
                <img
                  src="/assets/images/portfolio/vivo.png"
                  className=" md:w-80 md:h-60 w-full h-full object-fill md:pt-0 pt-4 zoomimg drop-shadow-md"
                  alt="Vivo health"
                />
              </div>
            </div>
            <div></div>
          </div>
          <div className="md:col-span-2 flex flex-col justify-center">
            <div className="containerzoom">
              <img
                src="/assets/images/portfolio/milestone.jpg"
                className="md:w-72 md:h-80 w-full h-full object-fill object-left zoomimg drop-shadow-md"
                alt="milestone"
              />
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="md:flex md:space-x-4 items-baseline">
              <div className="containerzoom ">
                <img
                  src="/assets/images/portfolio/toir.jpg"
                  className="md:w-60  md:h-48 w-full h-full object-fill zoomimg drop-shadow-md"
                  alt="Toir"
                />
              </div>
              <div className="containerzoom">
                <img
                  src="/assets/images/portfolio/kazuki.png"
                  className=" md:w-60 md:h-80 w-full h-full object-fill md:pt-0 pt-4 zoomimg drop-shadow-md "
                  alt="kazuki"
                />
              </div>
            </div>
            <div className="md:flex md:space-x-4 pt-4">
              <div className="containerzoom">
                <img
                  src="/assets/images/portfolio/mr-furniture.jpg"
                  className="md:w-60 md:h-80 w-full h-full object-fill zoomimg drop-shadow-md"
                  alt="mr-furniture"
                />
              </div>
              <div className="containerzoom">
                <img
                  src="/assets/images/portfolio/c1UK.jpg"
                  className="md:w-80 md:h-60 w-full h-full object-fill md:pt-0 pt-4 zoomimg drop-shadow-md"
                  alt="c1UK"
                />
              </div>
            </div>
            <div></div>
          </div>
        </div> */}

                <div className="flex justify-center pb-10">
                    <Link href="/portfolio">
                        <button className=" button-2  px-12 py-2 rounded-md">
                            <div className="eff-2"></div>
                            <span className="text-base flex items-center ">
                                {" "}
                                View All
                                <MdKeyboardArrowRight className=" text-base" />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
