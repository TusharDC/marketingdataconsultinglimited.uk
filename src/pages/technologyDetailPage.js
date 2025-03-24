import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Advisors from "../components/Technology/TechnologyDetail/Advisors";
import Band from "../components/Common/Band";
import Banner from "../components/Technology/TechnologyDetail/Banner";
import Section from "../components/Technology/TechnologyDetail/Section";
import React from "react";
import ComponentHead from "../components/Common/ComponentHead";
import Heading from "../components/Common/Heading";

const TechnologyDetailPage = () => {
  return (
    <div>
      <Header />
      <Heading
        titletext="Technologies"
        title="Technologies "
        subtext="The Evolution of IT: Unveiling the Latest Technologies Shaping the Industry"
      />
      <Banner />
      <Section />
      <Band />
      <ComponentHead
        title=" Advisors"
        head="Transforming ideas into reality: Our Industry Experts understand the importance of being responsible stewards of the environment"
        sub="Our Industry Experts"
      />
      <Advisors />
      <Footer />
    </div>
  );
};

export default TechnologyDetailPage;
