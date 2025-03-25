import Link from "next/link";
import React, { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import ThankYouModal from "../modal/ThankYouModal";

const FormSection = () => {
    //form feild

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [submitText, setSubmitText] = useState("Send");

    const [errorMessage, setErrorMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //send data using api
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("data after submit:", e);

        if (!name) {
            setErrorMessage("Please enter name");
        } else if (!email) {
            setErrorMessage("Please enter email");
        } else if (!emailRegex.test(email)) {
            setErrorMessage("Please enter valid email");
        } else if (!phone) {
            setErrorMessage("Please enter phone number");
        } else if (!subject) {
            setErrorMessage("Please enter subject");
        } else if (!message) {
            setErrorMessage("Please enter message");
        } else {
            setSubmitText("...");

            let data = {
                name,
                email,
                phone,
                subject,
                message,
            };

            fetch("/api/contact", {
                method: "POST",
                headers: {
                    Accept: "application/json, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then((res) => {
                console.log("Response received:", res);
                console.log("data:", data);

                if (res.status === 200) {
                    console.log("Response succeeded!");
                    setName("");
                    setEmail("");
                    setPhone("");
                    setSubject("");
                    setMessage("");
                    setSubmitText("Submitted");
                    setIsModalOpen(true);
                }
            });
        }
    };
    return (
        <>
            <div
                className="bg-cover"
                // style={{ backgroundImage: `url("/assets/images/banner/3.webp")` }}
            >
                <div className="relative mb-50 ">
                    <div className="md:text-[7rem] text-[5rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
                        Connect
                    </div>
                    <div className=" md:top-[5.8rem] font-bold  text-[46px]  text-center flex flex-col md:space-y-6 absolute left-[39%] bottom-[15px]">
                        <h2>
                            Let's build something{" "}
                            <span className="text-primary">worth building</span>
                        </h2>
                    </div>
                </div>
                <div className="container-ack md:grid grid-cols-2 md:px-0 md:pt-0 ">
                    <div className="col-span-1 border mt-10 pt-10 px-8  rounded-xl hover:border-[#FDDA0D] border-gray-300 ">
                        <p
                            style={{ width: "113%" }}
                            className=" md:text-start text-center text-sm md:pr-12 md:top-[5.8rem] font-bold top-10 left-16 text-[46px]  flex flex-col md:space-y-6 "
                        >
                            {
                                "Got questions? Got ideas? Need guidance? We're listening. Just a form away!"
                            }
                        </p>

                        {/* form start */}
                        <form className="md:pt-0 pt-7  ">
                            <div className="space-y-4 md:pr-16 py-8 text-sm">
                                <input
                                    style={{ width: "113%" }}
                                    type="text"
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                                    id="name"
                                    placeholder="Name"
                                    className=" rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                                />
                                <input
                                    style={{ width: "113%" }}
                                    type="text"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    placeholder="Email"
                                    className="rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                                />
                                <input
                                    style={{ width: "113%" }}
                                    type="text"
                                    name="phone"
                                    onChange={(e) => setPhone(e.target.value)}
                                    id="phone"
                                    placeholder="Phone Number"
                                    className="rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                                />
                                <input
                                    style={{ width: "113%" }}
                                    type="text"
                                    name="subject"
                                    onChange={(e) => setSubject(e.target.value)}
                                    id="service"
                                    placeholder="Service you looking for?"
                                    className="rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                                />
                                <textarea
                                    style={{ width: "113%" }}
                                    type="text"
                                    rows={5}
                                    name="message"
                                    onChange={(e) => setMessage(e.target.value)}
                                    id="mesage"
                                    placeholder="Write your message"
                                    className="rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                                />
                                {errorMessage ? (
                                    <p className="text-sm text-red-500">
                                        {errorMessage}
                                    </p>
                                ) : (
                                    ""
                                )}
                                <button
                                    style={{ width: "113%" }}
                                    className="bg-secondary hover:bg-primary text-white px-8 py-2 rounded-md w-full flex justify-center items-center  "
                                    type="submit"
                                    onClick={(e) => {
                                        handleSubmit(e);
                                    }}
                                >
                                    <span className="text-base">
                                        {" "}
                                        {submitText}{" "}
                                    </span>
                                </button>
                            </div>
                        </form>
                        {/* form end */}
                    </div>
                    <div className="grid pl-16 justify-items items-center ">
                        <div className="">
                            <h1 className="font-extrabold text-3xl mb-5">
                                marketingdataconsultinglimited, Across The
                                Global Web
                            </h1>
                            <p>
                                10,000+ pros, 3 yrs of awards. Our experts have
                                tackled everything; from common roadblocks to
                                industry-specific knots, paving the way for
                                award-winning results for 3 years running.
                                marketingdataconsultinglimited clients rave
                                about the clarity, depth, and actionable
                                insights that unlock their full potential.
                                Ready? Let's talk!
                            </p>

                            <Link href="mailto:finance@marketingdataconsultinglimited.uk">
                                <div className="flex space-x-2 mb-3 mt-5">
                                    <MdOutlineMail size={25} />
                                    <p className="text-primary ">
                                        finance@marketingdataconsultinglimited.uk
                                    </p>
                                </div>
                            </Link>
                            <Link href="tel:+447418343383">
                                <div className="flex space-x-2 mb-2 ">
                                    <BiPhoneCall size={25} />
                                    <p className="text-primary mb-2">
                                        +44 7418 343383
                                    </p>
                                </div>
                            </Link>
                            <div className="flex space-x-2 cursor-pointer ">
                                <GrMapLocation
                                    size={25}
                                    className="fill-orange"
                                />
                                <p className="text-primary ">
                                    101 New Cavendish Street, 1st Floor South,
                                    London, United Kingdom, W1W 6XH{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen ? <ThankYouModal /> : ""}
        </>
    );
};

export default FormSection;
