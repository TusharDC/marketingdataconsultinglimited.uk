import React from 'react';
import Head from 'next/head';
import Heading from '../components/Common/Heading';
import Header from '../components/Common/Header';
import Banner from '../components/Industry/Banner';
import ComponentHead from '../components/Common/ComponentHead';
import Card from '../components/Industry/Card';
import Band from '../components/Common/Band';
import Footer from '../components/Common/Footer';
const industryWeServe = () => {
  return (
    <>
      <div>
        <Head>
          <title>Industry we serve | marketingdataconsultinglimited </title>
          <meta
            name="description"
            content="Discover how marketingdataconsultinglimited Industry serves diverse sectors with innovative solutions, delivering excellence and reliability across various industries."
          />
        </Head>
        <Header />
        <Heading
          titletext="Industry"
          title="Industry We Serve"
          subtext="marketingdataconsultinglimited is a company that caters to a diverse array of industries. They provide technological solutions and support that are applicable across various sectors. "
        />
        <Banner />
        <ComponentHead
          title=" Serve"
          sub="We Serve"
          head="Here is a list of all the industries that we serve"
        />
        <Card />
        <Band />
        <Footer />
      </div>
    </>
  );
};

export default industryWeServe;
