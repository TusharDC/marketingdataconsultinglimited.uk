import Link from "next/link";
import React from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import ComponentHead from "../Common/ComponentHead";

const Backend = () => {
  const data = [
    {
      id: 1,
      icon: <img src="/assets/images/react-js.png" alt="react-js" width="50" height="50"/>,
      name: "React.js",
      desc: "React is a free and open-source front-end JavaScript library for building user interfaces. ",
      link: "/contact",
      cols: "md:row-span-1",
    },
    {
      id: 2,
      icon: <img src="/assets/images/node.webp" alt="node.js" width="50" height="50"/>,
      name: "Node.js",
      desc: "Node.js is a cross-platform, open-source server environment.",
      link: "/contact",
      cols: "md:row-span-1",
    },
    {
      id: 3,
      icon: <img src="/assets/images/python.png" alt="python" width="50" height="50"/>,
      name: "Python",
      desc: "Python can be used on a server to create web applications.",
      link: "/contact",
      cols: "md:row-span-1",
    },
    {
      id: 4,
      icon: <img src="/assets/images/nextjs.png" alt="Nextjs" width="50" height="50"/>,
      name: "Next.js",
      desc: "Next.js is a React framework that enables several extra features.",
      link: "/contact",
      cols: "md:row-span-1",
    },
    {
      id: 5,
      src: "/assets/images/tech/technologiesone.png",
      cols: "md:row-span-2",
    },
    {
      id: 6,
      icon: <img src="/assets/images/angular.png" alt="angular" width="50" height="50"/>,
      name: "Angular.js",
      desc: "Stay connected with your team and make quick decisions wherever you are. ",
      link: "/contact",
      cols: "md:row-span-1",
    },
    {
      id: 7,
      icon: <img src="/assets/images/java.png" alt="java" width="50" height="50"/>,
      name: "Java",
      desc: "Java is a high-level, class-based, object-oriented programming language.",
      link: "/contact",
      cols: "md:row-span-1",
    },
    {
      id: 8,
      icon: <img src="/assets/images/laravel.png" alt="laravel" width="50" height="50"/>,
      name: "Laravel",
      desc: "Laravel is a web application framework with expressive, elegant syntax.",
      link: "/contact",
      cols: "md:row-span-1",
    },
  ];

  return (
    <div className="container-ack md:px-0 px-5">
      <ComponentHead
        title="Backend"
        sub=" Gain more insight"
        head="Here is a list of some of the technologies we use in our firm"
      />
      

      <div>
        <div className="grid md:grid-cols-3 gap-10 py-16">
          {data.map((item,index) => (
            <>
              <div className={`${item.cols} group `} key={index}>
                {index===4?<div className=" rounded-lg ">
                  <img src={item.src} alt="" />
                </div>:
                <div className="relative text-center py-6 border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-sm hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl md:h-[17rem]">
                  <div className="flex justify-center items-center ">
                    <div className="p-2 ">{item.icon}</div>
                  </div>

                  <h2 className="font-semibold text-lg py-3 text-black text-center">
                    {item.name}
                  </h2>

                  <p className="text-black/50 group-hover:text-black py-2 pb-4  text-center px-3 text-sm ">
                    {item.desc}
                  </p>

                  <div className="pb-5">
                    {/* if link will be used only in one in maping */}
                    <Link href={item.link ? item?.link : ""}>
                      {/* <Link href={item.link}> */}
                      <button className="text-black py-2 text-sm border-b group-hover:border-primary group-hover:border-b-2">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backend;
