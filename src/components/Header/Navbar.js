import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaBars, FaCross, FaTimes } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BsChevronDown } from 'react-icons/bs';
import { useRouter } from 'next/router';
const Navbar = () => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  const router = useRouter();

  return (
    <div className="z-20 w-full py-2 text-black duration-300 header header-home ">
      <nav className="navbar ">
        <Link href="/" className="block md:hidden">
          {/* <img src="/assets/images/acklogo.png" alt="image" /> */}
          Marketing Data Consulting Limited
        </Link>
        <div>
          <ul
            className={
              click
                ? 'nav-menu active md:space-y-0 space-y-4 pb-3 '
                : 'nav-menu flex justify-between space-x-4'
            }
          >
            <Link href="/">
              <li
                className={
                  router.pathname == '/'
                    ? 'active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer '
                    : 'group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black'
                }
              >
                Home
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden ">
              <Link href="/">
                <p className="px-10 text-white">Home</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="/about">
              <li
                className={
                  router.pathname == '/about'
                    ? 'active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer '
                    : 'group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer text-black'
                }
              >
                About
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden ">
              <Link href="/about">
                <p className="px-10 text-white">About</p>
              </Link>
            </li>
            {/* for mobile end */}

            <li
              className="group dropdown md:flex hidden nav-item text-sm  font-semibold nav-desk hover:text-black hover:border-b-2 hover:duration-150 border-b-[#edb00a]  rounded-md group relative cursor-pointer text-black
              "
            >
              <p className="group-hover:text-[#edb00a] flex items-center justify-center">
                Services{' '}
                <span>
                  <BsChevronDown
                    className="text-black group-hover:text-[#edb00a]"
                    size={14}
                  />
                </span>
              </p>
              <div className="group-hover:block z-[999] shadow-lg shadow-black/30 dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-[2.1rem] md:-left-10 ">
                <div className="top-0 flex py-5 bg-white">
                  <div className="flex flex-col p-1 text-xs text-left text-black border-r-2 w-80 border-primary">
                    <Link
                      href="/digital-marketing-services-UK"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                    >
                      Digital Marketing Services
                    </Link>

                    <Link
                      href="/social-media-marketing-services-UK"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Social Media Marketing Services
                    </Link>
                    <Link
                      href="/seo-services-UK"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      SEO Services
                    </Link>
                    <Link
                      href="/influencer-marketing-services-UK"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Influencer Marketing Services
                    </Link>
                  </div>
                  <div className="flex flex-col p-1 text-xs text-left text-black ">
                    <Link
                      href="/website-development-services-UK"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Web Development Services
                    </Link>
                    <Link
                      href="/pr-agency-UK"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      PR Agency
                    </Link>
                    <Link
                      href="/media-buying-company-UK"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Media Buying Company
                    </Link>
                    <Link
                      href="/search-engine-marketing-services-UK"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Search Engine Marketing Services
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            {/* for mobile start */}
            <li className="block md:hidden ">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center justify-start w-full px-10 text-white">
                      Services
                      <RiArrowDropDownLine
                        className={
                          open ? 'rotate-180 transform w-8 h-8' : 'w-8 h-8'
                        }
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-10 text-gray-500 ">
                      <div className="top-0 flex flex-col py-5 bg-white">
                        <div className="flex flex-col p-1 text-xs text-left text-black border-r-2 w-80 border-primary">
                          <p className="px-4 py-5 text-base font-bold text-black ">
                            {' '}
                            <Link href="/services">
                              Product Development
                            </Link>{' '}
                          </p>

                          <Link
                            href="/website-development-services-UK"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Web Development Services
                          </Link>
                        </div>

                        <div className="flex flex-col p-1 text-xs text-left text-black w-80 rounded-r-md">
                          <p className="px-4 py-5 text-base font-bold text-black ">
                            {' '}
                            <Link href="/services">Digital Modernization </Link>
                          </p>

                          <Link
                            href="/digital-marketing-services-UK"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                          >
                            Digital Marketing Services
                          </Link>

                          <Link
                            href="/social-media-marketing-services-UK"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Social Media Marketing Services
                          </Link>

                          <Link
                            href="/search-engine-marketing-services-UK"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Search Engine Marketing Services
                          </Link>
                          <Link
                            href="/seo-services-UK"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            SEO Services
                          </Link>
                          <Link
                            href="/pr-agency-UK"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            PR Agency
                          </Link>
                          <Link
                            href="/media-buying-company-UK"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Media Buying Company
                          </Link>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </li>
            {/* for mobile end */}

            <Link href="/experts">
              <li
                className={
                  router.pathname == '/experts'
                    ? 'active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer '
                    : 'group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black'
                }
              >
                Our Experts
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden ">
              <Link href="/experts">
                <p className="px-10 text-white">Our Experts</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="/moments">
              <li
                className={
                  router.pathname == '/moments'
                    ? 'active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer '
                    : 'group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black'
                }
              >
                Moments
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden ">
              <Link href="/moments">
                <p className="px-10 text-white">Moments</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="/career">
              <li
                className={
                  router.pathname == '/career'
                    ? 'active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer '
                    : 'group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black'
                }
              >
                Career
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden ">
              <Link href="/career">
                <p className="px-10 text-white">Career</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="/portfolio">
              <li
                className={
                  router.pathname == '/portfolio'
                    ? 'active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer '
                    : 'group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black'
                }
              >
                Portfolio
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden ">
              <Link href="/portfolio">
                <p className="px-10 text-white">Portfolio</p>
              </Link>
            </li>

            <Link href="/industry-we-serve">
              <li
                className={
                  router.pathname == '/industry-we-serve'
                    ? 'active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer '
                    : 'group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black'
                }
              >
                Industry We Serve
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden ">
              <Link href="/industry-we-serve">
                <p className="px-10 text-white">Industry We Serve</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="/blogs">
              <li
                className={
                  router.pathname == '/blogs'
                    ? 'active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer '
                    : 'group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black'
                }
              >
                Blogs
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden ">
              <Link href="/blogs">
                <p className="px-10 text-white">Blogs</p>
              </Link>
            </li>
            {/* for mobile end */}
          </ul>
        </div>

        <div className="cursor-pointer hamburger" onClick={handleClick}>
          {click ? (
            <>
              <FaTimes
                size={30}
                style={{ color: '#000' }}
                onClick={closeMenu}
              />
              {/* <FaCross size={20} style={{color: "#fff"}}/> */}
            </>
          ) : (
            <FaBars size={30} style={{ color: '#000' }} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
