import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
const BannerResponsive = () => {
  const clientsData = [
    {
      id: 1,
      image: '/assets/images/banner/1.webp',
      atlText: 'online advertising agency in UK',
    },
  ];

  return (
    <div
      className="hidden"
      style={{
        backgroundImage: 'url("/assets/images/mainbackground.png ")',
      }}
    >
      <div className=" HomePageSlider md:pb-20 pb-5 md:pt-0 pt-12">
        <div className="mx-auto relative">
          {clientsData.map((item, index) => (
            <>
              <div className="group SldrImgDta" key={index}>
                <div className="relative text-center">
                  <div className="">
                    <img
                      src={item.image}
                      alt={item.atlText}
                      className=" mx-auto md:h-full w-full h-[490px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="">
          <div className="bg-zinc-100/80	 boxshadowbanner  md:px-10 py-12 md:w-[32%] w-[85%] absolute md:top-0 top-20 md:left-[3.6rem] left-7 rounded-lg  mt-2  px-5 ">
            <ul id="text-slider" class="container">
              <li class="active">
                <div className="flex justify-start items-center space-x-1">
                  <span className="text-primary md:text-sm text-base uppercase font-semibold">
                    {' '}
                    Innovation at its finest{' '}
                  </span>{' '}
                  <img src="/assets/icons/icon.png" className="w-9 bulb" />
                </div>
                <h2 className="text-secondary md:text-[28px] text-lg font-bold leading-[1.2] pt-3">
                  Product Conceptualization & Development
                </h2>
                <p className="text-textcolor pt-4 text-[15px] text-justify font-medium">
                  From concept to reality marketingdataconsultinglimited
                  delivers game changing products for startups and fortune
                  companies.
                </p>
                <div className="pt-10 w-full">
                  <Link href="/contact">
                    <button className="button-3 bg-secondary hover:bg-primary text-white px-12 py-3 justify-center rounded-md flex items-center w-full text-center">
                      <div className="eff-3"></div>
                      <span className="text-base flex items-center ">
                        {' '}
                        Discover Now
                        <MdKeyboardArrowRight className=" text-base" />
                      </span>
                    </button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerResponsive;
