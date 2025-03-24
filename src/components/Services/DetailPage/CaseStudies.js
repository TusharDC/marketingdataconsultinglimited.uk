import React from 'react'

const CaseStudies = ({casestudies}) => {
  return (
 

<div className="container-ack">
      <div className="grid md:grid-cols-3 gap-8  pt-6">
        {casestudies.map((item, index) => (
          <>
            <div className="group " key={index}>
              <div className="relative text-center  border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-sm hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl md:h-[24rem]">
                <div className="inline-flex justify-center items-center rounded-md ">
                  <img
                    src={item.image}
                    alt=""
                    className="  rounded-lg mx-auto "
                  />
                </div>

                <h2 className="font-semibold text-lg py-3 text-black text-center">
                  {item.name}
                </h2>

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-justify tracking-tighter  px-5 text-sm ">
                  {item.desc}
                </p>

              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default CaseStudies