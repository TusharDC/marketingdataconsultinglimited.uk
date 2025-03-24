import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import ComponentHead from '../Common/ComponentHead';

const OurServices = () => {
  return (
    <div className="px-5 pt-12 container-ack md:px-0 md:pt-0">
      <ComponentHead
        title="Our Services"
        sub="Our Marketing Services in UK"
        head="marketingdataconsultinglimited   is redefining the digital impact of online marketing services in UK. Our resonating services champion ethical and eco-conscious practices, elevating solutions to new heights.        "
      />
      <div className="grid gap-10 pt-2 md:grid-cols-3">
        <div className="relative overflow-hidden rounded-2xl group concept">
          <div className=" bg-[#09090973] backdrop-blur-[1px] h-full z-10 opacity-1 absolute  inset-x-0 text-white flex items-center">
            <div>
              <div className="p-4 space-y-3 text-2xl max-[480px]:text-xl">
                <h3 className="font-bold text-center">Digital Marketing</h3>
                <div className="flex justify-center">
                  <p className="text-sm text-white text-center w-[70%] max-[480px]:w-[100%]">
                    We help you grow your online presence and reach your
                    marketing goals with effective and data-driven digital
                    marketing strategies.
                  </p>
                </div>

                <div className="flex justify-center">
                  <Link href="/services">
                    <button className="px-8 py-2 rounded-md button-1">
                      <div className="eff-1"></div>
                      <span className="flex items-center text-base font-medium">
                        {' '}
                        Learn More
                        <MdKeyboardArrowRight className="text-base " />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="Marketing Agency in UK"
            className="object-cover object-left-top w-full h-full "
            src="/assets/images/ourServices/ser-1.jpg"
          />
        </div>

        <div className="relative overflow-hidden rounded-2xl group concept concept-close">
          <h3 className="w-full absolute grid top-[-16px] items-center cursor-pointer font-bold text-center drop-shadow-2xl z-10 group-hover:z-0 px-6 py-2 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-150 ease-in-out text-white text-3xl bg-[#09090933] h-full max-[480px]:text-xl border-2 border-yellow-500 rounded-lg">
            Search Engine Optimization (SEO)
          </h3>

          <div className=" bg-[#09090973] h-80 z-10 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out absolute  inset-x-0  pt-30 text-white flex items-center">
            <div>
              <div className="p-4 space-y-3 text-2xl group-hover:opacity-100 group-hover:translate-y-0  translate-y-4 pb-10 transform transition duration-200 ease-in-out max-[480px]:text-xl">
                <h3 className="font-bold text-center">SEO</h3>
                <div className="flex justify-center">
                  <p className="text-sm text-white text-center w-[70%] max-[480px]:w-[100%]">
                    Team marketingdataconsultinglimited is always ready to rank
                    you higher on SERPs and search engines like Bing, Google, or
                    DuckDuckGo and drive more organic traffic to your website
                    with proven and ethical SEO techniques.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Link href="/services">
                    <button className="px-8 py-2 rounded-md button-1">
                      <div className="eff-1"></div>
                      <span className="flex items-center text-base font-medium">
                        {' '}
                        Learn More
                        <MdKeyboardArrowRight className="text-base " />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="Influncer marketing in UK"
            className="object-cover object-left-top w-full grayscale-0 group-hover:grayscale h-80"
            src="/assets/images/ourServices/ser-2.jpg"
          />
        </div>
        <div className="relative overflow-hidden rounded-2xl group concept concept-close">
          <h3 className="w-full absolute grid top-[-16px] items-center cursor-pointer font-bold text-center drop-shadow-2xl z-10 group-hover:z-0 px-6 py-2 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-150 ease-in-out text-white text-3xl bg-[#09090933] h-full max-[480px]:text-xl border-2 border-yellow-500 rounded-lg ">
            Social Media Marketing (SMM)
          </h3>

          <div className=" bg-[#09090973] h-80 z-10 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out absolute  inset-x-0  pt-30 text-white flex items-center">
            <div>
              <div className="p-4 space-y-3 text-2xl group-hover:opacity-100 group-hover:translate-y-0  translate-y-4 pb-10 transform transition duration-200 ease-in-out max-[480px]:text-xl">
                <h3 className="font-bold text-center">
                  Social Media Marketing (SMM)
                </h3>
                <div className="flex justify-center">
                  <p className="text-sm text-white text-center w-[70%] max-[480px]:w-[100%] pt-3">
                    SMM is in our blood and we help you build and engage your
                    social media community with creative and relevant content,
                    campaigns, and ads.
                  </p>
                </div>
                <div className="flex justify-center pt-6">
                  <Link href="/services">
                    <button className="px-8 py-2 rounded-md button-1">
                      <div className="eff-1"></div>
                      <span className="flex items-center text-base font-medium">
                        {' '}
                        Learn More
                        <MdKeyboardArrowRight className="text-base " />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="Digital Marketing in UK "
            className="object-cover object-left-top w-full grayscale-0 group-hover:grayscale h-80"
            src="/assets/images/ourServices/ser-3.jpg"
          />
        </div>

        {/* ADDED */}
        <div className="relative overflow-hidden rounded-2xl group concept concept-close">
          <h3 className="w-full absolute grid top-[-16px] items-center cursor-pointer font-bold text-center drop-shadow-2xl z-10 group-hover:z-0 px-6 py-2 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-150 ease-in-out text-white text-3xl bg-[#09090933] h-full max-[480px]:text-xl border-2 border-yellow-500 rounded-lg ">
            Influencer Marketing
          </h3>

          <div className=" bg-[#09090973] h-80 z-10 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out absolute  inset-x-0  pt-30 text-white flex items-center">
            <div>
              <div className="p-4 space-y-3 text-2xl group-hover:opacity-100 group-hover:translate-y-0  translate-y-4 pb-10 transform transition duration-200 ease-in-out max-[480px]:text-xl">
                <h3 className="font-bold text-center">Influencer Marketing</h3>
                <div className="flex justify-center">
                  <p className="text-sm text-white text-center w-[70%] max-[480px]:w-[100%] pt-3">
                    The team of Gen-Z leaders and thought provokers at
                    marketingdataconsultinglimited help you connect and
                    collaborate with influential and authentic influencers who
                    can amplify your brand message and generate trust and
                    loyalty among your customers.
                  </p>
                </div>
                <div className="flex justify-center pt-6">
                  <Link href="/services">
                    <button className="px-8 py-2 rounded-md button-1">
                      <div className="eff-1"></div>
                      <span className="flex items-center text-base font-medium">
                        {' '}
                        Learn More
                        <MdKeyboardArrowRight className="text-base " />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="Social Media Marketing Agency in UK"
            className="object-cover object-left-top w-full grayscale-0 group-hover:grayscale h-80"
            src="/assets/images/ourServices/ser-4.jpg"
          />
        </div>
        <div className="relative overflow-hidden rounded-2xl group concept concept-close">
          <h3 className="w-full absolute grid top-[-16px] items-center cursor-pointer font-bold text-center drop-shadow-2xl z-10 group-hover:z-0 px-6 py-2 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-150 ease-in-out text-white text-3xl bg-[#09090933] h-full max-[480px]:text-xl border-2 border-yellow-500 rounded-lg ">
            Website Design
          </h3>

          <div className=" bg-[#09090973] h-80 z-10 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out absolute  inset-x-0  pt-30 text-white flex items-center">
            <div>
              <div className="p-4 space-y-3 text-2xl group-hover:opacity-100 group-hover:translate-y-0  translate-y-4 pb-10 transform transition duration-200 ease-in-out max-[480px]:text-xl">
                <h3 className="font-bold text-center">
                  Website <br />
                  Design
                </h3>
                <div className="flex justify-center">
                  <p className="text-sm text-white text-center w-[70%] max-[480px]:w-[100%] pt-3">
                    Our UI/UX Designers create stunning and user-friendly
                    websites that tell your brand identity and attract desired
                    audiences.
                  </p>
                </div>
                <div className="flex justify-center pt-6">
                  <Link href="/services">
                    <button className="px-8 py-2 rounded-md button-1">
                      <div className="eff-1"></div>
                      <span className="flex items-center text-base font-medium">
                        {' '}
                        Learn More
                        <MdKeyboardArrowRight className="text-base " />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="Performnce Marketing agency in UK"
            className="object-cover object-left-top w-full grayscale-0 group-hover:grayscale h-80"
            src="/assets/images/ourServices/ser-5.jpg"
          />
        </div>
        <div className="relative overflow-hidden rounded-2xl group concept concept-close">
          <h3 className="w-full absolute grid top-[-16px] items-center cursor-pointer font-bold text-center drop-shadow-2xl z-10 group-hover:z-0 px-6 py-2 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-150 ease-in-out text-white text-3xl bg-[#09090933] h-full max-[480px]:text-xl border-2 border-yellow-500 rounded-lg ">
            PR & Media Buying
          </h3>

          <div className=" bg-[#09090973] h-80 z-10 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out absolute  inset-x-0  pt-30 text-white flex items-center">
            <div>
              <div className="p-4 space-y-3 text-2xl group-hover:opacity-100 group-hover:translate-y-0  translate-y-4 pb-10 transform transition duration-200 ease-in-out max-[480px]:text-xl">
                <h3 className="font-bold text-center">PR & Media Buying</h3>
                <div className="flex justify-center">
                  <p className="text-sm text-white text-center w-[70%] max-[480px]:w-[100%] pt-3">
                    Our strategic and cost-effective PR and media buying
                    solutions help you boost your brand awareness and improve
                    your overall reputation.
                  </p>
                </div>
                <div className="flex justify-center pt-6">
                  <Link href="/services">
                    <button className="px-8 py-2 rounded-md button-1">
                      <div className="eff-1"></div>
                      <span className="flex items-center text-base font-medium">
                        {' '}
                        Learn More
                        <MdKeyboardArrowRight className="text-base " />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="Social media marketing services in UK"
            className="object-cover object-left-top w-full grayscale-0 group-hover:grayscale h-80"
            src="/assets/images/ourServices/ser-6.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
