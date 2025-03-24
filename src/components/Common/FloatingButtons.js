import Link from 'next/link';
import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { IoMdCall, IoMdMail } from 'react-icons/io';

const FloatingButtons = () => {
  return (
    <div className=" fixed flex items-center justify-between py-5 top-60 right-0 z-50">
      <div className="bg-[#F1F1F1] p-3 rounded-l-md shadow-inner">
        <Link href="mailto:finance@marketingdataconsultinglimited.uk">
          <IoMdMail size={24} className="text-black hover:text-primary" />
        </Link>
        <hr className="mt-3 " />
        <Link href="tel:+919910190071">
          <IoMdCall size={24} className="text-black hover:text-primary mt-3" />
        </Link>
        <hr className="mt-3 " />
        <Link href="https://wa.me/919910190071">
          <FiMessageSquare
            size={24}
            className="text-black hover:text-primary mt-3"
          />
        </Link>
      </div>
    </div>
  );
};

export default FloatingButtons;
