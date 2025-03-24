import React from "react";

const Heading = () => {
  return (
    <div className="container-ack md:pt-0 md:pb-0 pt-10 pb-5">
      <div className="relative">
        <div className="md:text-[9.8rem] text-[3.3rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
          Technologies
        </div>
        <div className="absolute md:top-[10rem] top-[2rem] md:left-[31rem] left-[7rem]">
          <div className="text-3xl  text-center font-bold ">Technologies...</div>
        </div>
      </div>
      <p className="text-base text-center w-[80%] mx-auto ">
        Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed
        imperdiet tempor, libero urna semper urna, facilisis vulputate velit
        arcu vitae mi. Donec ac nisi ex.
      </p>
    </div>
  );
};

export default Heading;
