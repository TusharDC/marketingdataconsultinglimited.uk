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

const WebsiteDevelopment = () => {
  const processes = [
    {
      id: '1',
      name: 'Understanding Client Requirement',
      desc: "No two businesses are alike, and their websites shouldn't be either. We craft intuitive features that drive conversions and build secure platforms that enhance customer trust – all to help you discover a website that's your brand's digital fingerprint. Let's help you build something online that resonates, converts, and thrives.",
    },
    {
      id: '2',
      name: 'Research and Analysis',
      desc: 'We crack the code of your unique market landscape, dissecting industry trends, competitor strategies, and hidden opportunities. Get ready for a 30% boost in leads, conversion rates that rise by 20%, and an ever-growing online presence that leaves your competition in the dust. Let’s begin.',
    },
    {
      id: '3',
      name: 'Planning and Strategy',
      desc: "Our award-winning team crafts business-centric websites that enhance your brand and skyrocket user engagement. We blend cutting-edge web design stack, like immersive storytelling and AI-powered personalization, with flawless cross-device functionality. Let's turn your vision into reality.",
    },
    {
      id: '4',
      name: 'Content Creation and Optimization',
      desc: "We create content that Buzzes! Imagine engaging blog posts that skyrocket traffic 30% and landing pages that magically convert visitors into leads. Our content-bees craft SEO-powered stories & targeted pages that hook users, get Google's seal of approval, and deliver magic for your brand. Let’s get started.",
    },
    {
      id: '5',
      name: 'Testing and Quality Assurance',
      desc: 'We meticulously test and fine-tune every detail of your website, eliminating 99% of potential bugs before launch. Our team obsesses over every pixel and interaction to deliver websites and apps that are not just functional, but delightful. Let’s engineer your online presence, together. Connect with us now!',
    },
    {
      id: '6',
      name: 'Go-Live',
      desc: 'Make your website live with confidence. We orchestrate a flawless transition, eliminating downtime and ensuring lightning-fast page loads that wow your users. Experience a website that delights, drives conversions by 25%, and delivers peak performance from day one. Let’s discuss. Let’s converse!',
    },
  ];
  const techs = [
    {
      id: '1',
      img: '/assets/images/service/svg/react.svg',
      name: 'React.js',
    },
    {
      id: '2',
      img: '/assets/images/service/svg/flutter.svg',
      name: 'Angular',
    },
    {
      id: '3',
      img: '/assets/images/service/svg/next.png',
      name: 'Next.js',
    },
    {
      id: '4',
      img: '/assets/images/service/svg/nodejs.svg',
      name: 'Node.js',
    },
    {
      id: '5',
      img: '/assets/images/service/svg/express.png',
      name: 'Express',
    },
    {
      id: '6',
      img: '/assets/images/service/svg/html.png',
      name: 'HTML',
    },
    {
      id: '7',
      img: '/assets/images/service/svg/bootstrap.png',
      name: 'Bootstrap',
    },
    {
      id: '8',
      img: '/assets/images/service/svg/php.png',
      name: 'php',
    },
    {
      id: '9',
      img: '/assets/images/service/svg/laravel.png',
      name: 'Laravel',
    },
    {
      id: '10',
      img: '/assets/images/service/svg/codeigniter.png',
      name: 'Codeigniter',
    },
    {
      id: '11',
      img: '/assets/images/service/svg/net.png',
      name: 'Asp.net',
    },
    {
      id: '12',
      img: '/assets/images/service/svg/phython.png',
      name: 'phython',
    },
    {
      id: '13',
      img: '/assets/images/service/svg/java.svg',
      name: 'JAVA',
    },
    {
      id: '14',
      img: '/assets/images/service/svg/andriod.png',
      name: 'Android',
    },
    {
      id: '15',
      img: '/assets/images/service/svg/flutter.svg',
      name: 'Flutter',
    },
    {
      id: '16',
      img: '/assets/images/service/svg/ios.svg',
      name: 'iOS',
    },
    {
      id: '17',
      img: '/assets/images/service/svg/react.svg',
      name: 'ReactNative',
    },
    {
      id: '18',
      img: '/assets/images/service/svg/sql.png',
      name: 'MySQL',
    },
    {
      id: '19',
      img: '/assets/images/service/svg/mongodb.png',
      name: 'MonogoDb',
    },
    {
      id: '20',
      img: '/assets/images/service/svg/postgresql.svg',
      name: 'PostgreSQL',
    },
    {
      id: '21',
      img: '/assets/images/service/svg/amazon-web-services.svg',
      name: 'AWS',
    },
    {
      id: '22',
      img: '/assets/images/service/svg/wordpress.png',
      name: 'Wordpress',
    },
    {
      id: '23',
      img: '/assets/images/service/svg/shopify.svg',
      name: 'Shopify',
    },
    {
      id: '24',
      img: '/assets/images/service/svg/joomla.svg',
      name: 'Joomla',
    },
    {
      id: '25',
      img: '/assets/images/service/svg/magento.svg',
      name: 'Magento',
    },
    {
      id: '26',
      img: '/assets/images/service/svg/webflow.svg',
      name: 'Webflow',
    },
    {
      id: '27',
      img: '/assets/images/service/svg/firebase.svg',
      name: 'Firebase',
    },
    {
      id: '28',
      img: '/assets/images/service/svg/jquery.svg',
      name: 'JQuery',
    },
  ];
  const cards = [
    {
      id: 1,
      para: 'Future-proof your business with future’s apps and websites today with marketingdataconsultinglimited. Supercharge performance, scale & agility with cutting-edge tech-stack. Boost employee productivity, engage more users, and unlock revenue growth like never before.',
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'Capabilities',
      subtitle: 'Agile Web Development Services',
    },
    {
      id: 2,
      icon: '01',
      title: 'Tailored Design, Exceptional Experience',
      para: 'We build custom websites that reflect your brand and empower your users. From intuitive navigation to pixel-perfect aesthetics, we craft experiences that engage and convert.',
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
      title: 'Seamless Across Screens',
      para: "Responsive design isn't just a checkbox; it's our mantra. Your website will look and perform flawlessly on any device, ensuring a smooth journey for every visitor.",
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
      title: 'E-commerce Made Easy',
      para: 'Sell smarter, not harder. We integrate robust e-commerce solutions with secure payments, user-friendly catalogues, and streamlined checkouts, driving conversions and delighting your customers.',
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
      title: 'SEO Magic',
      para: 'We weave SEO into the fabric of your website, boosting visibility and attracting organic traffic like a magnet. Climb the search rankings and watch your audience grow.',
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
      title: 'Frictionless Flow',
      para: 'UI/UX design that sings beautiful melodies. We obsess over intuitive interfaces and smooth navigation, minimising bounce rates and maximising user engagement. Your website will feel like a joy to use, not a chore.',
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
      title: 'Powering Your Vision',
      para: "Need a custom web application to solve your unique business challenges? We're your digital architects, crafting bespoke solutions that seamlessly integrate with your workflow and enhance user engagement.",
      bgcolor: 'bg-[#F6F8F9]',
      cols: 'md:col-span-1',
      display: 'icon',
      textsize: 'text-xl',
      fontbold: 'font-bold',
      textcolor: 'text-secondary',
      main: 'hidden',
    },
  ];
  return (
    <div>
      <Head>
        <title>Web Design services in UK| marketingdataconsultinglimited</title>
        <meta
          name="description"
          content="With marketingdataconsultinglimited, you will have access to a wide range of powerful tools and functionalities tailored to meet the unique needs of web design services in UK. From seamless project management to collaborative coding features, our platform empowers your team to work together efficiently and effectively."
        />
        <link
          rel="canonical"
          href=" https://www.marketingdataconsultinglimited.co.ukwebsite-development-company-in-UK"
        />

        <meta
          property="og:title"
          content="Web Design services in UK| marketingdataconsultinglimited"
        />
        <meta
          property="og:description"
          content="With marketingdataconsultinglimited, you will have access to a wide range of powerful tools and functionalities tailored to meet the unique needs of web design services in UK. From seamless project management to collaborative coding features, our platform empowers your team to work together efficiently and effectively."
        />
        <meta
          property="og:url"
          content=" https://www.marketingdataconsultinglimited.co.ukwebsite-development-company-in-UK"
        />
        <meta
          property="og:image"
          content=" https://www.marketingdataconsultinglimited.co.ukassets/images/service/svg/web.png"
        />
        <meta name="robots" content="index,follow" />

        <script type="application/ld+json">
          {`{
  "@context": "http://schema.org",
  "@type": "WebPage",
  "@id": " https://www.marketingdataconsultinglimited.co.ukwebsite-development-company-#webpage",
  "url": " https://www.marketingdataconsultinglimited.co.ukwebsite-development-company-",
  "inLanguage": "en - US",
  "name": "Website Development",
  "description": "With marketingdataconsultinglimited, you will have access to a wide range of powerful tools and functionalities tailored to meet the unique needs of web development companies in UK. From seamless project management to collaborative coding features, our platform empowers your team to work together efficiently and effectively.",
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
          bannertitle="marketingdataconsultinglimited: Your Reliable Website Development Services In UK"
          bannersubtext="marketingdataconsultinglimited, a name synonymous with innovation and originality, has carved itself as a prominent Web Design and Website Development Services Partner in the country. Our talented team of UX/UX designers and web developers, empowered by our agile software development practices, meticulously craft outstanding web design and software solutions. Each project is a bespoke creation, tailored to address the unique requirements of our clients, consistently exceeding expectations. Contact us for best website development services in UK."
          serviceimg="/assets/images/service/svg/web.png"
          serviceimgAlt="Web Development Company"
          servicehead="Empowering Growth through Scalable and Agile Software Development"
          servicedesc1="Begin your web app development with marketingdataconsultinglimited's futuristic  agile software development strategy, ensuring reliability for greater impact. Our dedicated team of web developers collaborates with you on a personalised 1:1 basis, ensuring a meticulous approach to address your unique concerns. Join the league of 120+ growing businesses that entrust marketingdataconsultinglimited for cutting-edge web development services. Our seasoned experts specialise in crafting highly functional APIs, seamless custom web applications, dynamic hybrid mobile apps, and providing unparalleled website development services in UK."
          servicedesc2="marketingdataconsultinglimited   crafts next-generation digital experiences like web platforms, mobile apps, or custom software solutions powered by cloud-native systems. We increase your brand presence by 20% (and further boost in increased leads and higher conversions), delivering unparalleled scalability, agility, and elevated customer engagement. Let's build the future of your brand. Connect with us today!"
        />
      </div>
      <Cards card={cards} />
      <div className="px-5 container-ack md:px-0">
        <ComponentHead
          title="Technology"
          sub="Agile Website Development"
          head="The right tech stack isn’t just about functionality—it’s the foundation for a seamless, engaging user experience. Let’s build it together."
        />
        <Technology tech={techs} />
      </div>

      <div className="px-5 container-ack md:px-0">
        <ProccessHead
          processhead="Choose Us"
          processsub="Why Choose a Website Development Company"
          processdesc="Your website is more than just an online presence – it's your first and lasting impression. Begin the journey of crafting your dream website with us today!"
          processimg="/assets/images/service/svg/app1.png"
          proocessalt="website Design Company"
        />
        <Process process={processes} />
      </div>

      <div>
        <div
          style={{
            backgroundImage:
              'url("/assets/images/service/servicebackground.png")',
          }}
        >
          {/* <div className="px-5 container-ack md:px-0">
            <ProcessHead
              processhead="Services"
              processsub="App Modernization On Peek"
              processdesc="Full-scope app modernization services you can start using quickly (even in weeks!) to fix, boost, and revamp your systems with teams that have worked for over 160 companies."
              processimg="/assets/images/service/videoservice.png"
            />
            <Process process={processes} />
          </div> */}
        </div>
        <div
          className="h-[7.5rem]"
          style={{
            backgroundImage: 'url("/assets/images/service/wave.png")',
          }}
        ></div>
      </div>

      <Work />
      {/* <Section /> */}
      <Enquiry />
      <Clients />
      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;
