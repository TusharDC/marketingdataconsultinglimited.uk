// 404.js
import React from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

export default function FourOhFour() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-white bg-fixed bg-cover bg-bottom md:p-0 p-8">
        <div className="md:flex items-center gap-8">
          <div>
            <img
              src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=900&t=st=1690022914~exp=1690023514~hmac=38d1815fc530e48a97155451f35cf832d3aba9b958cb81de5e8ab2f60ff7e552"
              className="w-96"
            />
          </div>
          <div className="flex justify-center flex-col">
            <h5 className="text-secondary font-semibold -mr-10 -mt-3 text-3xl">
              Page not found
            </h5>
            <p className="text-secondary mt-2 mb-6 text-lg">
              we are sorry, but the page you requested was not found
            </p>
            <a
              href="/"
              className="w-fit uppercase text-white hover:bg-primary hover:text-white bg-[#F08883] rounded-full px-8 py-2 flex items-start justify-start font-semibold"
            >
              Go to Home
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
