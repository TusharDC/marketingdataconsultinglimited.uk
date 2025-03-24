import React from "react";
import ComponentHead from "../Common/ComponentHead";

const  Section = () => {

    const productData = [
        {
          id: 1,
          name: "Lorem Ipsum dolor",
          desc: "Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.",
        },
        {
          id: 2,
          name: "Lorem Ipsum dolor",
          desc: "Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.",
        },
        {
          id: 3,
          name: "Lorem Ipsum dolor",
          desc: "Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.",
        },
        {
          id: 4,
          name: "Lorem Ipsum dolor",
          desc: "Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.",
        },
        {
          id: 5,
          name: "Lorem Ipsum dolor",
          desc: "Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.",
        },
        {
          id: 6,
          name: "Lorem Ipsum dolor",
          desc: "Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.",
        },
      ];
      
  return (
    <div className="container-ack md:px-0 px-5 md:pt-0 pt-[32rem] ">
      <ComponentHead
        title="Lorem"
        sub="Lorem Ipsum"
        head="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />

      <div className="grid md:grid-cols-3 gap-7 py-12">
        {productData.map((item, index) => (
          <>
          { index%2 ?
            <div className="group " key={index}>
             <img src="/assets/images/aboutusimg1.png" className="h-[16rem] object-cover w-full" alt="" />
            </div> :
           <div className="group ">
           <div className="relative h-[16rem] text-center px-6  py-12 border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-sm hover:bg-[#F6F8F9]/40 hover:border rounded-xl">
           
             <h2 className="font-semibold text-lg py-3 text-black text-center">
               {item.name}
             </h2>

             <p className="text-black/50 group-hover:text-black py-2 pb-4  text-center px-3 text-sm ">
               {item.desc}
             </p>

            
           </div>
         </div>
}
          </>
        ))}
      </div>

    </div>
  );
};

export default Section;
