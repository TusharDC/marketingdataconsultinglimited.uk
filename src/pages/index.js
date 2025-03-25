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
const index = () => {
  return (
    <>
      <Head>
        <title>
          {' '}
          Award Winning Marketing Agency in UK | marketingdataconsultinglimited
        </title>
        <meta
          name="description"
          content="marketingdataconsultinglimited   is an award-winning best Marketing agency in UK. We offer's a experts team that will help you grow your business traditional to digital & Join us Today!"
        />
        <meta
          name="keywords"
          content="Best Markeitng Ageny in UK
          Top Markeitng Agency in UK
          Digital Marketing services in UK
          Web development services in UK
          Website Marketing Services in UK
          Seo Marketing services in UK
          Best seo Marketing Agency in UK
          Social Media Marketing Agency in UK
          Best pr Markitng Agency in UK
          Marketing Agency in UK"
        />
        <link
          rel="canonical"
          href=" https://www.marketingdataconsultinglimited.uk/"
        />

        <meta
          property="og:title"
          content=" Award Winning Marketing Agency in UK | marketingdataconsultinglimited"
        />
        <meta
          property="og:description"
          content="marketingdataconsultinglimited   is an award-winning best Marketing agency in UK. We offer's a experts team that will help you grow your business traditional to digital & Join us Today!"
        />
        <meta
          property="og:url"
          content=" https://www.marketingdataconsultinglimited.uk/"
        />
        <meta
          property="og:image"
          content=" https://www.marketingdataconsultinglimited.ukassets/images/logoack.png"
        />
        <meta name="robots" content="index,follow" />

        <script type="application/ld+json">
          {`{ "@context": "https://schema.org",
  "@type": "Organization",
  "name": "marketingdataconsultinglimited",
  "alternateName": "Advertising Agency",
  "url": " https://www.marketingdataconsultinglimited.uk/",
  "logo": " https://www.marketingdataconsultinglimited.ukassets/images/logoack.png",
  "sameAs": [
    "https://m.facebook.com/people/marketingdataconsultinglimited- -Pvt-Ltd/100076925016084/",
    "https://www.instagram.com/marketingdataconsultinglimited/",
    "https://in.linkedin.com/company/marketingdataconsultinglimited"
  ]}`}
        </script>

        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "marketingdataconsultinglimited",
  "image": " https://www.marketingdataconsultinglimited.ukassets/images/banner/banner-one.png",
  "@id": "",
  "url": " https://www.marketingdataconsultinglimited.uk/",
  "telephone": "+44 7418 343383",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No. 136, 3rd Floor, Rider House, Sector 44",
    "addressLocality": "",
    "postalCode": "122003",
    "addressCountry": "IN"
  } ,
  "department": {
    "@type": "LocalBusiness",
    "name": "marketingdataconsultinglimited",
    "image": " https://www.marketingdataconsultinglimited.ukassets/images/banner/banner-one.png",
    "telephone": "+44 7418 343383"
  }}`}
        </script>
      </Head>
      <Header />
      <Banner />
      <BannerResponsive />
      <About />
      <OurServices />
      {/* <OurGroups/> */}
      {/* <Advisors /> */}
      {/* <Memories /> */}
      <Card />
      <Portfolio />
      <Leaders />
      <Videos />
      <Clients />
      <Blogs />
      <Testimonial />
      <Footer />
    </>
  );
};

export default index;
