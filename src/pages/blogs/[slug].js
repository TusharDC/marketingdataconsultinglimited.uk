import Head from 'next/head';
import React from 'react';
import Header from '../../components/Common/Header';
import Heading from '../../components/Common/Heading';
import Footer from '../../components/Common/Footer';
import { allPosts } from 'contentlayer/generated';
import { Disclosure } from '@headlessui/react';
import { FiChevronRight } from 'react-icons/fi';
export const getStaticPaths = () => {
  const paths = allPosts.map(post => `/blogs/${post.slug}`);
  return { paths, fallback: false };
};

export const getStaticProps = context => {
  const slug = context.params.slug;
  const post = allPosts.find(post => post.slug === slug);
  return { props: { post } };
};

export default function Blog({ post }) {
  console.log(post.faqs);
  return (
    <div>
      <Header />
      <Head>
        <title>{post?.title}</title>
      </Head>
      <div
        className=""
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Heading titletext="Blog" title="Blog" subtext={post?.description} />
      </div>
      <div className="px-5 [&_.prose]:max-w-[100ch] container-ack md:py-12 md:px-0">
        <article
          className="prose  lg:prose-xl
            [&_h1]:text-4xl [&_h2]:text-2xl [&_h3]:text-xl [&_h4]:text-lg [&_h5]:text-base [&_h6]:text-sm
        "
        >
          <div dangerouslySetInnerHTML={{ __html: post?.body?.html }} />
        </article>

        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-center mb-5 text-xl font-semibold">
            FAQ
          </div>
          {post?.faqs?.map((faq, index) => {
            return (
              <div className="rounded-sm" key={index}>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`px-3 mb-3 ${
                          open ? 'bg-gray-200' : 'bg-gray-100 '
                        } flex items-center w-full gap-2 py-1`}
                      >
                        <p className="flex-1 text-lg text-left">
                          {faq?.question}
                        </p>
                        <FiChevronRight
                          className={`shrink-0 ${
                            open ? 'rotate-90 transform' : ''
                          }`}
                        />{' '}
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-500">
                        <p className="px-3 pb-4">{faq?.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
