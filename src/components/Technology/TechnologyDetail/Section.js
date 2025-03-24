import React from "react";

const Section = () => {
  const card = [
    {
      id: 1,

      para: "Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex. ",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Solutions",
      subtitle: "We Shape the Perfect Solutions ",
    },

    {
      id: 2,
      icon: "/assets/svg/info.svg",
      title: "Project Introduction",
      para: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 3,
      icon: "/assets/svg/info.svg",
      title: "Project Introduction",
      para: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.Donec mi lorem, .",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 4,
      icon: "/assets/svg/info.svg",
      title: "Project Introduction",
      para: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 5,
      icon: "/assets/svg/info.svg",
      title: "Project Introduction",
      para: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 6,
      icon: "/assets/svg/info.svg",
      title: "Project Introduction",
      para: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 7,
      icon: "/assets/svg/info.svg",
      title: "Project Introduction",
      para: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.Donec.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
  ];

  return (
    <div className="container-ack md:px-0 px-5">
      <div className="md:grid lg:grid-cols-4 md:grid-cols-2 px-5 md:pt-20 pt-10 md:pb-10 gap-8 hidden">
        {card.map((item, e) => (
          <>
            <div className={`${item.cols} `} key={e}>
              <div
                className={`${item.bgcolor} px-3 py-5 h-full  rounded-2xl shadow-box`}
              >
                <div className={`${item.display}`}>
                  {item.icon ? <img src={item.icon} className=" " /> : null}
                </div>
                <div className="relative">
                  <div className={`${item.main}`}>
                    {item.maintitle ? (
                      <div className="md:text-[6.5rem] text-[5rem] tracking-wider text-left texttransparent font-bold  md:pt-10">
                        {item.maintitle}{" "}
                      </div>
                    ) : null}
                  </div>
                  <div className={`${item.main}`}>
                    {item.subtitle ? (
                      <div className="text-3xl   font-bold  absolute md:top-[6.7rem]  top-[4rem]">
                        {item.subtitle}{" "}
                      </div>
                    ) : null}
                  </div>
                  <h5
                    className={`${item.textcolor} ${item.textsize} ${item.border} ${item.fontbold}  py-2 font-semibold  `}
                  >
                    {" "}
                    {item.title}
                  </h5>
                </div>
                <p
                  className={`${item.textcolor}  text-justify pt-1 leading-relaxed text-sm text-textcolor`}
                >
                  {item.para}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>

      <div>
        <div className="md:hidden block ">
          {card.map((item, e) => (
            <>
              <div className={`${item.cols} `} key={e}>
                <div>
                  {item.icon ? <img src={item.icon} className=" " /> : null}
                </div>
                <div
                  className={`${item.bgcolor} px-3 py-5 h-full  rounded-2xl shadow-box mt-10`}
                >
                  <div className="relative">
                    <div className={`${item.main}`}>
                      {item.maintitle ? (
                        <div className="md:text-[6.5rem] text-[4.4rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
                          {item.maintitle}{" "}
                        </div>
                      ) : null}
                    </div>
                    <div className={`${item.main}`}>
                      {item.subtitle ? (
                        <div className="absolute md:top-[6.5rem] top-5 md:left-[3rem] text-3xl font-semibold ">
                          {item.subtitle}{" "}
                        </div>
                      ) : null}
                    </div>
                    <h5
                      className={`${item.textcolor} ${item.textsize} ${item.border} ${item.fontbold}  py-2 font-semibold  `}
                    >
                      {" "}
                      {item.title}
                    </h5>
                  </div>
                  <p
                    className={`${item.textcolor}  text-justify pt-1 leading-relaxed text-sm text-textcolor`}
                  >
                    {item.para}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
