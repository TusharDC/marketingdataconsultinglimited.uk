import React from 'react';
import Head from 'next/head';
import Footer from '../components/Common/Footer';
import Banner from '../components/Home/Banner';
import Header from '../components/Common/Header';
import Advisors from '../components/Home/Advisors';
import Memories from '../components/Home/Memories';
import Leaders from '../components/Home/Leaders';
import Videos from '../components/Home/Videos';
import Blogs from '../components/Home/Blogs';
import Testimonial from '../components/Home/Testimonials';
import Clients from '../components/Home/Clients';
import Card from '../components/Home/Card';
import Portfolio from '../components/Home/Portfolio';
import OurGroups from '../components/Home/OurGroups';
import AboutPage from '../components/Common/AboutPage';
import ServicePage from '../components/Common/ServicePage';
const DigitalMarketingPage = () => {
  const services = [
    {
      id: 1,
      image: '/assets/images/service/DigitalMarketingStrategy.png',
      name: 'Digital Marketing Strategy',
      desc: 'Our approach to digital marketing strategy involves a deep dive into your business goals, your market landscape, and your customer profiles. We create a comprehensive roadmap that integrates various digital channels - SEO, content marketing, social media, PPC, email marketing, and more-to meet your business objectives effectively. With our data-driven strategies, we ensure your brand message resonates with your target audience and drives profitable growth.',
      link: '/services/digital-marketing-company',
    },
    {
      id: 2,
      image: '/assets/images/service/SearchEngineOptimization.png',
      name: 'Search Engine Optimization (SEO)',
      desc: "Our SEO service ensures your website gains maximum visibility in search engine results, driving organic traffic. By employing advanced keyword research, technical SEO, on-page and off-page optimization, and content creation strategies, we aim to improve your site's ranking and maximize its visibility. Our holistic SEO approach leads to sustainable growth in traffic and enhances your online presence.",
      link: '/services/seo-services-company',
    },
    {
      id: 3,
      image: '/assets/images/service/SearchEngineMarketing.png',
      name: 'Search Engine Marketing (SEM)',
      desc: "SEM is a potent tool in our arsenal that boosts your website's visibility through paid advertisements on search engines. We manage every aspect of your SEM campaigns - from keyword selection, ad creation, bid management to landing page optimization - ensuring you achieve the highest return on your ad spend.",
      link: '/services/sem-services-company',
    },
    {
      id: 4,
      image: '/assets/images/service/SocialMediaMarketing.png',
      name: 'Social Media Marketing (SMM)',
      desc: "Our SMM services are designed to propel your brand's online presence, stimulate engagement, and drive conversions. We harness the power of various social media platforms to connect with your audience, create sharable content, and build a loyal community. Our SMM strategies are backed by analytics, ensuring continuous optimization.",
      link: '/services/social-media-marketing-agency',
    },
    {
      id: 5,
      image: '/assets/images/service/PublicRelation.png',
      name: 'Public Relations (PR)',
      desc: 'We shape and manage your public image and relationships with key stakeholders. Our PR services include media relations, crisis management, corporate communication, and event management. We help build a positive reputation, gain media exposure, and foster relationships that help achieve your business goals.',
      link: '/services/pr-agency',
    },
    {
      id: 6,
      image: '/assets/images/service/MediaBuyingandPlanning.png',
      name: 'Media Buying and Planning',
      desc: 'Our media buying and planning services ensure that your ads reach the right audience at the right time and place. We devise a strategic media plan, negotiate ad placements, manage your media budget, and track the performance of your ads to provide maximum ROI.',
      link: '/services/media-buying-agency',
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

export default DigitalMarketingPage;
