import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import Banner from '../components/Moments/Banner';
import Gallery from '../components/Moments/Gallery';
import React from 'react';
import Head from 'next/head';
const moments = () => {
  return (
    <>
      <Head>
        <title> Moments | marketingdataconsultinglimited</title>
        <meta
          name="description"
          content="Our life experiences are fundamentally shaped by our memories.
Uderstanding why some memories are better recalled than others and embracing that fluidity can reduce conflict"
        />
      </Head>

      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </>
  );
};

export default moments;
