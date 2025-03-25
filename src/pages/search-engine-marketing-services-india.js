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
      desc: 'marketingdataconsultinglimited, a leading SEM firm, has a seasoned staff with years of experience in developing efficient search engine marketing strategies that produce measurable results.',
    },
    {
      id: '2',
      name: 'Well-Built Approach',
      desc: "We design tactics to each client's specific goals, assuring focused ads that resonate with their specific audience and industry.",
    },
    {
      id: '3',
      name: 'Data-Driven Insights',
      desc: 'As a reputable SEM firm, we rely on data analytics to constantly refine and optimize campaigns in order to maximize ROI and remain ahead of changing industry trends.',
    },
    {
      id: '4',
      name: 'High-Tech Tools',
      desc: 'marketingdataconsultinglimited, a top search engine marketing business, uses advanced tools and technologies to do comprehensive keyword research, competitor analysis, and performance tracking.',
    },
    {
      id: '5',
      name: 'Transparent Reporting',
      desc: 'Clients choose us as their go-to SEM agency because of our commitment to transparent reporting, which provides them with real-time insights into campaign performance and outcomes.',
    },
    {
      id: '6',
      name: 'Proven Success',
      desc: 'marketingdataconsultinglimited has a proven track record as the finest search engine marketing business, continuously delivering great results, increasing traffic, leads, and conversions for our clients.',
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
      para: 'marketingdataconsultinglimited, a top SEM company in , offers full search engine marketing services. We specialize in keyword research, ad production, bid management, and conversion optimisation to ensure maximum ROI and business growth.',
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'SERVICES',
      subtitle: 'Our Services',
    },
    {
      id: 2,
      icon: '01',
      title: 'Keyword Research',
      para: 'Identify appropriate keywords to target, ensuring your adverts reach the proper audience and increasing your search engine presence.',
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
      title: 'Ad Campaign Development',
      para: 'Create enticing ad campaigns that catch attention, generate clicks, and bring traffic to your website for increased conversions.',
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
      para: 'Create convincing ad copy that resonates with users, emphasizing your offerings and motivating them to act.',
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
      title: 'Bid Management',
      para: 'Use strategic bid management approaches to maximize your ad budget and achieve maximum ROI and cost-effective results.',
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
      title: 'Performance monitoring',
      para: 'Use advanced monitoring tools to analyze campaign performance and make data-driven modifications for continual improvement.',
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
      title: 'Conversion Optimisation',
      para: 'Optimize landing pages and add elements to optimize user experience, resulting in increased conversion rates and campaign success. ',
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
          Search Engine Marketing services in UKn |
          marketingdataconsultinglimited
        </title>
        <meta
          name="description"
          content="Looking for the best Search Engine Marketing services in UK to help you achieve optimum results and improve your ROI? Look no further than marketingdataconsultinglimited."
        />
        <link
          rel="canonical"
          href=" https://www.marketingdataconsultinglimited.uksem-agency-in-UK"
        />
        <meta
          property="og:title"
          content="Search Engine Marketing services in UKn | marketingdataconsultinglimited"
        />
        <meta
          property="og:description"
          content="Looking for the best Search Engine Marketing services in UK to help you achieve optimum results and improve your ROI? Look no further than marketingdataconsultinglimited."
        />
        <meta
          property="og:url"
          content=" https://www.marketingdataconsultinglimited.uksem-agency-in-UK"
        />
        <meta
          property="og:image"
          content=" https://www.marketingdataconsultinglimited.ukassets/images/service/svg/eng.png"
        />
        <meta name="robots" content="index,follow" />
        <script type="application/ld+json">
          {`{
  "@context": "http://schema.org",
  "@type": "WebPage",
  "@id": " https://www.marketingdataconsultinglimited.uksem-company-#webpage",
  "url": " https://www.marketingdataconsultinglimited.uksem-company-",
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
          bannertitle="marketingdataconsultinglimited: 's Best Search Engine Marketing Services"
          bannersubtext="Welcome to marketingdataconsultinglimited, your go-to source in  for innovative Search Engine Marketing (SEM) services. As a top SEM firm, we offer unmatched experience and brilliant ideas to increase your brand's online visibility and produce significant outcomes."
          serviceimg="/assets/images/service/svg/eng.png"
          serviceimgAlt="search engine marketing company"
          servicehead="Manifest the Might of SEM with marketingdataconsultinglimited: Your Trusted SEM Agency"
          servicedesc1=" We at marketingdataconsultinglimited are your growth catalyst, not simply another provider of SEM services in . Our complete approach to SEM encompasses all facets of the practice, from campaign optimisation and performance evaluation to keyword research and ad production. We guarantee that your investment in SEM produces measurable results by placing a strong emphasis on maximizing ROI. As the top search engine marketing firm in ."
          servicedesc2="Our skilled team of experts is familiar with the complex dynamics of the digital environment, and we specialize in developing well-built SEM plans that complement your particular company objectives."
        />
      </div>
      <Cards card={cards} />
      <div className="px-5 container-ack md:px-0">
        <ComponentHead
          title="Platforms"
          sub="Social Engine Marketing"
          head="The Platforms stack for Social Engine Marketing can vary depending on the specific requirements of the application and the chosen modernization approach."
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
              processdesc="marketingdataconsultinglimited is your go-to SEM partner for experienced ideas, tailored approaches, data-driven insights, novel tools, transparent reporting, and a track record of generating successful search engine marketing campaigns."
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
