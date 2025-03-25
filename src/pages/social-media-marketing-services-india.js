import React from 'react';
import Head from 'next/head';

import Header from '../components/Common/Header';
import Banner from '../components/Services/DetailPage/Banner';
import Cards from '../components/Services/DetailPage/Cards';
import ComponentHead from '../components/Common/ComponentHead';
import Technology from '../components/Services/DetailPage/Technology';
import ProccessHead from '../components/Services/DetailPage/ProcessHead';
import Process from '../components/Services/DetailPage/Process';
import Work from '../components/Services/DetailPage/Work';
import Enquiry from '../components/Services/DetailPage/Enquiry';
import Clients from '../components/Home/Clients';
import Footer from '../components/Common/Footer';
import CaseStudies from '../components/Services/DetailPage/CaseStudies';
const SmmAgency = () => {
  const processes = [
    {
      id: '1',
      name: 'Unparalleled Expertise & Innovation',
      desc: 'marketingdataconsultinglimited, the top social media marketing firm in , provides unmatched knowledge and precise tactics.',
    },
    {
      id: '2',
      name: 'Targeted Campaigns',
      desc: 'For the best audience engagement, our social media marketing services in  use exact targeting.',
    },
    {
      id: '3',
      name: ' Proven Results',
      desc: 'As a leading  social media marketing firm, our track record demonstrates steady growth and success.',
    },
    {
      id: '4',
      name: 'Customised Approach',
      desc: 'marketingdataconsultinglimited, the top social media marketing company in , creates strategies specifically to meet the requirements of each customer.',
    },
    {
      id: '5',
      name: 'Comprehensive Solutions',
      desc: 'marketingdataconsultinglimited has experience in many different markets, including B2B and B2C at all sizes. Whether you own a startup, enterprise or a multi-location company.',
    },
    {
      id: '6',
      name: 'Strategic Insights',
      desc: 'For data-driven insights and effective brand expansion, pick marketingdataconsultinglimited, the top social media marketing company in .',
    },
  ];
  const techs = [
    {
      id: '1',
      img: '/assets/images/service/svg/google.svg',
      name: 'Google',
    },
    {
      id: '2',
      img: '/assets/images/service/svg/google-ads.svg',
      name: 'Google Ads',
    },
    {
      id: '3',
      img: '/assets/images/service/svg/google-analytics.svg',
      name: 'google Analytics',
    },
    {
      id: '4',
      img: '/assets/images/service/svg/facebook.svg',
      name: 'Facebook',
    },
    {
      id: '5',
      img: '/assets/images/service/svg/instagram.svg',
      name: 'Instagram',
    },
    {
      id: '6',
      img: '/assets/images/service/svg/twitter.svg',
      name: 'Twitter',
    },
    {
      id: '7',
      img: '/assets/images/service/svg/linkedin.svg',
      name: 'LinkedIn',
    },
    {
      id: '8',
      img: '/assets/images/service/svg/youtube.svg',
      name: 'YouTube',
    },
    {
      id: '10',
      img: '/assets/images/service/svg/pinterest.svg',
      name: 'Pinterest',
    },
    {
      id: '11',
      img: '/assets/images/service/svg/snapchat.svg',
      name: 'Snapchat',
    },
    {
      id: '12',
      img: '/assets/images/service/svg/tiktok.svg',
      name: 'TikTok',
    },
    {
      id: '13',
      img: '/assets/images/service/svg/quora.svg',
      name: 'Quora',
    },
    {
      id: '14',
      img: '/assets/images/service/svg/reddit.svg',
      name: 'Reddit',
    },
    {
      id: '15',
      img: '/assets/images/service/svg/mailchimp.png',
      name: 'Mailchimp',
    },
    {
      id: '16',
      img: '/assets/images/service/svg/semr.png',
      name: 'SEMrush',
    },
    {
      id: '17',
      img: '/assets/images/service/svg/ahref.png',
      name: 'Ahrefs',
    },
    {
      id: '18',
      img: '/assets/images/service/svg/moz.png',
      name: 'Moz',
    },
    {
      id: '19',
      img: '/assets/images/service/svg/analytics.webp',
      name: 'Adobe Analytics',
    },
    {
      id: '20',
      img: '/assets/images/service/svg/cj.png',
      name: 'Commission Junction',
    },
    {
      id: '21',
      img: '/assets/images/service/svg/shareasale.png',
      name: 'ShareASale',
    },
    {
      id: '22',
      img: '/assets/images/service/svg/hubspot.png',
      name: 'HubSpot',
    },
    {
      id: '23',
      img: '/assets/images/service/svg/pardot.png',
      name: 'Pardot',
    },
    {
      id: '24',
      img: '/assets/images/service/svg/marketo.png',
      name: 'Marketo',
    },
    {
      id: '25',
      img: '/assets/images/service/svg/tumblr.svg',
      name: 'Tumblr',
    },
  ];
  const cards = [
    {
      id: 1,
      para: "For outstanding online brand growth, marketingdataconsultinglimited's great social media marketing services combine strategic planning, compelling content production, audience interaction, data-driven analysis, powerful ad campaigns, and perceptive performance reporting.",
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'Services',
      subtitle: 'Our Exemplary Social Media Marketing Services in UK ',
    },
    {
      id: 2,
      icon: '01',
      title: 'Strategic Planning',
      para: 'Weaved social media plans that are in line with the objectives of your company, target the appropriate demographic, and optimise content for maximum interaction and impact.',
      bgcolor: 'bg-[#F6F8F9]',
      cols: 'md:col-span-1',
      display: 'icon',
      textsize: 'text-xl',
      fontbold: 'font-bold',
      textcolor: 'text-secondary',
      main: 'hidden',
    },
    {
      id: 3,
      icon: '02',
      title: 'Content Creation',
      para: 'Create engaging images and compelling prose that appeal to your audience in order to maintain consistent branding and a powerful online presence across platforms.',
      bgcolor: 'bg-[#F6F8F9]',
      cols: 'md:col-span-1',
      display: 'icon',
      textsize: 'text-xl',
      fontbold: 'font-bold',
      textcolor: 'text-secondary',
      main: 'hidden',
    },
    {
      id: 4,
      icon: '03',
      title: 'Audience Engagement',
      para: 'Promote meaningful connections by being actively involved, replying to messages and comments, and starting dialogues that help to develop a devoted following for your company.',
      bgcolor: 'bg-[#F6F8F9]',
      cols: 'md:col-span-1',
      display: 'icon',
      textsize: 'text-xl',
      fontbold: 'font-bold',
      textcolor: 'text-secondary',
      main: 'hidden',
    },
    {
      id: 5,
      icon: '04',
      title: ' Data-Driven Analytics',
      para: 'Utilising top-notch tools, monitor and analyse social media performance while adjusting strategy in real-time depending on insights.',
      bgcolor: 'bg-[#F6F8F9]',
      cols: 'md:col-span-1',
      display: 'icon',
      textsize: 'text-xl',
      fontbold: 'font-bold',
      textcolor: 'text-secondary',
      main: 'hidden',
    },
    {
      id: 6,
      icon: '05',
      title: 'Ad Campaigns',
      para: 'Run successful paid ads by utilising accurate audience targeting, imaginative graphics, and clever placements to increase visibility and encourage conversions.',
      bgcolor: 'bg-[#F6F8F9]',
      cols: 'md:col-span-1',
      display: 'icon',
      textsize: 'text-xl',
      fontbold: 'font-bold',
      textcolor: 'text-secondary',
      main: 'hidden',
    },
    {
      id: 7,
      icon: '06',
      title: 'Social media Advertising',
      para: 'marketingdataconsultinglimited specialises in delivering targeted and effective campaigns to increase brand awareness, engage audiences and increase conversions.',
      bgcolor: 'bg-[#F6F8F9]',
      cols: 'md:col-span-1',
      display: 'icon',
      textsize: 'text-xl',
      fontbold: 'font-bold',
      textcolor: 'text-secondary',
      main: 'hidden',
    },
  ];
  const casestudies = [
    {
      id: 1,
      image: '/assets/images/service/caseone.png',
      name: 'Logical Fallacies',
      desc: 'What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. ',
    },
    {
      id: 2,
      image: '/assets/images/service/casetwo.png',
      name: 'Long term risk',
      desc: 'What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. ',
    },
    {
      id: 3,
      image: '/assets/images/service/casethree.png',
      name: 'growth hackers',
      desc: 'What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. ',
    },
    {
      id: 4,
      image: '/assets/images/service/casetwo.png',
      name: ' whole lot of factors',
      desc: 'What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. ',
    },
    {
      id: 5,
      image: '/assets/images/service/casethree.png',
      name: 'Outliers’ success',
      desc: 'What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. ',
    },
    {
      id: 6,
      image: '/assets/images/service/caseone.png',
      name: 'North Star Metric',
      desc: 'What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. ',
    },
  ];
  return (
    <div>
      <Head>
        <title>
          {' '}
          Social Media Marketing services in UK | marketingdataconsultinglimited{' '}
        </title>
        <meta
          name="description"
          content="marketingdataconsultinglimited: best social media marketing sevices in UK! we are specializes in strategic solutions to boost your online presence and drive impactful results."
        />
        <link
          rel="canonical"
          href=" https://www.marketingdataconsultinglimited.uksocial-media-marketing-company-in-UK"
        />
        <meta
          property="og:title"
          content=" Social Media Marketing services in UK | marketingdataconsultinglimited"
        />
        <meta
          property="og:description"
          content="marketingdataconsultinglimited: marketingdataconsultinglimited: best social media marketing sevices in UK! we are specializes in strategic solutions to boost your online presence and drive impactful results."
        />
        <meta
          property="og:url"
          content=" https://www.marketingdataconsultinglimited.uksocial-media-marketing-company-in-UK"
        />
        <meta
          property="og:image"
          content=" https://www.marketingdataconsultinglimited.ukassets/images/service/svg/med.png"
        />
        <meta name="robots" content="index,follow" />

        <script type="application/ld+json">
          {`{
  "@context": "http://schema.org",
  "@type": "WebPage",
  "@id": " https://www.marketingdataconsultinglimited.uksocial-media-marketing-company-#webpage",
  "url": " https://www.marketingdataconsultinglimited.uksocial-media-marketing-company-",
  "inLanguage": "en - US",
  "name": "Social Media Marketing",
  "description": "marketingdataconsultinglimited: best social media marketing company in UK! we are  specializes in strategic solutions to boost your online presence and drive impactful results.",
  "isPartOf": {
    "@id": "#website"
  },
  "about": [
    {
      "@type": "Thing",
      "name": "marketingdataconsultinglimited",
      "sameAs": " https://www.marketingdataconsultinglimited.uk/"
    }
  ],
  "mentions": [
    {
      "@type": "Thing",
      "name": "marketingdataconsultinglimited",
      "sameAs": " https://www.marketingdataconsultinglimited.uk/"
    }
  ]}`}
        </script>
      </Head>
      <Header />
      <div
        className="bg-right "
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="Craft Digital Success with our Premium Social Media Marketing Services in UK"
          bannersubtext="Welcome to marketingdataconsultinglimited, 's premier provider of first-rate social media marketing services. We take great pleasure in our ability to connect brands with their audience in meaningful and effective ways as a top social media marketing company. "
          serviceimg="/assets/images/service/svg/med.png"
          serviceimgAlt="social media marketing agency"
          servicehead="Increase the Impact of Your Brand with our marketingdataconsultinglimited Social media marketing services"
          servicedesc1="marketingdataconsultinglimited is best social media marketing services in UK that provides innovative and effective solutions to businesses aiming to harness the power of social media for growth and success. With a dedicated team of social media experts and a deep understanding of social media."
          servicedesc2=" marketingdataconsultinglimited specialises in creating effective campaigns that drive engagement, increase brand awareness and build meaningful connections with audiences. As an advertising company, marketingdataconsultinglimited starts by researching and understanding each client's unique needs and goals. One of marketingdataconsultinglimited's key strengths is content creation and management. They create shareable and engaging content that resonates with their audience on various social media sites. Whether it's an image, a shared video, or a blog post, marketingdataconsultinglimited ensures that every content has a purpose, provides meaningful interactions, and builds trust."
        />
      </div>
      <Cards card={cards} />
      <div className="px-5 container-ack md:px-0">
        <ComponentHead
          title="Platforms"
          sub="Social Media Marketing"
          head="The Platforms stack for Social Media Marketing can vary depending on the specific requirements of the application and the chosen modernization approach."
        />
        <Technology tech={techs} />
      </div>

      <div>
        <div
          style={{
            backgroundImage:
              'url("/assets/images/service/servicebackground.png")',
          }}
        >
          <div className="px-5 container-ack md:px-0">
            <ProccessHead
              processhead="Why ChooseUS"
              processsub="Why Choose Us as your Social Media Marketing Partner"
              processdesc="marketingdataconsultinglimited distinguishes itself as the top social media marketing company in  thanks to our go-to tactics, focused targeting, dependable outcomes, personalised approach, all-inclusive solutions, and strategic insights."
              processimg="/assets/images/service/svg/med1.png"
              proocessalt="social media marketing services"
            />
            <Process process={processes} />
          </div>
        </div>
        <div
          className="h-[7.5rem]"
          style={{
            backgroundImage: 'url("/assets/images/service/wave.png")',
          }}
        ></div>
      </div>

      <ComponentHead title="Studies" sub="Case Studies" />
      <CaseStudies casestudies={casestudies} />

      <Work />
      {/* <Section /> */}
      <Enquiry />
      <Clients />
      <Footer />
    </div>
  );
};

export default SmmAgency;
