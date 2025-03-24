import React, { useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

const Videos = () => {
  const [play, setPlay] = useState(true);
  function handleClick() {
    setPlay(false);
  }
  function handlePause() {
    setPlay(true);
  }

  return (
    <>
      <div className="mt-16 relative video-main w-full cursor-pointer rounded-xl">
        {play ? (
          <div className=" absolute top-[50%] right-[46%]">
            <div className="relative inline-flex">
              <span className="flex h-20 w-20">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white bg-opacity-50 opacity-75 duration-1000"></span>
                <span className="">
                  <img
                    className="relative inline-flex h-20 w-20"
                    alt="play"
                    src="/assets/svg/videoPlay.svg"
                  />
                </span>
              </span>
            </div>
          </div>
        ) : (
          ''
        )}
        <video
          onPlay={handleClick}
          onPause={handlePause}
          className="object-cover max-h-[500px] w-full"
          autoPlay
          muted
          controls
          loop
          src={'/assets/images/marketingdataconsultinglimited.mp4'}
        >
          {/* <source src={"/assets/images/marketingdataconsultinglimitedVideoNew.mp4"} /> */}
        </video>
      </div>
    </>
  );
};

export default Videos;
