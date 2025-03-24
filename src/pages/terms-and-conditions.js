import React from 'react';
import Heading from '../components/Common/Heading';
import Header from '../components/Common/Header';
import Head from 'next/head';
import Footer from '../components/Common/Footer';
const TermsAndConditions = () => {
  return (
    <>
      <div>
        <Head>
          <title> Terms & Conditions </title>
        </Head>
        <Header />
        <Heading titletext="Terms" title="Terms And Conditions" />

        <div className="md:mt-24">
          <div className="text-lg w-[85%] mx-auto capitalize font-bold  ">
            {' '}
            Conditions of Use:
          </div>
          <p className=" py-2 w-[85%] mx-auto md:text-base text-sm">
            Welcome to marketingdataconsultinglimited . These terms and
            conditions define the rules and regulations for using our website
            and marketingdataconsultinglimited &#39; services. We assume you
            accept these terms and conditions in full by using this website and
            utilising our services. If you are unwilling to comply with any of
            the terms and conditions on this page, please refrain from using our
            website or services.
          </p>
        </div>

        <div className="md:mt-10">
          <div className="text-lg w-[85%] mx-auto capitalize font-bold ">
            {' '}
            Refund Policy:
          </div>
          <p className=" py-2 w-[85%] mx-auto md:text-base text-sm">
            marketingdataconsultinglimited is committed to providing
            high-quality services and does not offer refunds. Clients are
            eligible for a refund based on the amount of the supplied service in
            the unusual event of dissatisfaction with our service
          </p>
        </div>
        <div className="md:mt-10">
          <div className="text-lg w-[85%] mx-auto capitalize font-bold ">
            {' '}
            Rights to Intellectual Property:
          </div>
          <p className=" py-2 w-[85%] mx-auto md:text-base text-sm">
            marketingdataconsultinglimited and/or its licensors hold the
            intellectual property rights to all materials on this website unless
            otherwise specified. All rights to intellectual property are
            unaffected.
          </p>
        </div>
        <div className="md:mt-10">
          <div className="text-lg w-[85%] mx-auto capitalize font-bold ">
            {' '}
            You are not allowed to:
          </div>
          <p className=" py-2 w-[85%] mx-auto md:text-base text-sm">
            Republishing material from this website without proper
            acknowledgement
          </p>
          <p className=" py-2 w-[85%] mx-auto md:text-base text-sm">
            Sell, rent, or sublicense website content.
          </p>
          <p className=" py-2 w-[85%] mx-auto md:text-base text-sm">
            Replicate, copy or reproduce material from this website.
          </p>
        </div>
        <div className="md:mt-10">
          <div className="text-lg w-[85%] mx-auto capitalize font-bold ">
            {' '}
            Content Ownership:
          </div>
          <p className=" py-2 w-[85%] mx-auto md:text-base text-sm">
            We are not liable for any information that is published on your
            website or when you use our services. You undertake to compensate
            and defend us from any and all claims arising from your website or
            our services.
          </p>
        </div>
        <div className="md:mt-10">
          <div className="text-lg w-[85%] mx-auto capitalize font-bold ">
            {' '}
            Rights Reservation:
          </div>
          <p className=" py-2 w-[85%] mx-auto md:text-base text-sm">
            We have the right to request that you delete all links to our
            website or services, or any specific connection. You agree to remove
            all connections to our website immediately upon request.
          </p>
        </div>
        <div className="md:mt-10">
          <div className="text-lg w-[85%] mx-auto capitalize font-bold ">
            {' '}
            Disclaimer:
          </div>
          <p className=" py-2 w-[85%] mx-auto md:text-base text-sm">
            We disclaim any visualisations, assurances, and terms pertaining to
            our website including the execution of our services to the fullest
            extent permissible by applicable law. We are not responsible for,
            and shall not be held accountable for, any direct, indirect,
            special, or consequential loss or damage resulting from the use of
            our website or services in any way.
          </p>
        </div>
        <div className="md:mt-10">
          <div className="text-lg w-[85%] mx-auto capitalize font-bold ">
            {' '}
            Modifications to Terms and Conditions:
          </div>
          <p className=" py-2 w-[85%] mx-auto md:text-base text-sm">
            We retain the right to change these conditions of use without notice
            at any moment. You agree to be governed by the most recent edition
            of these rules and regulations whenever you access this website or
            our services.
          </p>
        </div>
        <div className="md:mt-10">
          <div className="text-lg w-[85%] mx-auto capitalize font-bold ">
            {' '}
            The Rule of Law:
          </div>
          <p className=" py-2 w-[85%] mx-auto md:text-base text-sm">
            These terms and conditions are governed and construed in accordance
            with the laws of UK, and you voluntarily submit to the exclusive
            jurisdiction of the aforementioned courts.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
