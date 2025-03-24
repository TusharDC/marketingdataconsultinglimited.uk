import React from 'react';
import Heading from '../components/Common/Heading';
import Header from '../components/Common/Header';
import Head from 'next/head';
import Footer from '../components/Common/Footer';

const CancellationAndRefundPolicy = () => {
  return (
    <>
      <div>
        <Head>
          <title> Cancellation And Refund Policy </title>
        </Head>
        <Header />
        <Heading titletext="Policy" title="Cancellation And Refund Policy" />
        <div className="md:mt-24">
          <div className="text-lg w-[85%] mx-auto capitalize font-bold  ">
            {' '}
            Cancellation:
          </div>
          <p className=" py-2 w-[85%] mx-auto md:text-base text-sm">
            Our organisation understands the need for flexibility. If a
            cancellation is necessary, clients are asked to notify
            marketingdataconsultinglimited immediately. However,
            marketingdataconsultinglimited maintains the right to keep a portion
            of the advance payment for administrative purposes.
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
      </div>
      <Footer />
    </>
  );
};

export default CancellationAndRefundPolicy;
