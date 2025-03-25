import Link from "next/link";
import React from "react";
import { IoMdCall, IoMdMail } from "react-icons/io";

const HeaderLogo = () => {
    return (
        <div className="items-center hidden grid-cols-9 gap-4 pt-3 md:grid">
            <div className="flex items-center col-span-4 gap-20">
                <div className="">
                    <Link href="/">
                        <div>
                            <p className="text-2xl font-bold">
                                Marketing Data Consulting Limited
                            </p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-end col-span-5 space-x-4">
                <div className="grid items-center grid-cols-2 gap-2">
                    <Link href="mailto:finance@marketingdataconsultinglimited.uk">
                        <div className="flex items-center justify-end space-x-2 group">
                            <IoMdMail
                                size={20}
                                className="text-black group-hover:text-primary"
                            />
                            <h2 className="text-[12px] group-hover:text-primary ">
                                finance@marketingdataconsultinglimited.uk
                            </h2>
                        </div>
                    </Link>
                    <Link href="tel:+447418343383">
                        <div className="flex items-center justify-end space-x-2 group">
                            <IoMdCall
                                size={20}
                                className="text-black group-hover:text-primary"
                            />
                            <h2 className="text-[12px] group-hover:text-primary">
                                +44 7418 343383
                            </h2>
                        </div>
                    </Link>
                </div>

                <div className="flex justify-end ">
                    <Link href="/contact">
                        <button className="px-5 py-2 rounded-md button-2">
                            <div className="eff-2"></div>
                            <span className="flex items-center text-base ">
                                {" "}
                                Contact
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderLogo;
