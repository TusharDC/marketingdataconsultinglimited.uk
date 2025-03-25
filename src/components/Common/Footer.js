import Link from "next/link";
import React from "react";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import Subscription from "../Home/Subscription";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div
            className="relative mt-6 md:mt-12 "
            style={{
                backgroundImage: 'url("/assets/images/backgroundfooter.png")',
            }}
        >
            {/*  */}
            <div className="absolute w-full px-5 md:-top-10 md:px-0 -top-12">
                <Subscription />
            </div>

            <div className="container-ack ">
                <div className="md:pt-36 pt-72">
                    <div className="grid justify-between gap-12 px-5 pb-10 md:grid-cols-12 md:px-0">
                        <div className="space-y-4 md:col-span-4">
                            <Link href="/">
                                <div>
                                    {/* <img
                                        src="/assets/images/logoack.png"
                                        className="w-48"
                                    /> */}
                                    <p className="text-4xl font-bold">
                                        Marketing Afterdark Ltd
                                    </p>
                                </div>
                            </Link>
                            <p className="text-sm text-justify">
                                <strong>
                                    Marketing Data Consulting Limited
                                </strong>{" "}
                                Is Your Partner in Building World-Class
                                Products. We're empowering startups and
                                enterprises of all shapes and sizes with modern
                                tech-stack and smart frameworks to create rich
                                and interactive experiences that captivates and
                                engages new customers.
                            </p>
                            <div className="flex space-x-5">
                                <Link href="/">
                                    <FaFacebook
                                        className="w-5 h-5"
                                        color="#4267b2"
                                    />
                                </Link>
                                <Link href="/">
                                    <FaInstagram
                                        className="w-5 h-5"
                                        color="#e4405f"
                                    />
                                </Link>
                                <Link href="/">
                                    <FaLinkedin
                                        className="w-5 h-5"
                                        color="#0072b1"
                                    />
                                </Link>
                                <Link href="/">
                                    <FaXTwitter className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                        <div className="p-2 md:col-span-4">
                            <h2 className="text-xl font-semibold text-black">
                                EXPLORE
                            </h2>
                            <div className="flex py-4 space-x-20">
                                <ul className="explore">
                                    <Link href="/">
                                        <li className="text-sm hover:text-primary">
                                            <span className="">Home</span>
                                        </li>
                                    </Link>
                                    <Link href="/about">
                                        <li className="text-sm hover:text-primary">
                                            <span className="">About</span>
                                        </li>
                                    </Link>
                                    <Link href="/services">
                                        <li className="text-sm hover:text-primary">
                                            <span className="">
                                                Our Expertise
                                            </span>
                                        </li>
                                    </Link>
                                    <Link href="/experts">
                                        <li className="text-sm hover:text-primary">
                                            <span className="">Our Team</span>
                                        </li>
                                    </Link>
                                </ul>

                                <ul className="explore">
                                    <Link href="/moments">
                                        <li className="text-sm hover:text-primary">
                                            <span className="">Gallery</span>
                                        </li>
                                    </Link>
                                    <Link href="/career">
                                        <li className="text-sm hover:text-primary">
                                            <span className="">Career</span>
                                        </li>
                                    </Link>
                                    <Link href="/terms-and-conditions">
                                        <li className="text-sm hover:text-primary">
                                            <span className="">
                                                Terms and Conditions
                                            </span>
                                        </li>
                                    </Link>
                                    <Link href="/privacy-policy">
                                        <li className="text-sm hover:text-primary">
                                            <span className="">
                                                Privacy Policy
                                            </span>
                                        </li>
                                    </Link>
                                    <Link href="/cancellation-and-refund-policy">
                                        <li className="text-sm hover:text-primary">
                                            <span>Refund Policy</span>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="p-2 md:col-span-4">
                            <h2 className="text-xl font-semibold text-black">
                                CONTACT
                            </h2>
                            <div className="flex py-4 space-x-10">
                                <ul className="">
                                    <li className="cursor-pointer group">
                                        <p className="py-2"> UK Locations : </p>
                                        <span className="flex items-center space-x-2">
                                            <GoLocation
                                                size={24}
                                                className="mt-3 text-black group-hover:text-primary"
                                            />
                                            <h2 className="text-sm md:w-[90%]">
                                                London
                                            </h2>
                                        </span>
                                    </li>

                                    <Link href="tel:+919910190071">
                                        <li className="flex items-center pt-3 space-x-2 group">
                                            <IoMdCall
                                                size={28}
                                                className="mt-3 text-black group-hover:text-primary"
                                            />
                                            <span className="text-sm">
                                                +44 7418 343383
                                            </span>
                                        </li>
                                    </Link>
                                    <Link href="mailto:finance@marketingdataconsultinglimited.uk">
                                        <li className="flex items-center pt-3 space-x-2 group">
                                            <IoMdMail
                                                size={28}
                                                className="text-black group-hover:text-primary"
                                            />
                                            <span className="text-sm">
                                                finance@marketingdataconsultinglimited.uk
                                            </span>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className="h-[1px] bg-dark " />
                    <div className="px-5 py-5 text-sm text-center md:px-0">
                        <p>
                            {" "}
                            © Copyright {new Date().getFullYear()}{" "}
                            <span className="font-semibold">
                                Marketing Data Consulting Limited .
                            </span>{" "}
                            | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
