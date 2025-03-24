import React from 'react';
import ComponentHead from './ComponentHead';
import Link from 'next/link';

const ServicePage = ({ services }) => {
  return (
    <>
      <ComponentHead
        title="Services"
        sub="What We Serve "
        head="Creating products that make a difference: marketingdataconsultinglimited   leads the way in ethical and sustainable practices"
      />

      <div className="grid md:grid-cols-3 gap-1 container-ack">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div>
              <div className="group p-6 md:h-[39rem]" key="id">
                <div className="service-content flex flex-col justify-between relative text-center  border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-[0px_0px_20px#f7ce4680] hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl ">
                  <div className=" ">
                    <img src={item.image} alt="" className="  rounded-lg  " />
                  </div>

                  <h2 className="font-semibold text-lg pb-2 pt-5 text-black text-center">
                    {item.name}
                  </h2>

                  <p className="text-black/50 group-hover:text-black pb-4  text-center px-3 text-sm ">
                    {item.desc}
                  </p>

                  <div className="pb-5">
                    <Link href={item.link}>
                      <button className="text-primary font-semibold py-2 text-sm border-b-2 group-hover:border-primary group-hover:border-b-2">
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
  );
};

export default ServicePage;
