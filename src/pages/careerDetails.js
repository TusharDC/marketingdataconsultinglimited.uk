import React from "react";
import Header from "../components/Common/Header";
import { Fragment, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Dialog, Transition } from "@headlessui/react";
import JobListingCareers from "../components/Career/JobListingCareers";
import Footer from "../components/Common/Footer";
import { AiOutlineClose } from "react-icons/ai";
import Head from "next/head";

const CareerDetails = ()=> {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <div className="container-ack">
        <div className="py-12 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl  text-center font-bold ">
              Etiam nulla lectus amet nunc molestie at <br /> vulputate.
            </h2>
            <p className="text-gray-500">Rhoncus, accumsan dictum</p>
          </div>
          <div className="grid grid-cols-2 gap-10 ">
            <div>
              <img src="/assets/images/Rectangle 548.png" />
            </div>
            <div className="space-y-6">
              <div className="flex space-x-4">
                <ul className="OnlyShow">
                  <li>
                    <span>Enim ac curabitur enim</span>
                    Porttitor tempor consequat tristique faucibus netus massa.
                    Auctor nibh faucibus felis mauris vitae. Morbi
                  </li>
                  <li>
                    <span>Eu at enim arcu</span>
                    Erat sed ut porta ultrices. Tincidunt vulputate justo,
                    interdum imperdiet viverra in non, eu. In tortor odio in
                  </li>

                  <li>
                    <span>Pellentesque ornare proin nisi</span>
                    Erat sed ut porta ultrices. Tincidunt vulputate justo,
                    interdum imperdiet viverra in non, eu. In tortor odio in
                  </li>

                  <li>
                    <span>Diam ac sed ipsum</span>
                    Tincidunt laoreet ultricies vulputate congue sagittis
                    dignissim orci, sapien ridiculus. Magna tincidunt arcu a.
                  </li>

                  <li>
                    <span>Pellentesque ornare proin nisi</span>
                    Erat sed ut porta ultrices. Tincidunt vulputate justo,
                    interdum imperdiet viverra in non, eu. In tortor odio in
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative">
          <div className="w-full relative Dcrption">
            <h4 className="text-[24px] text-secondary font-semibold mb-2">
              {" "}
              Job Descriptions{" "}
            </h4>
            <p className="text-[14px] text-textcolor font-light">
              Lorem ipsum dolor sit amet consectetur. Mauris in cras lacus nisi
              enim quam aliquam sit. Proin feugiat tellus faucibus diam ac
              ullamcorper id. Orci egestas ut ornare ultrices at ante commodo
              massa. Vestibulum bibendum in bibendum facilisis arcu scelerisque.
              In luctus vitae sed vestibulum sit interdum suspendisse ultrices
              duis. Vulputate eget scelerisque massa nunc pretium cras velit
              massa ut. Ultrices quis facilisis egestas feugiat pharetra enim.
              Sollicitudin viverra egestas vitae morbi id integer eu sed
              aliquam. Enim lectus risus molestie auctor id. Mus condimentum et
              sed dictumst. Ipsum blandit sit consequat mattis odio. Odio quam
              est eget blandit. Nullam aenean in pharetra arcu. Consequat tellus
              et rhoncus felis consectetur.
            </p>

            <ul className="DtaUnline">
              <li>
                Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
                pellentesque tempor cursus cursus amet odio.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
                pellentesque tempor cursus cursus amet odio.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
                pellentesque tempor cursus cursus amet odio.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
                pellentesque tempor cursus cursus amet odio.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
                pellentesque tempor cursus cursus amet odio.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full block text-center mt-10">
          <button
            onClick={openModal}
            className="bg-secondary text-white px-10 py-2 text-[12px] border border-transparent rounded-md "
          >
            {" "}
            Apply{" "}
            <MdKeyboardArrowRight className=" text-base text-white inline-block" />{" "}
          </button>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[800px] transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="w-full ">
                    <div className="flex justify-end">
                      <AiOutlineClose
                        size={25}
                        className="font-bold hover:drop-shadow-xl hover:scale-105"
                        onClick={closeModal}
                      />
                    </div>
                    <div className="grid grid-cols-2">
                      <h2 className="absolute text-8xl font-bold text-gray-200 left-0 top-20 -z-10">
                        Join
                      </h2>
                      <div className="px-8 flex flex-col justify-center h-96 pt-20 space-y-6">
                        <div className="">
                          <h2 className="text-4xl">Lorem ipsum</h2>
                        </div>
                        <p className="">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <p className="text-gray-600">
                          Lorem ipsum dolor sit amet consectetur. Ut molestie
                          fermentum a eu sed iaculis feugiat quam. Curabitur
                          turpis amet placerat neque consectetur. At nam velit
                          ipsum sed senectus. Fermentum aliquet pretium volutpat
                          lectus cursus aliquet.
                        </p>
                      </div>

                      <div className="p-8 shadow-xl rounded-md">
                        <h1 className="text-xl font-semibold">
                          Join Our Team!
                        </h1>
                        <p className="font-normal text-sm">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <form className="mt-6 space-y-3 text-sm">
                          <div className="">
                            <label
                              for="email"
                              className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                              Name
                            </label>
                            <input
                              id="name"
                              type="name"
                              name="name"
                              placeholder="Enter Your Name"
                              autocomplete="email"
                              className="block rounded w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="email"
                              className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                              E-mail
                            </label>
                            <input
                              id="email"
                              type="email"
                              name="email"
                              placeholder="Enter Email"
                              className="block rounded w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="phone"
                              className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                              Phone Number
                            </label>
                            <input
                              id="phone"
                              type="text"
                              name="phone"
                              placeholder="Enter Phone"
                              className="block rounded w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="uploadFile"
                              className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                              Upload Resume
                            </label>
                            <input
                              id="uploadFile"
                              type="file"
                              name="uploadFile"
                              placeholder="Upload File Here"
                              className="block rounded w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                              required
                            />
                          </div>
                          <p className="text-sm py-4">
                            Lorem ipsum dolor sit amet consectetur. Accumsan ut
                            ultricies lectus sem nunc.
                          </p>
                          <button
                            type="submit"
                            className="w-full py-3 rounded-xl font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                          >
                            Send
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <JobListingCareers />
      <Footer />
    </>
  );
}

export default CareerDetails;
