import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Backend from "../components/Technology/Backend";
import Section from "../components/Technology/Section";

import Head from "next/head";
import React from "react";
import Heading from "../components/Common/Heading";

const Technology = () => {
  return (
    <div>
      <Header />
      <Head>
        <title>Technology</title>
      </Head>
      <Heading
        titletext="Technologies"
        title="Technologies "
        subtext="We use a wide range of technologies for different purposes"
      />
      <Section />
      <Backend />
      <Footer />
    </div>
  );
};

export default Technology;
