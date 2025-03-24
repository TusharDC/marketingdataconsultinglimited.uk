import React from 'react';

const AboutPage = () => {
  return (
    <div
      className=" bg-right md:-mt-12 "
      style={{
        backgroundImage: 'url("/assets/images/mainbackground.png ")',
      }}
    >
      <div className="md:grid grid-cols-2 gap-6 items-center container-ack  ">
        <div className=" md:pt-16 ">
          <img src="/assets/images/aboutpage/aboutpage.png" alt="" />
        </div>

        <div className=" md:px-0 px-5 pb-10 md:pb-0  relative">
          <div className="dynamic-text  " data-content="About"></div>

          <div className="">
            <div className="text-[36px] max-[480px]:text-[30px] text-secondary relative bottom-[18px] z-10 font-bold">
              Why{' '}
              <span className="text-primary">
                {' '}
                marketingdataconsultinglimited ?{' '}
              </span>
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
              marketingdataconsultinglimited is a full-service digital marketing
              agency. Our digital marketing services include consulting and
              management options for a variety of online marketing tactics
              including search engine optimization (SEO), pay-per-click (PPC)
              ads, Amazon store optimization, copywriting, conversion rate
              optimization (CRO), and more. We also offer expert web design and
              development services for both eCommerce and B2B companies. Don’t
              just partner with any digital marketing agency; work with a
              company you can trust.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
