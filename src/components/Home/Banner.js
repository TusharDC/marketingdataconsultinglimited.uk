import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
// import { HiLightBulb } from "react-icons/hi";
import Link from 'next/link';
const Banner = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '180px',
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1200,
    lazyLoad: true,
    accessibility: true,
    cssEase: 'ease-out',
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
        },
      },
    ],
  };
  const clientsData = [
    {
      id: 1,
      image: '/assets/images/banner/2.jpg',
      altText: 'Best Marketing agency in UK ',
    },
    {
      id: 2,
      image: '/assets/images/banner/1.jpg',
      altText: 'Marketing agency in UK',
    },
    {
      id: 3,
      image: '/assets/images/banner/3.jpg',
      altText: 'online advertising agency in UK',
    },
  ];

  useEffect(() => {
    let list = [].slice.call(document.querySelector('.container').children);

    function findActiveList() {
      let activeList = list.findIndex(e => {
        return e.classList.contains('active');
      });
      list[activeList].classList.remove(
        'active',
        'fadeInRight',
        'fadeInLext',
        'animated'
      );
      return activeList;
    }

    function slideShow() {
      let activeList = findActiveList();

      activeList++;
      activeList = activeList === list.length ? 0 : activeList;

      list[activeList].classList.add('active', 'fadeInRight', 'animated');
    }

    setInterval(slideShow, 4500);
  }, []);
  return (
    <div
      className="bg-right md:block "
      style={{
        backgroundImage: 'url("/assets/images/mainbackground.png ")',
      }}
    >
      <div className="px-5 pt-5 pb-5 md:px-0 HomePageSlider md:pb-20 md:pt-0">
        <Slider {...settings} className="relative mx-auto">
          {clientsData.map((item, index) => (
            <>
              <div className="group SldrImgDta" key={index}>
                <div className="relative text-center">
                  <div className="">
                    <img
                      src={item.image}
                      alt={item.altText}
                      className="rounded-lg mx-auto md:h-full h-[450px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </Slider>
        <div className="">
          <div className="bg-zinc-100/80	 boxshadowbanner  md:px-10 py-12 md:w-[32%] w-[85%] absolute md:top-0 top-6 md:left-[3.6rem] left-7 rounded-lg  mt-2  px-5 ">
            <ul id="text-slider" class="container">
              <li class="active">
                <div className="flex items-center justify-start space-x-1">
                  <span className="text-base font-semibold uppercase text-primary md:text-sm">
                    {' '}
                    Pioneering Digital
                  </span>{' '}
                  <img src="/assets/icons/icon.png" className="w-9 bulb" />
                </div>
                <h1 className="text-secondary md:text-[28px] text-lg font-bold leading-[1.2] pt-3">
                  Marketing Data Consulting Limited : Best Marketing Agency in
                  UK
                </h1>
                <p className="text-textcolor pt-4 text-[15px] text-justify font-medium">
                  We're your few that improve brands, propell businesses forward
                  in complex times, & develop solutions that speak only results.
                </p>
                <div className="w-full pt-10">
                  <Link href="/contact">
                    <button className="flex items-center justify-center w-full px-12 py-3 text-center text-white rounded-md button-3 bg-secondary hover:bg-primary">
                      <div className="eff-3"></div>
                      <span className="flex items-center text-base ">
                        {' '}
                        Hire Us Now
                        <MdKeyboardArrowRight className="text-base " />
                      </span>
                    </button>
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-start space-x-1">
                  <span className="text-base font-semibold uppercase text-primary md:text-sm">
                    {' '}
                    Limitless Creativity Unleashed
                  </span>{' '}
                  <img src="/assets/icons/icon.png" className="w-9 bulb" />
                </div>
                <h2 className="text-secondary md:text-[28px] text-lg font-bold leading-[1.2] pt-3">
                  Facilitating Marketing Agency
                </h2>
                <p className="text-textcolor pt-4 text-justify text-[15px] font-medium">
                  marketingdataconsultinglimited is the best Marketing Agency in
                  UK because we've country's best minds fusing creativity and
                  technology to develop best solutions, leaving enduring
                  impressions every time.
                </p>
                <div className="w-full pt-10">
                  <Link href="/contact">
                    <button className="flex items-center justify-center w-full px-12 py-3 text-center text-white rounded-md button-3 bg-secondary hover:bg-primary">
                      <div className="eff-3"></div>
                      <span className="flex items-center text-base ">
                        {' '}
                        Schedule a 1:1 Meet Today
                        <MdKeyboardArrowRight className="text-base " />
                      </span>
                    </button>
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-start space-x-1">
                  <span className="text-base font-semibold uppercase text-primary md:text-sm">
                    {' '}
                    Crafting Tomorrow’s Websites Today
                  </span>{' '}
                  <img src="/assets/icons/icon.png" className="w-9 bulb" />
                </div>
                <h2 className="text-secondary md:text-[28px] text-lg font-bold leading-[1.2] pt-3">
                  Marketing Data Consulting Limited : Performance Marketing
                  Company in UK
                </h2>
                <p className="text-textcolor pt-4 text-[15px] text-justify font-medium">
                  Marketing Data Consulting Limited is the best performance
                  marketing agency in UK with its headquarter in that offers
                  performance driven 360° digital marketing services.
                </p>
                <div className="w-full pt-10">
                  <Link href="/contact">
                    <button className="flex items-center justify-center w-full px-12 py-3 text-center text-white rounded-md button-3 bg-secondary hover:bg-primary">
                      <div className="eff-3"></div>
                      <span className="flex items-center text-base ">
                        {' '}
                        Let’s Build Your
                        <MdKeyboardArrowRight className="text-base " />
                      </span>
                    </button>
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-start space-x-1">
                  <span className="text-base font-semibold uppercase text-primary md:text-sm">
                    {' '}
                    Excellence at Each Step
                  </span>{' '}
                  <img src="/assets/icons/icon.png" className="w-9 bulb" />
                </div>
                <h2 className="text-secondary md:text-[28px] text-lg font-bold leading-[1.2] pt-3">
                  Conceptualising and Creating Compelling Products!
                </h2>
                <p className="text-textcolor pt-4 text-[15px] text-justify font-medium">
                  <strong>
                    Conceptualising and Creating Compelling Products:
                  </strong>{' '}
                  From Ideation to Reality, this Digital Marketing Company in UK
                  Delivers Transformative Solutions for Individuals, Startups
                  and Fortune 500 Companies.
                </p>
                <div className="w-full pt-10">
                  <Link href="/contact">
                    <button className="flex items-center justify-center w-full px-12 py-3 text-center text-white rounded-md button-3 bg-secondary hover:bg-primary">
                      <div className="eff-3"></div>
                      <span className="flex items-center text-base ">
                        {' '}
                        Talk to Us
                        <MdKeyboardArrowRight className="text-base " />
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
export default Banner;
