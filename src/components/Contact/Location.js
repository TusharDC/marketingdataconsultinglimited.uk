import Link from 'next/link';
import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { FaLocationArrow } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const location = [
  {
    id: 1,
    img: '/assets/images/UK.png',
    place: 'London',
    number: '+44 7418 343383',
    mail: 'finance@marketingdataconsultinglimited.uk',
  },
];
const Location = () => {
  return (
    <div className="container-sck bg-[url('../../public/assets/images/locationbackground.png')] background-size:cover background-position:center background-repeat:no-repeat bg-fixed">
      <div
        className="relative my-10 mb-50"

        // style={{ backgroundImage: `url("../../assets/images/locationbackground.png")` }}
      >
        <div className="md:text-[7rem] text-[5rem] tracking-wider text-center textdark font-bold  md:pt-10 ">
          Locations
        </div>
        <div className=" md:top-[5.8rem] font-bold  text-white left-16 text-[46px]  text-center flex flex-col md:space-y-6 absolute left-[39%] bottom-[15px]">
          <h2>
            Global <span className="text-primary">Spread</span>
          </h2>
        </div>
      </div>
      <div className="grid items-center px-5 md:grid-cols-4 container-ack ">
        <div className="grid items-center px-2 py-2 md:col-span-4 md:grid-cols-4 md:py-8 md:px-8">
          {location.map((item, index) => (
            <>
              <div style={{ margin: 7 }}>
                <div
                  className="relative px-6 py-3 mb-5 text-left border bg-gray-50 rounded-xl"
                  key={index}
                >
                  <div className="inline-flex items-center rounded-md justify-left md:mt-8 ">
                    <img
                      src={item.img}
                      alt=""
                      className="w-12 h-12 mx-auto rounded-lg "
                    />
                  </div>
                  <h2 className="py-2 text-lg font-semibold text-left text-black">
                    {item.place}
                  </h2>
                  <div className="grid gap-4 pb-4">
                    <Link href="tel:+918178567042">
                      <div className="flex space-x-2">
                        <BiPhoneCall size={20} />
                        <div className="text-xs">
                          <h2 className="font-semibold">PHONE</h2>
                          <p className="text-primary">{item.number}</p>
                        </div>
                      </div>
                    </Link>
                    {/* <div className="flex space-x-2 cursor-pointer">
                      <FaLocationArrow size={20} />
                      <div className="text-xs">
                        <h2 className="font-semibold">ADDRESS</h2>
                        <p className="p-0 text-primary">
                          {item.address}
                        </p>
                      </div>
                    </div> */}
                    <Link href="mailto:finance@marketingdataconsultinglimited.uk">
                      <div className="flex space-x-2">
                        <MdOutlineMail size={20} />
                        <div className="text-xs">
                          <h2 className="font-semibold">EMAIL</h2>
                          <p className="text-primary">{item.mail}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="grid ">
        <div className="h-full ">
          <img src="/assets/images/maplocation.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Location;
