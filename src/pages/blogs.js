import Bloglist from '../components/Blogs/BlogList';
import SingleBlog from '../components/Blogs/SingleBlog';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import Heading from '../components/Common/Heading';
import Head from 'next/head';
import React from 'react';

const Blogs = () => {
  return (
    <div>
      <Header />
      <Head>
        <title>Blogs</title>
      </Head>
      <div
        className=""
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Heading
          titletext="Blogs"
          title="Blogs "
          subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
        />
        {/* <SingleBlog /> */}
      </div>
      <Bloglist />
      <Footer />
    </div>
  );
};

export default Blogs;
