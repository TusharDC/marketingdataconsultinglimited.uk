import BlogDetail from '../components/Blogs/BlogDetail';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import React from 'react';
import { blogs } from '../constants/blogs';

const blogDetails = ({ blog }) => {
  return (
    <div>
      <Header />
      <BlogDetail blog={blogs[0]} />
      <Footer />
    </div>
  );
};

export default blogDetails;
