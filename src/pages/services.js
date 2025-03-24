import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import ComponentHead from "../components/Common/ComponentHead";
import Tabs from "../components/Services/Tabs";
import Head from "next/head";
import React from "react";

const Services = () => {
  return (
    <div>
      <Header />
      <Head>
        <title>Our Service</title>
      </Head>

      <div
      className="pb-10 bg-right"
      style={{
        backgroundImage: 'url("/assets/images/mainbackground.png ")',
      }}
    >
    <ComponentHead
        title="Our Services"
        sub="Explore, Build, Deploy"
        head="is our essence and your true success. Looking to create unforgettable experiences?"
      />
      </div>
      <Tabs />
      <Footer />
    </div>
  );
};

export default Services;
