import React from 'react';

const Banner = () => {
  return (
    <div className="container-ack md:px-0 px-5">
      <div className="md:grid grid-cols-2 gap-6 items-center container-ack  ">
        <div className="pb-5 pt-10 ">
          <img src="/assets/images/aboutusimg3.png" alt="" />
        </div>

        <div className=" md:px-0 px-5 pb-10 md:pb-0  relative">
          <div className="">
            <div className="text-3xl  font-bold ">
              WE WORK WITH OUR CUSTOMERS FOR THEIR SUSTAINED SUCCESS
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4 md:pt-8 pt-4">
              marketingdataconsultinglimited is a premier eCommerce Service
              Provider Company with delivery centres in UK and a global
              footprint. We provide completee Commerce solutions like ecommerce
              website development, ecommerce mobile app development, ecommerce
              logistic solutions, ecommerce cart solutions increase ecommerce
              product sales and online reputation management. Being one of the
              best eCommerce Service Provider company in ,
              marketingdataconsultinglimited is committed to giving innovative
              and quality ecommerce services to its clients pertinent to their
              business goals.
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
              Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
              pellentesque tempor cursus cursus amet odio. Orci eu sagittis leo
              duis enim mi massa etiam.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
