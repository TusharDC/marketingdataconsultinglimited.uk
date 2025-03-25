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
const SeoAgency = () => {
  const processes = [
    {
      id: '1',
      name: 'Experience Excellence',
      desc: "Having successfully delivered 100+ impactful projects across various industries, we take pride in our team's exceptional skills and unwavering commitment to excellence and innovation. These achievements reflect our dedication, and we look forward to embarking on new ventures and achieving even greater milestones.",
    },
    {
      id: '2',
      name: 'Tailored Solutions',
      desc: "Our meticulously crafted products are designed to precisely meet and exceed your unique requirements. Whether it's outstanding web design, advanced eCommerce solutions, seamless mobile app development, or effective digital marketing strategies, our dedicated team is poised to deliver unparalleled solutions that resonate with your audience and drive remarkable success for your business.",
    },
    {
      id: '3',
      name: 'Always Available Support',
      desc: 'Our highly knowledgeable and dedicated SEO expert team is available 24/7 to ensure your website runs seamlessly at all times. We take pride	 in providing excellent support, swiftly and effectively resolving any issues. Day or night, you can rely on us for consistent service and a hassle-free website experience.',
    },
    {
      id: '4',
      name: 'Budget-Friendly Prices',
      desc: "We prioritize delivering value for your money by consistently offering competitive pricing in the market. If you’re seeking top SEO services in UK, our commitment to affordability, quality, and reliability makes marketingdataconsultinglimited your go-to source. Experience the convenience of acquiring top-notch digital products and SEO services without worrying about costs – we've got you covered!",
    },
    {
      id: '5',
      name: 'Customer Confidence',
      desc: 'With 90% of our thriving business attributed to positive referrals, our customers become our most ardent brand promoters. Their testimonials speak to the exceptional quality of service we consistently provide. We appreciate the loyal support of our customers and eagerly look forward to building new relationships through their sincere referrals.',
    },
    {
      id: '6',
      name: 'Milestone Achievements',
      desc: "Celebrating our commitment to excellence and innovation, we've successfully completed 100+ projects across various industries. Reflecting on our experiences, we are inspired and ready to take on new challenges, reaching even greater milestones. With each achievement, we solidify our position as a dominant force in the market, prepared to tackle future challenges with tenacity.",
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
      para: 'Proven SEO Solutions Tailored Just for You – Time and Again!',
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'Excellence',
      subtitle: 'Trusted, Impactful SEO Services in UK',
    },
    {
      id: 2,
      icon: '01',
      title: 'Enhance Your On-Page SEO',
      para: 'Turn your content into captivating spells with a perfect blend of keywords, meta tags, and user-friendly design. Our magical touch in search engine optimization breathes life into every page, drawing in visitors and elevating your rankings.',
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
      title: 'Get Your Off-page SEO Soaring',
      para: 'Reach new heights in your digital journey with top-notch backlinks, social media prowess, and referrals. Our off-page SEO strategies enchant search engines, bestowing upon your website the reputation it truly deserves.',
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
      title: 'Hire Powerful SEO Techniques',
      para: 'Command the power of effective SEO techniques to ensure your content reigns supreme in the rankings. From compelling blog posts to a robust website, our wizardry with words attracts both users and algorithms. Witness your online presence ascend to new heights of visibility and success with marketingdataconsultinglimited.',
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
      title: 'Feel Our Keyword Research Magic',
      para: 'Embark on a journey into scientific trends and user behaviour with our clever wizardry. We concoct magic potions for highlights, allowing your brand to sparkle in the digital realm, captivating your target audience and outshining the competition. Embrace the magic of marketingdataconsultinglimited keyword research, where every word is a stepping stone to digital success.',
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
      title: 'Deploy Next-level Technical SEO',
      para: "Unleash the power of SEO magic through meticulous site analysis, expert link building, and strategic optimization. This enchanting blend captivates search engines, enhancing your website's performance for both users and algorithms. Trust marketingdataconsultinglimited's expertise to deliver superior quality, heightened visibility, and a remarkable customer experience that outshines your competitors.",
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
      title: 'Increase Your Reach with Guest Blogging',
      para: "Broaden the scope of your enchantment with insightful site analysis, strategic link building, and expert optimization. marketingdataconsultinglimited's SEO magic intertwines seamlessly with search engines, elevating your website's performance for both users and algorithms. Rely on our expertise to provide superior quality, heightened visibility, and an unparalleled customer experience that outshines your competitors.",
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
        <title>SEO services in UK | marketingdataconsultinglimited</title>
        <meta
          name="description"
          content="We are the number one SEO services in UK that offers assured first-page rankings. Our data-driven proven SEO methods are unique. Get a free Audit Today."
        />
        <link
          rel="canonical"
          href=" https://www.marketingdataconsultinglimited.ukseo-company-in-UK"
        />
        <meta
          property="og:title"
          content="SEO services in UK | marketingdataconsultinglimited"
        />
        <meta
          property="og:description"
          content="We are the number one SEO services in UK that offers assured first-page rankings. Our data-driven proven SEO methods are unique. Get a free Audit Today."
        />
        <meta
          property="og:url"
          content=" https://www.marketingdataconsultinglimited.ukseo-company-in-UK"
        />
        <meta
          property="og:image"
          content=" https://www.marketingdataconsultinglimited.ukassets/images/service/svg/sea.png"
        />
        <meta name="robots" content="index,follow" />

        <script type="application/ld+json">
          {`{
  "@context": "http://schema.org",
  "@type": "WebPage",
  "@id": " https://www.marketingdataconsultinglimited.ukseo-company-#webpage",
  "url": " https://www.marketingdataconsultinglimited.ukseo-company-",
  "inLanguage": "en - US",
  "name": "SEO Services ",
  "description": "We are the number one SEO Company in UK that offers assured first-page rankings. Our data-driven proven SEO methods are unique. Get a free Audit Today.",
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
          bannertitle="Get High SEO Rankings with marketingdataconsultinglimited: Your Trusted SEO Services in UK"
          bannersubtext="At marketingdataconsultinglimited, our team of SEO experts stands out in the saturated market of SEO services In UK. Going beyond mere search engine optimization, we prioritize elevating conversion rates, increasing revenues, and maximizing client benefits—all without increasing costs. Recognizing the pivotal role SEO and social media play in business growth, we understand that over 80% of internet searches influence success. In today's fiercely competitive market, innovation isn't just a choice; it's a necessity beyond survival."
          serviceimg="/assets/images/service/svg/sea.png"
          serviceimgAlt="seo services company"
          servicehead="Amplify Your Brand's Visibility with marketingdataconsultinglimited's Top-Tier SEO Services and Solutions"
          servicedesc1="Let's raise the bar and transform your online presence and elevate your digital success with marketingdataconsultinglimited, the best SEO services in UK. Our expert team combines creativity and extensive experience to enhance your rankings, ensuring commercial success that goes beyond expectations. We specialize in crafting compelling websites with seamless user experiences across devices and platforms, showcasing intuitive navigation and stunning designs. We’re team marketingdataconsultinglimited and we go beyond aesthetics and minimalism. Strategically constructed high-quality, authoritative links not only enhance the visual appeal of your online presence but also boost its significance and authority in the eyes of search engines like Google, Bing, DuckDuckGo, Ask.com, Yahoo!, Yandex, or Baidu."
          servicedesc2="What Is SEO?  SEO, or Search Engine Optimization, enhances a website's technical setup, content, and links to improve findability and relevance in user searches. This boosts rankings on search engines. Choose marketingdataconsultinglimited as your trusted SEO agency in UK, where innovation meets expertise to propel your business to unparalleled heights. We provide comprehensive SEO services tailored to not only improve rankings but also drive conversions, increase profits, and deliver unmatched benefits to your customers. Revamp your brand strategy, its identity and presence with our transformative SEO services in UK."
        />
      </div>
      <Cards card={cards} />
      <div className="px-5 container-ack md:px-0">
        <ComponentHead
          title="Platforms"
          sub="Search Engine Optimization"
          head="The platform stack for Search Engine Optimization may vary based on the specific needs of the application and the chosen approach to modernization."
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
              processhead="Why Choose Us"
              processsub="Why Choose Us?"
              processdesc="Boost your online presence with marketingdataconsultinglimited, your trusted SEO services in UK for best SEO outcomes. Our wealth of experience and industry expertise allows us to craft tailored SEO strategies aligned with your unique goals."
              processimg="/assets/images/service/svg/sea1.png"
              proocessalt="seo services"
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

export default SeoAgency;
