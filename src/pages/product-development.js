import React from 'react';
import Head from 'next/head';
import Footer from '../components/Common/Footer';
import Banner from '../components/Home/Banner';
import Header from '../components/Common/Header';
import About from '../components/Home/About';
import Advisors from '../components/Home/Advisors';
import Memories from '../components/Home/Memories';
import Leaders from '../components/Home/Leaders';
import Videos from '../components/Home/Videos';
import Blogs from '../components/Home/Blogs';
import Testimonial from '../components/Home/Testimonials';
import Clients from '../components/Home/Clients';
import Card from '../components/Home/Card';
import OurServices from '../components/Home/OurServices';
import Portfolio from '../components/Home/Portfolio';
import OurGroups from '../components/Home/OurGroups';
import BannerResponsive from '../components/Home/BannerResponsive';
import AboutPage from '../components/Common/AboutPage';
import ServicePage from '../components/Common/ServicePage';

const ProductDevelopmentPage = () => {
  const services = [
    {
      id: 1,
      image: '/assets/images/service/digital-product-design.png',
      name: 'Digital Product Design',
      desc: 'Product design plays a crucial role in creating exceptional user experiences and driving the success of a product. It encompasses the process of understanding user needs, ideating, prototyping, and iterating to develop a functional and visually appealing product.',
      link: '/services/product-design-company',
    },
    {
      id: 2,
      image: '/assets/images/service/web-development.png',
      name: 'Web Development',
      desc: 'Whatever web applications you’re building, we got your back at every stage of web development, including web design.We’ve built a core system for a bank, an MVP marketplace sold for millions, and other 5☆ custom projects for 140+ companies worldwide.',
      link: '//services/website-development-company',
    },
    {
      id: 3,
      image: '/assets/images/service/app-modernisation.png',
      name: 'App Modernization',
      desc: 'App modernization is the process of revitalising existing applications to leverage modern technologies, enhance performance, improve user experiences, and align with evolving business needs.',
      link: '/services/app-modernization-services',
    },
    {
      id: 4,
      image: '/assets/images/service/software-development.png',
      name: 'Software Development',
      desc: "Software development is the process of designing, coding, testing, and maintaining software applications. In today's fast-paced digital world, software plays a vital role in powering businesses and driving innovation.",
      link: '/services/software-development-company',
    },
    {
      id: 5,
      image: '/assets/images/service/ecommerce-development.png',
      name: 'Ecommerce Development',
      desc: 'Ecommerce development involves designing and building online stores that provide an exceptional user experience, seamless transactions, and robust backend functionality.',
      link: '/services/ecommerce-developement-company',
    },
    {
      id: 6,
      image: '/assets/images/service/devOps.png',
      name: 'Cloud Engineering & DevOps',
      desc: 'Together, we will establish an optimal cloud computing workflow that helps you cut down cloud spending, automate infrastructure monitoring, and increase architectural flexibility.',
      link: '/services/cloud-engineering-and-devOps',
    },
  ];

  return (
    <div>
      <Head>
        <title>marketingdataconsultinglimited Ltd.</title>
      </Head>
      <Header />
      <Banner />
      <AboutPage />
      <ServicePage services={services} />
      <OurGroups />
      <Advisors />
      <Memories />
      <Card />
      <Portfolio />
      <Leaders />
      <Videos />
      <Clients />
      <Blogs />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default ProductDevelopmentPage;
