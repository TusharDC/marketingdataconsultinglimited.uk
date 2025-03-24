import React from "react";

const Tabs = () => {
  const tabs = [
    {
      id: 1,
      text: "Our Mission",
    },

    {
      id: 2,
      text: "Our Vision",
    },
    {
      id: 3,
      text: "Our History",
    },
  ];

  const [select, setSelect] = React.useState(1);

  return (
    <div className="container-ack md:px-0 px-5">
      <div className="flex flex-col">
        <div className="grid grid-cols-3 cursor-pointer">
          {tabs.map((item,e) => (
            <div
              onClick={() => setSelect(item.id)}
              className="group py-10"
              key={e}
            >
              {" "}
              <div
                className={` px-6 py-2 font-bold w-full text-center ${
                  select == item.id
                    ? "border-primary text-secondary border-t-4 "
                    : "   border-secondary text-secondary border-t-4"
                }`}
              >
                {item.text}
              </div>
            </div>
          ))}

        </div>
        <div className="">
        {select == 1 ? (
          <>
            <div className="">
              <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
                Lorem ipsum dolor sit amet consectetur. Sapien porttitor non
                ultrices id enim lectus sagittis viverra interdum.Lorem ipsum
                dolor sit amet consectetur. Sapien porttitor non ultrices id
                enim lectus sagittis viverra interdum.
              </div>
              <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
                Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
                pellentesque tempor cursus cursus amet odio.
              </div>
            </div>
          </>
        ) : select == 2 ? (
          <>
            <div className="">
              <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
                Lorem ipsum dolor sit amet consectetur. Sapien porttitor non
                ultrices id enim lectus sagittis viverra interdum.Lorem ipsum
                dolor sit amet consectetur. Sapien porttitor non ultrices id
                enim lectus sagittis viverra interdum. porttitor non ultrices id
                enim lectus sagittis viverra interdum.
              </div>
              <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
                Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
                pellentesque tempor cursus cursus amet odio.Fermentum tortor et
                arcu pellentesque tempor cursus cursus amet odio.
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="">
              <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
                Lorem ipsum dolor sit amet consectetur. Sapien porttitor non
                ultrices id enim lectus sagittis viverra interdum.Lorem ipsum
                dolor sit amet consectetur. Sapien porttitor non ultrices id
                enim lectus sagittis viverra interdum. porttitor non ultrices id
                enim lectus sagittis viverra interdum.
              </div>
              <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
                Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
                pellentesque tempor cursus cursus amet odio.Fermentum tortor et
                arcu pellentesque tempor cursus cursus amet odio.
              </div>
            </div>
          </>
        )}
      </div>
      </div>
     
    </div>
  );
};

export default Tabs;
