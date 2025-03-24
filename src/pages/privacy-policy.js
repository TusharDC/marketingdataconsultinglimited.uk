import React from 'react';
import Heading from '../components/Common/Heading';
import Header from '../components/Common/Header';
import Head from 'next/head';
import Footer from '../components/Common/Footer';
const PrivacyPolicy = () => {
  return (
    <>
      <div>
        <Head>
          <title> Privacy Policy </title>
        </Head>
        <Header />
        <Heading titletext="Policy" title="Privacy Policy" />

        <div className="md:mt-24">
          <p className=" py-2 w-[85%] mx-auto md:text-base text-sm">
            marketingdataconsultinglimited values and is committed to
            safeguarding your privacy. This Privacy Policy regulates how we
            collect, process, and use data. By utilising our services, you agree
            to the data practices outlined in this statement.
          </p>
        </div>

        <div className="md:mt-10">
          <div className="text-lg w-[85%] mx-auto capitalize font-bold ">
            {' '}
            Collection, Use, and Sharing of Information:
          </div>
          <p className=" py-2 w-[85%] mx-auto md:text-base text-sm">
            We only access and collect information that you freely provide to
            us. This information will not be sold or rented to anybody.
          </p>
        </div>
        <div className="md:mt-10">
          <div className="text-lg w-[85%] mx-auto capitalize font-bold ">
            {' '}
            Security:
          </div>
          <p className=" py-2 w-[85%] mx-auto md:text-base text-sm">
            We make efforts to keep your information safe. When you enter
            sensitive information through the website, it is secure both online
            and offline.
          </p>
        </div>
        <div className="md:mt-10">
          <div className="text-lg w-[85%] mx-auto capitalize font-bold ">
            {' '}
            Cookies:
          </div>
          <p className=" py-2 w-[85%] mx-auto md:text-base text-sm">
            On this site, &quot;cookies&quot; are used. A cookie is a piece of
            data that is kept on the hard disc of a site visitor to help us
            optimise your access to our site to recognise repeat visitors.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
