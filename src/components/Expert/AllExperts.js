import Link from "next/link";
import React from "react";

const All = () => {
    const advisors = [];
    return (
        <div className="container-ack">
            <div className="grid gap-3 pb-10 md:grid-cols-3">
                {advisors.map((item, index) => (
                    <>
                        <div className="p-6 group" key={index}>
                            <div className="relative text-center py-6 border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-sm hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl ">
                                <div className="inline-flex items-center justify-center rounded-md md:mt-8">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="rounded-[100%] w-20 h-20 mx-auto object-cover"
                                    />
                                </div>

                                <h2 className="py-3 text-lg font-semibold text-center text-black">
                                    {item.name}
                                </h2>
                                <p className="px-3 pb-4 text-sm text-center text-primary">
                                    {item.designation}
                                </p>
                                {/* <p className="px-3 text-sm text-center text-black/50 group-hover:text-black">
                  {item.desc}
                </p> */}
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default All;
