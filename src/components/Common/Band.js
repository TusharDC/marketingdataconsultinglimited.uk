import React from "react";

const Band = () => {
  return (
    <div className="mt-16 relative">
      <div className="container-ack md:py-16  py-24 md:px-0 px-4 ">
        <div className="md:text-3xl text-2xl w-[85%] mx-auto capitalize font-bold text-center">
          {" "}
          Supercharge your website creation process for rapid deployment from idea to a live site{" "}
        </div>
        <p className="text-center py-2 w-[85%] mx-auto md:text-base text-sm">
        Accelerate your website creation process like never before with our revolutionary solution. Say goodbye to long development cycles and hello to a lightning-fast journey from idea to live site. Our cutting-edge platform combines simplicity and power, allowing you to effortlessly bring your vision to life in record time.
        </p>
        <div className="pt-4 flex justify-center items-center">
        <button className="button-2 px-12 py-2 rounded-md">
            <div className="eff-2"></div>
            <span className="text-base flex items-center ">
              Connect Now
            </span>
          </button>
        </div>
      </div>
      <div>
        <img
          src="/assets/icons/dotsimg.png"
          alt=""
          className=" absolute top-6 left-16 w-24"
        />
        <img
          src="/assets/icons/dotsimg.png"
          alt=""
          className=" absolute bottom-6 right-16 w-24"
        />
      </div>
    </div>
  );
};

export default Band;
