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
const PrAgency = () => {
  const processes = [
    {
      id: '1',
      name: 'Experienced PR Strategists',
      desc: "Our skilled team develops customized public relations plans to help your brand's message and reach.",
    },
    {
      id: '2',
      name: 'Media Excellence',
      desc: 'We get top-tier media coverage, increasing the visibility and reputation of your brand in the industry.',
    },
    {
      id: '3',
      name: 'Crisis Management',
      desc: 'You can rely on us to manage difficult situations quickly and effectively with crisis communication tactics.',
    },
    {
      id: '4',
      name: 'Captivating Content',
      desc: 'Our talented content developers create captivating storylines that connect with your target audience.',
    },
    {
      id: '5',
      name: 'Influencer Collaborations',
      desc: 'We form meaningful connections with influencers to increase the reach and engagement of your business.',
    },
    {
      id: '5',
      name: 'Results-Oriented Approach',
      desc: 'Using measurable metrics, we ensure that our public relations activities correspond with your business goals and produce concrete results.',
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
      para: "marketingdataconsultinglimited, a renowned PR agency in , can help you boost your brand's visibility. Media relations, crisis management, content production, influencer alliances, event publicity, and strategic social media skills are all part of our comprehensive offerings.",
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'SERVICES',
      subtitle: 'Our Outstanding Public Relations Services',
    },
    {
      id: 2,
      icon: '01',
      title: 'Press Relations',
      para: "Through smart press releases and media coverage, build strong relationships with prominent media outlets to ensure your brand's message is heard by the proper audience.",
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
      title: 'Crisis Management',
      para: 'Protect your reputation with preemptive crisis planning and expert guidance, effectively managing and reducing possible public relations problems to preserve brand integrity.',
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
      title: 'Material Creation',
      para: "Create captivating storylines through engaging material, ranging from press releases to thought leadership articles, to boost your brand's credibility and market placement.",
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
      title: 'Influencer Partnerships',
      para: 'Work with industry influencers and thought leaders to magnify your brand message and connect with a larger audience by utilizing their reach and credibility.',
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
      title: 'Event Publicity',
      para: 'Create buzz and media coverage to boost brand recognition and engagement among your target audience by planning and executing successful events.',
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
      title: 'Social Media Strategy',
      para: 'Build a loyal online community around your company by developing a smart social media presence, producing compelling content, and nurturing meaningful conversations.',
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
        <title> Best PR agency in UK | marketingdataconsultinglimited</title>
        <meta
          name="description"
          content="marketingdataconsultinglimited is the best PR agency in UK. We are playing a significant role by Generating awareness, Brand mentions, and Building backlinks..
We are playing a significant role by Generating awareness, Brand mentions, and Building backlinks."
        />
        <link
          rel="canonical"
          href=" https://www.marketingdataconsultinglimited.ukpr-services-in-UK"
        />
        <meta
          property="og:title"
          content=" Best PR agency in UK | marketingdataconsultinglimited"
        />
        <meta
          property="og:description"
          content="marketingdataconsultinglimited is the best PR agency in UK. We are playing a significant role by Generating awareness, Brand mentions, and Building backlinks.
We are playing a significant role by Generating awareness, Brand mentions, and Building backlinks."
        />
        <meta
          property="og:url"
          content=" https://www.marketingdataconsultinglimited.ukpr-services-in-UK"
        />
        <meta
          property="og:image"
          content=" https://www.marketingdataconsultinglimited.ukassets/images/service/svg/pr.png"
        />
        <meta name="robots" content="index,follow" />

        <script type="application/ld+json">
          {`{
  "@context": "http://schema.org",
  "@type": "WebPage",
  "@id": " https://www.marketingdataconsultinglimited.ukpr-agency-#webpage",
  "url": " https://www.marketingdataconsultinglimited.ukpr-agency-",
  "inLanguage": "en - US",
  "name": "PR Agency",
  "description": "marketingdataconsultinglimited Provides the Best PR Services in UK.
We are playing a significant role by Generating awareness, Brand mentions, and Building backlinks.",
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
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="Get Noticed with PR: marketingdataconsultinglimited, the Best PR Agency in "
          bannersubtext="marketingdataconsultinglimited is the top PR firm in , thanks to a devoted team of specialists who understand the ever-changing communication landscape. We are dedicated to providing strategic solutions that not only increase the visibility of your business but also create significant interactions."
          serviceimg="/assets/images/service/svg/pr.png"
          serviceimgAlt="public relations agency"
          servicehead="Raise Your Brand's Voice with marketingdataconsultinglimited 's Best PR Agency"
          servicedesc1="Welcome to marketingdataconsultinglimited, your dependable Public Relations partner. We specialise in building and amplifying captivating narratives that resonate with your target audience as a top PR agency in . Our mission is to help companies become influential voices by connecting them with customers, stakeholders, and the media."
          servicedesc2="Whether you're a startup or an established company, our unique methods and bespoke campaigns guarantee that your brand narrative is heard loud and clear. Join us and discover the potential of excellent public relations to promote growth and foster long-term connections."
        />
      </div>
      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
        <ComponentHead
          title="Platforms"
          sub="PR Agency"
          head="The Platforms stack for PR Agency can vary depending on the specific requirements of the application and the chosen modernization approach."
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
              processhead="Why ChooseUS"
              processsub="Why Choose Us as your Go-To Partner for Public Relations?"
              processdesc="Choose marketingdataconsultinglimited as your Public Relations partner for unparalleled Public Relations Services. Our skilled staff develops customized plans, acquires top-tier media coverage, successfully handles crises, provides appealing content, engages with influencers, and ensures results-driven success."
              processimg="/assets/images/service/svg/pr1.png"
              proocessalt="pr agency"
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

export default PrAgency;
