import React from 'react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import PortfolioListing from '../components/Portfolio/PortfolioListing';
import Head from 'next/head';
import Heading from '../components/Common/Heading';
function portfolio() {
  return (
    <>
      <Head>
        <title> Portfolio | marketingdataconsultinglimited </title>
        <meta
          name="description"
          content="Dive into the dynamic portfolio of marketingdataconsultinglimited, which showcases innovative solutions and cutting-edge projects. A testament to their expertise and vision."
        />
      </Head>
      <Header />
      <Heading
        titletext="Portfolio"
        title="Portfolio"
        subtext="Take a look at some of our work"
      />

      <PortfolioListing />
      <Footer />
    </>
  );
}
export default portfolio;
