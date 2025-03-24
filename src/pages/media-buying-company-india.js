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
const MediaBuying = () => {
  const processes = [
    {
      id: '1',
      name: 'Media Buying Expertise and Strategy',
      desc: 'Navigating diverse media landscapes necessitates strategic thinking. In the media glut of the digital age, brands aspire for impact.',
    },
    {
      id: '2',
      name: 'Competitive Advertising Real Estate',
      desc: 'Obtaining ad space in oversaturated marketplaces is intensely competitive, necessitating precision and ingenuity.',
    },
    {
      id: '3',
      name: ' marketingdataconsultinglimited: Reliable Media Purchasing Partner',
      desc: 'We utilise relationships and skills as a leading Media Buying Agency in  for best engagement.',
    },
    {
      id: '4',
      name: 'Strategic Advertising Placement',
      desc: 'Our skilled team assures exact ad placing, resulting in increased engagement, conversions, and brand visibility.',
    },
    {
      id: '5',
      name: 'Multi-Channel Holistic Approach',
      desc: "marketingdataconsultinglimited's comprehensive media strategy fosters partnerships and interaction, moving your company forward in the digital space.",
    },
    {
      id: '6',
      name: 'Akrolix Digital Domination',
      desc: 'Work with us, your Digital Media Buying firm, to develop successful tactics that outperform the competition and increase brand influence.',
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
      para: "Our modernization solutions revolutionize your applications' performance, scalability, agility, & maintainability. We enable seamless integration with emerging technologies, optimize infrastructure, & streamline workflows to ensure your applications are future-proof.",
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'SERVICES',
      subtitle: 'Our Media Planning and Buying Services',
    },
    {
      id: 2,
      icon: '01',
      title: 'Master Planning',
      para: 'We will investigate your brand identity, target audience, budget, and core messaging in close collaboration with you. Our team of media buying experts will then create a tailored and impactful strategy based on your specific Key Performance Indicators (KPIs).',
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
      title: 'Market Arena Data Insights ',
      para: 'We know when and how much to spend on your media buying campaign to obtain unmatched value. Our market analytics ensure that your ad is placed optimally for maximum reach and engagement.',
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
      title: 'Platform Analysis',
      para: 'We will carefully find and select the most appropriate platforms and channels for your advertisements based on a thorough analysis of your individual company objectives and goals. By accurately targeting the relevant audience and leveraging the most successful advertising channels, we aim to assure optimal conversion rates and return on investment (ROI).',
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
      title: 'Reporting and Analysis',
      para: 'You will receive extensive and detailed reports that summarise the results of your efforts and provide easy-to-digest insights. These reports will keep you informed and up to date on the most recent developments, giving you a comprehensive picture of the progress and impact of your marketing activities.',
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
      title: 'Creative Audience Engagement',
      para: "We have the knowledge and experience to assist you in developing a highly innovative and appealing strategy that not only grabs but also captivates your audience's imagination, ensuring your message resonates powerfully and successfully with them.",
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
      title: 'Foolproof Coordination',
      para: "We'll make certain that every platform used in your ad campaign is perfectly coordinated, guaranteeing that your ads look new and are carefully optimised to effectively engage viewers. Our committed approach ensures that your messaging is consistent across all media.",
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
          Media Buying services in UK | marketingdataconsultinglimited{' '}
        </title>
        <meta
          name="description"
          content="marketingdataconsultinglimited   is the best Media best-buying services in UK that offers Communication Planning, Content Creation, and Technology."
        />
        <link
          rel="canonical"
          href=" https://www.marketingdataconsultinglimited.co.ukmedia-buying-company-in-UK"
        />
        <meta
          property="og:title"
          content="Media Buying services in UK | marketingdataconsultinglimited "
        />
        <meta
          property="og:description"
          content="marketingdataconsultinglimited   is the best Media best-buying services in UK that offers Communication Planning, Content Creation, and Technology."
        />
        <meta
          property="og:url"
          content=" https://www.marketingdataconsultinglimited.co.ukmedia-buying-company-in-UK"
        />
        <meta
          property="og:image"
          content=" https://www.marketingdataconsultinglimited.co.ukassets/images/service/svg/buy.png"
        />
        <meta name="robots" content="index,follow" />

        <script type="application/ld+json">
          {`{
  "@context": "http://schema.org",
  "@type": "WebPage",
  "@id": " https://www.marketingdataconsultinglimited.co.ukmedia-buying-company-#webpage",
  "url": " https://www.marketingdataconsultinglimited.co.ukmedia-buying-company-",
  "inLanguage": "en - US",
  "name": "Media Buying",
  "description": ""marketingdataconsultinglimited   is the best Media best-buying company in
UK that offers Communication Planning, Content Creation, and Technology.",
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
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="marketingdataconsultinglimited, Your Trusted Media Buying Services in ! Access the Power of Media Buying!"
          bannersubtext="At marketingdataconsultinglimited, we recognize that a successful marketing campaign is about more than simply creative slogans; it's about communicating with your target demographic at the right time and at the right price. That's where our Media Buying Services come in, assisting you in developing campaigns that drive marketing ROI and efficiently reach your target demographic."
          serviceimg="/assets/images/service/svg/buy.png"
          serviceimgAlt="Media Buying Agency"
          servicehead="Strategic Media Buying Services for Effective Marketing Campaigns"
          servicedesc1="Our skilled staff excels at Media Planning and Buying, employing a deliberate approach to locate and purchase ad space on the channels that are most important to your target audience. We serve traditional marketing channels such as television, radio, and print, as well as digital channels such as websites, social media, and streaming platforms."
          servicedesc2="You may expect maximum exposure among your target market while optimising your budget   when you use marketingdataconsultinglimited as your Digital Media Buying Agency. Our media buyers use exclusive  strategies such as Programmatic Buys, which use AI and algorithms to conduct real-time bidding on ad space targeted to specific consumer profiles. Furthermore, we execute Direct Buys, directly negotiating ad pricing and run periods with relevant advertisers to ensure optimal placements for your business."
        />
      </div>
      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
        <ComponentHead
          title="Platforms"
          sub="Media Buying and Plannig"
          head="The Platforms stack for Media Buying and Plannig can vary depending on the specific requirements of the application and the chosen modernization approach."
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
          <div className="container-ack md:px-0 px-5">
            <ProccessHead
              processhead="Services"
              processsub="Our Media Planning and Buying Services              "
              processdesc="Optimizing platforms, pushing the boundaries of innovation."
              processimg="/assets/images/service/svg/buy1.png"
              proocessalt="Media Planning Services"
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

export default MediaBuying;
