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

const Marketing = () => {
  const processes = [
    {
      id: '1',
      name: 'Expert Team',
      desc: 'Our accomplished team of experts specializes in developing data-driven strategies, ensuring substantial digital growth for your business.',
    },
    {
      id: '2',
      name: 'Customized Solutions',
      desc: "Crafting strategies aligned with your company's objectives, we focus on delivering the highest return on investment tailored to your unique goals.",
    },
    {
      id: '3',
      name: 'Diverse Services',
      desc: 'Benefit from a comprehensive suite of services, including PPC, social media, SEO, and various other digital marketing solutions, providing a holistic approach to your digital presence.',
    },
    {
      id: '4',
      name: 'Proven Results',
      desc: 'Witness tangible results backed by a track record of improved online exposure and enhanced engagement, showcasing the effectiveness of our strategies.',
    },
    {
      id: '5',
      name: 'Client-Centric Approach',
      desc: 'Experience a collaborative partnership where your individual needs and goals take precedence, ensuring a client-centric approach at every step.',
    },
    {
      id: '6',
      name: 'Constant Innovation',
      desc: 'Stay ahead with our commitment to constant innovation, keeping your online presence current by staying abreast of the latest developments in the digital landscape.',
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
      para: "Leave behind cookie-cutter agencies and digital shadows: marketingdataconsultinglimited ignites your brand with data-driven strategies that spark viral fire and transform clicks into loyal customers. We don't chase trends, we create them, doubling your conversions with laser-precision ads and content that wins hearts. Ready to rise above the noise and conquer globally? Partner with marketingdataconsultinglimited, your global growth engine, and watch your bottom line skyrocket. Get your free marketing campaigns strategy today.",
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'SUCCESS',
      subtitle:
        'Unfold your success story with our Digital Marketing Services in UK',
    },
    {
      id: 2,
      icon: '01',
      title: 'SEO Optimisation',
      para: 'Boost your online presence with our expert SEO strategies. We optimize your website, enhance keyword rankings, and elevate organic traffic, ensuring your brand maintains a prominent position in search engine results.',
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
      title: 'PPC Campaigns',
      para: 'Maximize your ROI through targeted PPC campaigns. Our specialists craft compelling advertisements, manage bids, and monitor performance, generating high-quality traffic and conversions.',
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
      title: 'Social Media Campaigns',
      para: 'Harness the power of social media across multiple channels. Our team creates engaging content, manages profiles, and implements data-driven initiatives for effective audience connection and interaction.',
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
      title: 'Content marketing',
      para: 'Fuel your brand with insightful content. Our team produces educational and entertaining material, including blogs and infographics, to establish authority and boost audience engagement.',
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
      title: 'Email marketing',
      para: 'Stay connected with your audience through effective email campaigns. We design, execute, and evaluate campaigns that generate leads, maintain engagement, and increase conversions.',
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
      title: 'Analytics & Reporting',
      para: 'Measure success with data-driven insights. We provide comprehensive analytics, monitor essential data, and deliver detailed reports to optimize campaigns for continuous growth.',
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
          Digital Marketing services in UK | marketingdataconsultinglimited
        </title>
        <meta
          name="description"
          content="Are you looking for a most trusted award winning digital marketing services in UK, then you are at the right place."
        />
        <link
          rel="canonical"
          href=" https://www.marketingdataconsultinglimited.ukdigital-marketing-company-in-UK"
        />
        <meta
          property="og:title"
          content="Digital Marketing services in UK | marketingdataconsultinglimited"
        />
        <meta
          property="og:description"
          content="Are you looking for a most trusted award winning digital marketing agency in UK, then you are at the right place."
        />
        <meta
          property="og:url"
          content=" https://www.marketingdataconsultinglimited.ukdigital-marketing-company-in-UK"
        />
        <meta
          property="og:image"
          content=" https://www.marketingdataconsultinglimited.ukassets/images/service/svg/dig.png"
        />
        <meta name="robots" content="index,follow" />

        <script type="application/ld+json">
          {`{
  "@context": "http://schema.org",
  "@type": "WebPage",
  "@id": " https://www.marketingdataconsultinglimited.ukdigital-marketing-company-#webpage",
  "url": " https://www.marketingdataconsultinglimited.ukdigital-marketing-company-",
  "inLanguage": "en - US",
  "name": "Digital Marketing",
  "description": "Are you looking for a most trusted award winning digital marketing agency in UK, then you are at the right place.",
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
          bannertitle="Reach Millions More Customers With The Leading Digital Marketing Services In UK"
          bannersubtext="Don't settle for any generic digital marketing services in UK. Partner with a trusted partner in growth - marketingdataconsultinglimited: your all-inclusive solution to tell your brand story to the world. Let's work together to turn your online presence into an impactful story."
          serviceimg="/assets/images/service/svg/dig.png"
          serviceimgAlt="digital marketing company"
          servicehead="Slay Your Digital Game with a Best Digital Marketing Services in UK that Sets Your Brand's Narrative"
          servicedesc1="Get ready to rule the digital space of billions of UKns and the world "
          servicedesc2="Rule the UKn digital space with marketingdataconsultinglimited, your all-inclusive growth engine with 120+ happy clients, fuels startups, brands, and established players alike. From budding startups to seasoned brands, we tailor custom strategies wielding SEO, PPC, social, content, and email like weapons of mass engagement. Our UI/UX designers, digital strategists, SEO hawks, and content builders unleash their brains to help upgrade your brand's potential pixel by pixel. So, are you ready to rule online? Partner with marketingdataconsultinglimited - your growth partner to your digital success."
          servicedesc3="Beyond buzzwords, marketingdataconsultinglimited is your collaborative storyteller, crafting marketing campaigns that captivate your audience and drive faster, yet real conversions quickly. Contact us today, and let marketingdataconsultinglimited be your marketing copilot for total digital win."
        />
      </div>
      <Cards card={cards} />
      <div className="px-5 container-ack md:px-0">
        <ComponentHead
          title="Platforms"
          sub="Digital Marketing"
          head="The platform stack for digital marketing varies based on specific application requirements and chosen modernization approaches."
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
              processsub=" Why Choose Us "
              processdesc="Build your online empire with marketingdataconsultinglimited. SEO & PPC mastery, viral content that sparks action, and 2x conversions - let your success story unfold. Tailored tactics for your industry, not boring ad campaigns. Our data-driven innovation keeps your brand a cut above. Ready to rule online? Partner with marketingdataconsultinglimited and watch your bottom line reach new heights."
              processimg="/assets/images/service/svg/dig1.png"
              proocessalt="digital market agency"
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

export default Marketing;
