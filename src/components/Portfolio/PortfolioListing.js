import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function PortfolioListing() {
    const filterData = [
        {
            heading: "The standard Lorem Ipsum passage, used since the 1500s",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "eco",
            img: "/assets/images/portfolio/pro-1.1.png",
            img2: "/assets/images/portfolio/pro-1.2.png",
            companyName: "Nishba",
            companyDesc:
                "At Nishba, we aim to create a modern UKn lifestyle among women. Our collections are influenced by modesty which allows women to feel fashionably feminine and unique in their own way.",
        },
        {
            heading: "The standard Lorem Ipsum passage, used since the 1500s",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "web",
            img: "/assets/images/portfolio/pro-2.1.png",
            img2: "/assets/images/portfolio/pro-2.2.png",
            companyName: "Noosh",
            companyDesc:
                "NOOSH is a Persian word that rightly expresses what we stand for - Beauty and being part of something bigger. We as a brand, hope to create an ever growing and evolving family of Noosh women who prioritise style with comfort.",
        },
        {
            heading: "The standard Lorem Ipsum passage, used since the 1500s",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "web",
            img: "/assets/images/portfolio/pro-3.1.png",
            img2: "/assets/images/portfolio/pro-3.2.png",
            companyName: "MSi",
            companyDesc:
                "MSI is a world leader in gaming, content creation, business & productivity and AIoT solutions. Bolstered by its cutting-edge R&D capabilities and customer-driven innovation, MSI has a wide-ranging global presence spanning over 120 countries. Its comprehensive lineup of laptops, graphics cards, monitors, motherboards, desktops, peripherals, servers, IPCs, robotic appliances, and vehicle infotainment and telematics systems are globally acclaimed.",
        },
        {
            heading: "The standard Lorem Ipsum passage, used since the 1500s",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "web",
            img: "/assets/images/portfolio/nestoweb1.png",
            img2: "/assets/images/portfolio/nestoweb2.png",
            companyName: "MSi",
            companyDesc:
                "MSI is a world leader in gaming, content creation, business & productivity and AIoT solutions. Bolstered by its cutting-edge R&D capabilities and customer-driven innovation, MSI has a wide-ranging global presence spanning over 120 countries. Its comprehensive lineup of laptops, graphics cards, monitors, motherboards, desktops, peripherals, servers, IPCs, robotic appliances, and vehicle infotainment and telematics systems are globally acclaimed.",
        },
        {
            heading: "The standard Lorem Ipsum passage, used since the 1500s",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "web",
            img: "/assets/images/portfolio/RG_web1.png",
            img2: "/assets/images/portfolio/RG_web2.png",
            companyName: "MSi",
            companyDesc:
                "MSI is a world leader in gaming, content creation, business & productivity and AIoT solutions. Bolstered by its cutting-edge R&D capabilities and customer-driven innovation, MSI has a wide-ranging global presence spanning over 120 countries. Its comprehensive lineup of laptops, graphics cards, monitors, motherboards, desktops, peripherals, servers, IPCs, robotic appliances, and vehicle infotainment and telematics systems are globally acclaimed.",
        },
        {
            heading: "The standard Lorem Ipsum passage, used since the 1500s",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "web",
            img: "/assets/images/portfolio/xposure_web1.png",
            img2: "/assets/images/portfolio/xposure_web2.png",
            companyName: "MSi",
            companyDesc:
                "MSI is a world leader in gaming, content creation, business & productivity and AIoT solutions. Bolstered by its cutting-edge R&D capabilities and customer-driven innovation, MSI has a wide-ranging global presence spanning over 120 countries. Its comprehensive lineup of laptops, graphics cards, monitors, motherboards, desktops, peripherals, servers, IPCs, robotic appliances, and vehicle infotainment and telematics systems are globally acclaimed.",
        },
        {
            heading: "The standard Lorem Ipsum passage, used since the 1500s",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "web",
            img: "/assets/images/portfolio/paycircle_web1.png",
            img2: "/assets/images/portfolio/paycircle_web2.png",
            companyName: "MSi",
            companyDesc:
                "MSI is a world leader in gaming, content creation, business & productivity and AIoT solutions. Bolstered by its cutting-edge R&D capabilities and customer-driven innovation, MSI has a wide-ranging global presence spanning over 120 countries. Its comprehensive lineup of laptops, graphics cards, monitors, motherboards, desktops, peripherals, servers, IPCs, robotic appliances, and vehicle infotainment and telematics systems are globally acclaimed.",
        },
        {
            heading: "The standard Lorem Ipsum passage, used since the 1500s",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "eco",
            img: "/assets/images/portfolio/pro-4.1.png",
            img2: "/assets/images/portfolio/pro-4.2.png",
            companyName: "Nature Nushkha",
            companyDesc:
                "At Nature Nuskha, nature is the only truth and the key to solving all hair problems. Through our research, we have arrived at exceptional and effective formulas that nurture your hair back to health.",
        },
        {
            heading: "The standard Lorem Ipsum passage, used since the 1500s",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "eco",
            img: "/assets/images/portfolio/pro-5.1.png",
            img2: "/assets/images/portfolio/pro-5.2.png",
            companyName: "Joveo",
            companyDesc:
                "Our goal was to build a platform that would use data to deliver the right job to the right person anywhere in the world. That’s when we found our MOJO (Machine Optimized Jobs), a platform that leverages data science and machine learning to shatter the limitations of traditional job advertising.",
        },
        {
            heading: "The standard Lorem Ipsum passage, used since the 1500s",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "soft",
            img: "/assets/images/portfolio/pro-6.1.png",
            img2: "/assets/images/portfolio/pro-6.2.png",
            companyName: "Yellow Verandah",
            companyDesc:
                "Yellow Verandah is a bespoke luxury homeware boutique, creating and curating Handmade, Environment Conscious, Natural, Sustainable, Cruelty Free, Zero Carbon Footprint Home Decor & Lifestyle products.We work with a bunch of talented local Artisans, Craftsmen, Self Help Groups, Craft Communities and Design Partners across UK.",
        },
        {
            heading: "The standard Lorem Ipsum passage, used since the 1500s",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "soft",
            img: "/assets/images/portfolio/pro-7.1.png",
            img2: "/assets/images/portfolio/pro-7.2.png",
            companyName: "The Citizenry",
            companyDesc:
                "Our personal spaces deserve designs with a soul, a story, and a purpose. It's why we travel the world to develop our exclusive collections of home goods. By personally traveling to each country and using only local materials, we establish sustainable relationships with our artisans. From there, we sell directly to you online. This is how we’re able to offer handmade goods, crafted with the highest quality materials, at more reasonable prices than traditional luxury boutiques.",
        },
        {
            heading: "The standard Lorem Ipsum passage, used since the 1500s",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "soft",
            img: "/assets/images/portfolio/pro-8.1.png",
            img2: "/assets/images/portfolio/pro-8.2.png",
            companyName: "Glide",
            companyDesc:
                "Glide is a no-code app development tool that lets you build custom apps for workplace use with simple drag-and-drop. There’s no need to learn complex development languages or go to an expensive design school — Glide offers everything you need to create powerful apps for work in a matter of minutes.",
        },
        {
            heading: "The standard Lorem Ipsum passage, used since the 1500s",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "mobileApp",
            img: "/assets/images/portfolio/Nesto1.png",
            img2: "/assets/images/portfolio/Nesto2.png",
            companyName: "Glide",
            companyDesc:
                "Glide is a no-code app development tool that lets you build custom apps for workplace use with simple drag-and-drop. There’s no need to learn complex development languages or go to an expensive design school — Glide offers everything you need to create powerful apps for work in a matter of minutes.",
        },
        {
            heading: "The standard Lorem Ipsum passage, used since the 1500s",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "mobileApp",
            img: "/assets/images/portfolio/PG1.png",
            img2: "/assets/images/portfolio/PG2.png",
            companyName: "Glide",
            companyDesc:
                "Glide is a no-code app development tool that lets you build custom apps for workplace use with simple drag-and-drop. There’s no need to learn complex development languages or go to an expensive design school — Glide offers everything you need to create powerful apps for work in a matter of minutes.",
        },
        {
            heading: "The standard Lorem Ipsum passage, used since the 1500s",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "mobileApp",
            img: "/assets/images/portfolio/Konnect1.png",
            img2: "/assets/images/portfolio/Konnect2.png",
            companyName: "Glide",
            companyDesc:
                "Glide is a no-code app development tool that lets you build custom apps for workplace use with simple drag-and-drop. There’s no need to learn complex development languages or go to an expensive design school — Glide offers everything you need to create powerful apps for work in a matter of minutes.",
        },
        {
            heading: "The standard Lorem Ipsum passage, used since the 1500s",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "mobileApp",
            img: "/assets/images/portfolio/Paycircle1.png",
            img2: "/assets/images/portfolio/Paycircle2.png",
            companyName: "Glide",
            companyDesc:
                "Glide is a no-code app development tool that lets you build custom apps for workplace use with simple drag-and-drop. There’s no need to learn complex development languages or go to an expensive design school — Glide offers everything you need to create powerful apps for work in a matter of minutes.",
        },
    ];

    const [items, setItems] = useState(filterData);
    const filterItem = (categItem) => {
        const updatedItems = filterData.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItems(updatedItems);
    };
    return (
        <>
            <div className="container-ack md:px-0 px-5">
                <div className="grid md:grid-cols-5 md:gap-5 cursor-pointer w-[80%] mx-auto border-2 border-secondary/10 p-2 rounded-md md:mt-10 mt-12">
                    <div>
                        <div
                            className="text-center py-2 rounded-md bg-secondary text-white border-2 text-sm "
                            onClick={() => setItems(filterData)}
                        >
                            All
                        </div>
                    </div>
                    <div>
                        <div
                            className={`text-center py-2 rounded-md bg-secondary text-white border-2 text-sm
            ${filterItem === "web" ? "bg-slate-400" : ""}`}
                            onClick={() => filterItem("web")}
                        >
                            Website
                        </div>
                    </div>
                    <div>
                        <div
                            className="text-center py-2 rounded-md bg-secondary text-white border-2 text-sm"
                            onClick={() => filterItem("eco")}
                        >
                            Ecomerce
                        </div>
                    </div>
                    <div>
                        <div
                            className="text-center py-2 rounded-md bg-secondary text-white border-2 text-sm"
                            onClick={() => filterItem("soft")}
                        >
                            Mobile App
                        </div>
                    </div>
                    <div>
                        <div
                            className="text-center py-2 rounded-md bg-secondary text-white border-2 text-sm"
                            onClick={() => filterItem("soft")}
                        >
                            Digital Marketing
                        </div>
                    </div>
                </div>

                {items?.map((item) => {
                    return (
                        <>
                            <div className="pt-16">
                                <div className="container-ack gradientbackgroundone px-12 pt-12">
                                    <div className="grid grid-cols-3 justify-between ">
                                        <div className="col-span-2">
                                            <h2 className="text-xl font-semibold ">
                                                {item.companyName}
                                            </h2>
                                            <p style={{ width: 610 }}>
                                                {item.companyDesc}
                                            </p>
                                        </div>
                                        <div>
                                            <div className="flex justify-end pb-10 col-span-1">
                                                <Link href="/contact">
                                                    <button className=" button-2 px-7 py-2 rounded-md">
                                                        <div className="eff-2"></div>
                                                        <span className="text-base flex items-center ">
                                                            {" "}
                                                            Enquiry Now
                                                            <MdKeyboardArrowRight className=" text-base" />
                                                        </span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-4 py-5">
                                        <div className="col-span-6">
                                            <img
                                                src={item.img2}
                                                className="rounded-md h-100 w-full"
                                            />
                                        </div>
                                        <div className="col-span-6">
                                            <img
                                                src={item.img}
                                                className="rounded-md h-100 w-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default PortfolioListing;
