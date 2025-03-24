import React from "react";

const Cards = ({card}) => {

  return (
    <div className="container-ack md:px-0 px-5">
      <div className="md:grid lg:grid-cols-4 md:grid-cols-2 px-5 md:py-20 py-10 gap-8 hidden">
        {card.map((item, index) => (
          <>
            <div className={`${item.cols} `} key={index}>
              <div
                className={`${item.bgcolor} px-3 pb-5 h-full  rounded-2xl shadow-box`}
              >
                <div className={`${item.display}`}>
                  {item.icon}
                </div>
                <div className="relative">
                  <div className={`${item.main}`}>
                    {item.maintitle ? (
                      <div className="tracking-wider text-left textorange font-bold">
                        {item.maintitle}{" "}
                      </div>
                    ) : null}
                  </div>
                  <div className={`${item.main}`}>
                    {item.subtitle ? (
                      <h3 className="text-3xl font-bold absolute md:top-[3.8rem] top-[3rem]">
                        {item.subtitle}{" "}
                      </h3>
                    ) : null}
                    <div className="load-wrapp relative bottom-[-5px]">
                          <div className="load">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                          </div>
                        </div>
                  </div>
                  <h5
                    className={`${item.textcolor} ${item.textsize} ${item.fontbold} py-2 font-semibold `}
                  >
                    {" "}
                    {item.title}
                  </h5>
                </div>
                <p
                  className={`${item.textcolor} text-justify pt-1 leading-relaxed text-sm text-textcolor`}
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
          {card.map((item, index) => (
            <>
              <div className={`${item.cols} `} key={index}>
                <div
                  className={`${item.bgcolor} px-3 pb-5 h-full  rounded-2xl shadow-box my-10`}
                >
                  <div className={`${item.display}`}>
                    {item.icon}
                  </div>
                  <div className="relative">
                    <div className={`${item.main}`}>
                      {item.maintitle ? (
                        <div className="md:text-[6.5rem] text-[4.6rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
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

export default Cards;
