import Link from "next/link";
import React from "react";

const Card = () => {
  const data = [
    {
      id: 1,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
      title: "Healthcare",
      subtitle:
        "The healthcare sector works to lengthen, safeguard, and enhance your quality of life. In order to improve your health, healthcare practitioners collaborate as a network of specialists that provide medical supplies and equipment.",
    },
    {
      id: 2,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
      title: "Educational",
      subtitle:
        "Schools, colleges, institutions, and universities make up the education sector. Students enrolled in elementary through high schools, colleges and universities, and training facilities that offer industrial, professional, and vocational programmes get instruction and training from any educational institution in this field.",
    },
    {
      id: 3,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
      title: "Financial",
      subtitle:
        "Businesses, corporations, banks, and other financial institutions make up the financial sector. By offering financial intermediary services, managing, allocating, and moving financial capital, the financial industry contributes considerably to the economy.",
    },
    {
      id: 4,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
      title: "Real Estate",
      subtitle:
        "The field of real estate encompasses a wide range of property-related activities, including the development, leasing, estimation, marketing, and management of commercial, residential, agricultural, and industrial assets.",
    },
    {
      id: 5,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
      title: "Industrial Automation",
      subtitle:
        "The field of industrial automation mainly deals with the automation of industrial machinery and processes. To do so, procedures for manufacturing, quality control, and material handling are improved using a combination of information technologies, specialised equipment and robots.",
    },
    {
      id: 6,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
      title: "Tour and Travel Industry",
      subtitle:
        "One of the biggest service sectors in the world and one that is becoming more and more significant in the current era is the travel sector. It is focused on the movement of individuals between different locations and the needs they have when traveling.",
    },
  ];
  return (
    <div className="container-ack">
      <div className="md:grid grid-cols-3 gap-8 px-8">
        {data.map((item, e) => (
          <div className="group pt-10 relative " key={e}>
            <div className="bg-[#F6F8F9] border-2 border-[#F6F8F9] text-left pt-12 pb-8 px-6 rounded-md hovertestimonial">
              <div className="h-60">
                <span className="rounded-full w-12 h-12 absolute top-4 text-white flex justify-center items-center bg-black left-[9rem]">
                  {item.id}
                </span>
                <h2 className="font-semibold text-black w-32 mb-3">
                  {item.title}
                </h2>{" "}
                <p className="text-gray-500 text-sm mb-3">{item.subtitle}</p>
                <Link
                  href="/industry"
                  className="text-black font-semibold hover:underline underline-offset-2 decoration-primary text-sm"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
