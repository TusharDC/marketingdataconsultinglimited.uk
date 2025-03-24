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
const SemAgency = () => {
  const processes = [
    {
      id: '1',
      name: 'Expertise & Experience',
      desc: 'marketingdataconsultinglimited, a seasoned influencer marketing firm, has developed effective strategies for over 500 brands, influencing millions online.',
    },
    {
      id: '2',
      name: 'Customized Solutions',
      desc: 'Our design goal-specific solutions ensure relevant influencer collaborations. Access to 50+ creators across 5+ sectors, reaching 6000+ followers.',
    },
    {
      id: '3',
      name: 'Data-Driven Insights',
      desc: 'We utilize data analytics, AI, and machine learning to refine campaigns, maximize ROI, and track performance.',
    },
    {
      id: '4',
      name: 'Innovative Tools',
      desc: 'Our influencers use advanced tools for influencer research, analysis, and management. We offer solutions like social commerce, OTT, and content syndication.',
    },
    {
      id: '5',
      name: 'Transparent Reporting',
      desc: 'Our commitment to transparent reporting provides real-time insights into campaign performance and helps improve future campaigns.',
    },
    {
      id: '6',
      name: 'Proven Success',
      desc: 'Team marketingdataconsultinglimited consistently delivers outstanding results, increasing brand awareness, engagement, conversions, and loyalty.',
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
      para: `Social Media has forever changed the Doing-Business-Game and the way consumers interact with brands and make purchase decisions. At marketingdataconsultinglimited, we help you harness the power of social media to transform your business and drive sales. We've the expertise you need in influencer marketing, paid performance, owned social, creative and content services for innovative social media campaigns. Increase brand awareness, engagement, conversions, loyalty. Grow with us, become a social-first brand.`,
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'SERVICES',
      subtitle: 'Influencer Marketing Services',
    },
    {
      id: 2,
      icon: '01',
      title: 'Influencer Marketing',
      para: 'Our team of influencers help you reach and influence millions of consumers with the power of authentic and trusted creators.',
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
      title: 'Paid & Performance Media',
      para: 'Boost your brand visibility and ROI with data-driven and optimized paid media campaigns across social platforms.',
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
      title: 'Ad Copywriting',
      para: 'We craft compelling and persuasive ad copy that captures your audience’s attention and drives them to action.',
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
      title: 'Creative and Content',
      para: 'Create and distribute high-quality and engaging content with us to showcase your brand story and value proposition.',
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
      title: 'Social Experiential Marketing',
      para: 'Immerse your customers in memorable and interactive social experiences that amplify your brand awareness and loyalty.',
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
      title: 'Conversion Optimization & B2B Marketing',
      para: 'Turn your prospects into customers and your customers into influencers with our effective and tailored B2B marketing strategies.',
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
          Influencer Marketing services in UK | marketingdataconsultinglimited
        </title>
        <meta
          name="description"
          content="Discover the leading influencer marketing services in UK! Our expert team connects brands with influential voices to amplify your message and get results."
        />
        <link
          rel="canonical"
          href=" https://www.marketingdataconsultinglimited.co.ukinfluencer-marketing-services-UK"
        />
        <meta
          property="og:title"
          content="Influencer Marketing services in UK | marketingdataconsultinglimited"
        />
        <meta
          property="og:description"
          content="Discover the leading influencer marketing services in UK! Our expert team connects brands with influential voices to amplify your message and get results."
        />
        <meta
          property="og:url"
          content=" https://www.marketingdataconsultinglimited.co.uksem-agency-in-UK"
        />
        <meta
          property="og:image"
          content=" https://www.marketingdataconsultinglimited.co.ukassets/images/service/svg/eng.png"
        />
        <meta name="robots" content="index,follow" />
        <script type="application/ld+json">
          {`{
  "@context": "http://schema.org",
  "@type": "WebPage",
  "@id": " https://www.marketingdataconsultinglimited.co.uksem-company-#webpage",
  "url": " https://www.marketingdataconsultinglimited.co.uksem-company-",
  "inLanguage": "en - US",
  "name": "Search Engine Marketing",
  "description": "Looking for the best Search Engine Marketing agency in UK to help you achieve optimum results and improve your ROI? Look no further than marketingdataconsultinglimited",
  "isPartOf": {
    "@id": "#website"
  },
  "about": [
    {
      "@type": "Thing",
      "name": "marketingdataconsultinglimited",
      "sameAs": " https://www.marketingdataconsultinglimited.co.uk/"
    }
  ],
  "mentions": [
    {
      "@type": "Thing",
      "name": "marketingdataconsultinglimited",
      "sameAs": " https://www.marketingdataconsultinglimited.co.uk/"
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
          bannertitle="Grow with marketingdataconsultinglimited: UK's Leading Influencer Marketing Partner for Impact"
          bannersubtext="We are your dynamic influencer marketing partner that creates a powerful impact while maintaining a non-intrusive approach. Our adept team harmoniously amalgamates data, influencers, and followers, fostering an environment that propels your business to new heights."
          serviceimg="/assets/images/service/svg/eng.png"
          serviceimgAlt="search engine marketing company"
          servicehead="Empowering Your Business to Garner the Attention it Deserves, and More."
          servicedesc1=" At marketingdataconsultinglimited, we are more than just an influencer marketing agency. We are a full-service social media transformation and business partner that helps you leverage the power of creators, AI technology & solutions, and data to grow your brand and achieve your business goals."
          servicedesc2="We have worked with 120+ brands across various industries, generating brand awareness to millions of impressions and at least 20% increase in engagements.  marketingdataconsultinglimited is trusted by World’s leading brands, such as  Jindal Steel and Power,  RSM - UK, Discovery Land Company, and many more.

          If you are looking for a social media transformation partner that can help you grow your brand with influencer marketing, paid performance, owned social, and creative and content services, look no further than marketingdataconsultinglimited."
        />
      </div>
      <Cards card={cards} />
      <div className="px-5 container-ack md:px-0">
        <ComponentHead
          title="Platforms"
          sub="Social Engine Marketing"
          head="Depending on your goals and target audience, you can choose from different platforms and strategies to reach and engage your potential customers."
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
              processsub="Why Choose Us?"
              processdesc="marketingdataconsultinglimited is your go-to influencer marketing partner for creative ideas, customized solutions, data-driven insights, innovative tools, transparent reporting, and a track record of generating successful influencer marketing campaigns."
              processimg="/assets/images/service/svg/eng1.png"
              proocessalt="Search Engine Marketing Services"
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

export default SemAgency;
