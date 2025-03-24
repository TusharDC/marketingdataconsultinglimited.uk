import React from "react";

const List = () => {
    const clientsData = [];

    return (
        <div className="pt-10 pb-5 container-ack md:pt-0 md:pb-0">
            <div
                className="bg-no-repeat "
                style={{
                    backgroundImage:
                        'url("/assets/images/backgroundtestimonial.png ")',
                }}
            >
                <div className="">
                    <div className="relative">
                        <div className="md:text-[10rem] text-[3rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
                            Testimonial
                        </div>
                        <div className="absolute md:top-[11.5rem] top-[4rem] inset-x-0 flex justify-center">
                            <div className="max-w-xl text-3xl font-bold text-center">
                                Testimonial
                            </div>
                        </div>
                    </div>
                    <p className="text-base text-gray-400 text-center w-[80%] mx-auto ">
                        Our clients aren't just satisfied, they're empowered.
                        Hear how:
                    </p>
                </div>
                <div>
                    <div className="grid pt-10 md:grid-cols-3 gap-7">
                        {clientsData.map((item, e) => (
                            <>
                                <div className="relative py-10 group" key={e}>
                                    <div className="hover:bg-[#F6F8F9] border-2 border-[#F6F8F9] text-left mx-3 py-8 rounded-md  hovertestimonial">
                                        <div className="flex flex-col items-center justify-left">
                                            <img
                                                src={item.image}
                                                alt=" "
                                                className="  rounded-lg w-[25%] absolute top-0  left-[9rem]"
                                            />
                                            <div className="px-4 pt-6">
                                                <div className="pt-4 text-center text-secondary">
                                                    {item.para}
                                                </div>
                                                <div className="pt-3 text-xl font-semibold text-center text-black">
                                                    {item.text}
                                                </div>
                                                <div className="text-sm text-center text-black">
                                                    {item.designation}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>

                    {/* <div className="flex items-center justify-center md:pb-10">
            <button className="px-12 py-2 bg-white border-2 rounded-md border-secondary text-secondary hover:bg-secondary hover:text-white">
              View All
            </button>
          </div> */}
                </div>
            </div>
        </div>
    );
};

export default List;
