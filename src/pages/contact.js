import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import FormSection from "../components/Contact/FormSection";
import Location from "../components/Contact/Location";
import Head from "next/head";
import React from "react";

const contact = () => {
  return (
    <>
      <Header />
      <Head>
        <title>Contact</title>
      </Head>
      <FormSection />
      <Location />
      <Footer />
    </>
  );
};

export default contact;
