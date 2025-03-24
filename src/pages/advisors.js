import List from '../components/Advisors/List';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import Heading from '../components/Common/Heading';
import Head from 'next/head';
import React from 'react';

const Advisors = () => {
  return (
    <div>
      {' '}
      <Header />
      <Head>
        <title>Advisors</title>
      </Head>
      <div
        className="pb-10 bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Heading
          titletext="Advisors"
          title="Our Advisors"
          subtext="Our team of Industry Experts has the skills and experience to turn an idea into a successful product that exceeds expectations"
        />
      </div>
      <List />
      <Footer />
    </div>
  );
};

export default Advisors;
