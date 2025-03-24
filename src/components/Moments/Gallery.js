import React from "react";

const Gallery = () => {
  return (
    <div className="container-ack">
      <div className="md:grid grid-cols-3 gap-8 md:space-y-0 space-y-4 md:px-0 px-5 pb-10">
        <div className="shadow-lg  rounded-lg">
          <img src="/assets/images/memories/mom15.png" />
        </div>
        <div className="flex flex-col justify-between row-span-2">
          <img
            src="/assets/images/memories/mom12.png"
            className="shadow-lg rounded-lg"
          />
          <img
            src="/assets/images/memories/mom14.png"
            className="h-56 w-full object-cover shadow-lg rounded-lg"
          />
        </div>
        <div className="shadow-lg rounded-lg">
          <img src="/assets/images/memories/mom4.png" />
        </div>
        <div className="shadow-lg rounded-lg">
          <img src="/assets/images/memories/mom13.png" />
        </div>
        <div className="shadow-lg rounded-lg">
          <img src="/assets/images/memories/mom3.png" />
        </div>
        <div className="shadow-lg rounded-lg col-span-2">
          <img src="/assets/images/memories/mom9.png" />
        </div>

        <div className="shadow-lg rounded-lg">
          <img src="/assets/images/memories/mom5.png" />
        </div>
        <div className="shadow-lg rounded-lg row-span-2">
          <img src="/assets/images/memories/mom10.png" className="h-full" />
        </div>
        <div className="flex flex-col justify-between row-span-2 space-y-4">
          <img
            src="/assets/images/memories/mom8.png"
            className="shadow-lg rounded-lg h-96"
          />
          <img
            src="/assets/images/memories/mom7.png"
            className="h-40 w-full object-cover shadow-lg rounded-lg"
          />
        </div>
        <div className="shadow-lg rounded-lg row-span-2">
          <img src="/assets/images/memories/mom6.png" className="h-full" />
        </div>
      </div>
     
    </div>
  );
};

export default Gallery;
