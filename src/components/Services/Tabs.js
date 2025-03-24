import Link from "next/link";
import React from "react";

const tabs = [
    {
        id: 1,
        text: "Product Development",
    },
    {
        id: 2,
        text: "Digital Modernization",
    },
];

const serviceData = [
    {
        id: 2,
        image: "/assets/images/service/web-development.png",
        name: "Web Development",
        desc: "Your Vision, Our Expertise: Build powerful web applications/web apps, from custom web design to robust backend development. We've helped 30+ startups soar and 150+ global brands evolve. Let's discuss your web ambitions.",
        link: "/website-development-services-UK",
    },
];

const DigitalModernization = [
    {
        id: 1,
        image: "/assets/images/service/DigitalMarketingStrategy.png",
        name: "Digital Marketing Strategy",
        desc: "Unleash Digital Profits: Stop guessing and start growing. We build data-driven marketing plans that align with your goals, engage your audience, and drive profitable results. Get your Free Marketing Strategy Blueprint now.",
        link: "/digital-marketing-services-UK",
    },
    {
        id: 2,
        image: "/assets/images/service/SearchEngineOptimization.png",
        name: "Search Engine Optimization (SEO)",
        desc: "Own the Search Engine Throne: Climb up to the charts of Google’s SERPs and attract organic traffic. Our SEO experts optimize your website and content, so customers can find you first. Boost Your Organic Traffic Today.",
        link: "/seo-services-UK",
    },
    {
        id: 3,
        image: "/assets/images/service/SearchEngineMarketing.png",
        name: "Search Engine Marketing (SEM)",
        desc: "Turn Pay into Results: Get real ROI from online ads. We manage your SEM campaigns to bring in qualified leads at the right price. Maximize Your Ad Spend with Expert SEM.",
        link: "/search-engine-marketing-services-UK",
    },
    {
        id: 4,
        image: "/assets/images/service/SocialMediaMarketing.png",
        name: "Social Media Marketing (SMM)",
        desc: "Begin Conversations, Supercharge Growth: Build a buzzing online community. We create engaging content and manage your social media presence to win hearts and convert fans. Get More Followers & Brand Advocates.",
        link: "/social-media-marketing-services-UK",
    },
    {
        id: 5,
        image: "/assets/images/service/PublicRelation.png",
        name: "Public Relations (PR)",
        desc: "Write Your Story, Value Your Voice: Become a media darling. We build positive media relationships and craft compelling narratives that elevate your brand image. Increase Your Brand Reputation & Trust.",
        link: "/pr-agency-UK",
    },
    {
        id: 6,
        image: "/assets/images/service/MediaBuyingandPlanning.png",
        name: "Media Buying and Planning",
        desc: "Reach the Right Audience, Every Time: Spend smarter, not harder. We target your ideal audience across platforms, track ad performance, and optimize your budget for maximum impact. Reach Your Dream Customers Efficiently.",
        link: "/media-buying-company-UK",
    },
];
const Tabs = () => {
    const [select, setSelect] = React.useState(2);

    return (
        <div className="px-5 container-ack md:px-0">
            <div>
                <div className="flex justify-center space-x-2 cursor-pointer md:space-x-3">
                    {tabs.map((item, index) => (
                        <div
                            onClick={() => setSelect(item.id)}
                            className="py-10 group"
                            key={index}
                        >
                            <div
                                className={` md:px-12 px-3 py-2 rounded-md ${
                                    select === item.id
                                        ? "bg-secondary text-white border-2 "
                                        : "   border-2 border-black/90"
                                }`}
                            >
                                {item.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="">
                {select === 1 ? (
                    <>
                        <div className="grid gap-1 md:grid-cols-3">
                            {serviceData.map((item, index) => (
                                <div className="service-card" key={index}>
                                    <div>
                                        <div
                                            className="group p-6 md:h-[33rem]"
                                            key="id"
                                        >
                                            <div className="service-content relative text-center  flex flex-col justify-between  border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-[0px_0px_20px#f7ce4680] hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl md:h-[26rem]">
                                                <div className="">
                                                    <img
                                                        src={item.image}
                                                        alt=""
                                                        className="rounded-lg "
                                                    />
                                                </div>

                                                <h2 className="pt-5 pb-2 text-lg font-semibold text-center text-black">
                                                    {item.name}
                                                </h2>

                                                <p className="px-3 pb-4 text-sm text-center text-black/50 group-hover:text-black ">
                                                    {item.desc}
                                                </p>

                                                <div className="pb-5">
                                                    <Link href={item.link}>
                                                        <button className="py-2 text-sm font-semibold border-b-2 text-primary group-hover:border-primary group-hover:border-b-2">
                                                            Know More
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="grid gap-1 md:grid-cols-3 ">
                            {DigitalModernization.map((item, index) => (
                                <div className="service-card" key={index}>
                                    <div>
                                        <div
                                            className="group p-6 md:h-[39rem]"
                                            key="id"
                                        >
                                            <div className="service-content flex flex-col justify-between relative text-center  border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-[0px_0px_20px#f7ce4680] hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl ">
                                                <div className="">
                                                    <img
                                                        src={item.image}
                                                        alt=""
                                                        className="rounded-lg "
                                                    />
                                                </div>

                                                <h2 className="pt-5 pb-2 text-lg font-semibold text-center text-black">
                                                    {item.name}
                                                </h2>

                                                <p className="px-3 pb-4 text-sm text-center text-black/50 group-hover:text-black ">
                                                    {item.desc}
                                                </p>

                                                <div className="pb-5">
                                                    <Link href={item.link}>
                                                        <button className="py-2 text-sm font-semibold border-b-2 text-primary group-hover:border-primary group-hover:border-b-2">
                                                            Know More
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Tabs;
