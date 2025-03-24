import React from "react";

const Process = ({process}) => {
  return (
    <div>
          <div className="grid md:grid-cols-3 py-10 gap-10">
            {process.map((item, index) => (
              <>
                <div className="group " key={index}>
                  <div className="flex">
                    <p className="bg-black rounded-full w-[36px] h-[36px] flex items-center justify-center text-lg text-white ">{item.id}</p>
                  </div>
                  <h2 className="font-semibold text-lg pt-3 text-black ">
                    {item.name}
                  </h2>

                  <p className="text-textcolor py-2 pb-4 text-sm ">
                    {item.desc}
                  </p>

                </div>
              </>
            ))}
          </div>
    </div>
  );
};

export default Process;
