import React from 'react';
import { FaBalanceScaleRight, FaRegHandshake } from 'react-icons/fa';

const SectionTwo = () => {
  return (
    <div
      className="h-full relative md:pb-24 md:mb-16 mt-12"
      style={{
        backgroundImage: 'url("/assets/images/backgroundimg.png ")',
      }}
    >
      <div className="container-ack">
        <div className="grid md:grid-cols-2 gap-6 items-center container-ack  ">
          <div className="pb-5  ">
            <img src="/assets/images/aboutpage/key.png" alt="" />
          </div>

          <div className=" md:px-0 px-5 pb-10 md:pb-0  relative">
            <div className="dynamic-text  " data-content="Features"></div>
            <div className="">
              <div className="text-[46px] max-[480px]:text-[30px] text-secondary relative bottom-[18px] z-10 font-bold">
                Key Features
              </div>
              <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
                We believe in building long-term partnerships for your success!
              </div>

              <div className="md:w-[95%] w-full  flex space-x-3 pt-4  ">
                <div>
                  {' '}
                  <hr className="w-[30px] h-[5px] bg-primary mt-2" />{' '}
                </div>
                <div className="text-base text-textcolor text-justify font-text">
                  <span className="font-semibold ">Expertise -</span>{' '}
                  marketingdataconsultinglimited have a team of highly skilled
                  and experienced technology professionals.
                </div>
              </div>
              <div className="md:w-[95%] w-full  flex space-x-3 pt-3 ">
                <div>
                  {' '}
                  <hr className="w-[30px] h-[5px] bg-secondary mt-2" />{' '}
                </div>
                <div className="text-base text-textcolor text-justify font-text">
                  <span className="font-semibold ">Innovation -</span> We are
                  committed to innovation and constantly exploring new ideas and
                  solutions to stay ahead of the curve.
                </div>
              </div>
              <div className="md:w-[95%] w-full  flex space-x-3  pt-3">
                <div>
                  {' '}
                  <hr className="w-[30px] h-[5px] bg-primary mt-2" />{' '}
                </div>
                <div className="text-base text-textcolor text-justify font-text">
                  <span className="font-semibold ">Customization - </span> We
                  take a tailored approach to every project, working closely
                  with clients to develop customized solutions.
                </div>
              </div>
              <div className="md:w-[95%] w-full  flex space-x-3  pt-3">
                <div>
                  {' '}
                  <hr className="w-[30px] h-[5px] bg-primary mt-2" />{' '}
                </div>
                <div className="text-base text-textcolor text-justify font-text">
                  <span className="font-semibold ">Quality Assurance - </span>{' '}
                  We have rigorous quality control processes that meets our
                  client&apos;s expectations.
                </div>
              </div>
              <div className="md:w-[95%] w-full  flex space-x-3  pt-3">
                <div>
                  {' '}
                  <hr className="w-[30px] h-[5px] bg-primary mt-2" />{' '}
                </div>
                <div className="text-base text-textcolor text-justify font-text">
                  <span className="font-semibold ">Customer Service - </span> We
                  are providing proactive communication, responsive support, and
                  ensuring that our clients are satisfied with our services.
                </div>
              </div>
              <div className="md:w-[95%] w-full  flex space-x-3  pt-3">
                <div>
                  {' '}
                  <hr className="w-[30px] h-[5px] bg-primary mt-2" />{' '}
                </div>
                <div className="text-base text-textcolor text-justify font-text">
                  <span className="font-semibold ">Security -</span> We have a
                  strong focus on security, ensuring that our client&apos;s data
                  and systems are protected from cyber threats and other risks.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex justify-center md:space-x-20 md:px-20 px-5 md:space-y-0 space-y-5  pt-5 md:absolute -bottom-20">
          <div className="flex justify-start space-x-6 px-12 py-4 bg-white drop-shadow-md rounded-md">
            {/* <img
              className=" w-10 h-10"
              src="/assets/images/vision.png"
              alt=""
            /> */}

            <FaBalanceScaleRight size={95} />
            <div className="">
              <p className="font-semibold text-lg">Scalability</p>
              <p className="text-sm">
                marketingdataconsultinglimited has the capacity to scale its
                services and solutions to meet the changing needs of the clients
                as their businesses grow and evolve.
              </p>
            </div>
          </div>

          <div className="flex justify-start space-x-6 px-12 py-4 bg-white drop-shadow-md rounded-md">
            {/* <img className="w-10 h-10" src="/assets/images/vision.png" alt="" /> */}

            <FaRegHandshake size={95} />
            <div className="">
              <p className="font-semibold text-lg">Long-Term Partnerships</p>
              <p className="text-sm">
                We strive to build long-lasting partnerships with its clients,
                based on trust, transparency, and a commitment to their success
                over the long term.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
