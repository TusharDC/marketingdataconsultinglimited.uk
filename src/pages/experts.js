import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import Heading from '../components/Common/Heading';
import AllExperts from '../components/Expert/AllExperts';
import Team from '../components/Team/Team';
import Head from 'next/head';
import React from 'react';

const Experts = () => {
  return (
    <div>
      <Head>
        <title> Our Experts | marketingdataconsultinglimited</title>
        <meta
          name="description"
          content="Our Experts passionate about gziving results and
takes pride in delivering solutions that exceed expectations."
        />
      </Head>
      <Header />
      <div
        className="pb-10 bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Heading
          titletext="Experts"
          title="Our Experts "
          subtext="Our team is passionate about  and takes pride ingiving result delivering solutions that exceed expectations. Whether we are working on a new app, a piece of hardware, or a complex software system, we approach each project with the same level of dedication and attention to detail"
        />
      </div>
      <AllExperts />
      {/* <Team /> */}
      <Footer />
    </div>
  );
};

export default Experts;
