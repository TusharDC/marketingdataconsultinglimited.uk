import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import List from '../components/Testimonial/List';
import Head from 'next/head';
import React from 'react';

const Testimonials = () => {
  return (
    <div>
      <Header />
      <Head>
        <title>Testimonial</title>
      </Head>
      <List />
      <Footer />
    </div>
  );
};

export default Testimonials;
