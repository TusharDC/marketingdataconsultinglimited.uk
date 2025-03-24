import React from "react";

const Technology = ({tech}) => {

  return (

    <div className="grid md:grid-cols-4 pb-20 gap-6">
    {tech.map((item, e) => (
        <>
            <div key={e} className="group tech flex justify-start items-center border rounded-md p-3 gap-3">
                <img src={item.img} alt="" className='w-[34px]' />
                <div>
                    <span className="font-semibold text-lg pt-3 text-black ">
                        {item.name}
                    </span>
                </div>
               
            </div>
     
        </>
    ))}
</div>
  );
};

export default Technology;
