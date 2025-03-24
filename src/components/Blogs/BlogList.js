import React from 'react';
import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';

const Bloglist = () => {
  console.log(allPosts);
  return (
    <div className="px-5 container-ack md:py-12 md:px-0">
      <div className="grid gap-10 md:grid-cols-3">
        {allPosts?.map(
          post =>
            post?.draft !== 'true' && (
              <Link href={`/blogs/${post.slug}`} key={post.title}>
                <div className="group relative text-center px-5 pt-4 border-2 border-[#F6F8F9] hover:drop-shadow-sm hover:bg-[#F6F8F9] hover:border-2 rounded-xl">
                  <img src={post?.image} alt="" className="rounded-md" />

                  <div className="pt-5">
                    <p className="w-full text-sm text-justify text-textcolor font-text ">
                      <time
                        dateTime={post.date}
                        className="block mb-2 text-xs text-gray-600"
                      >
                        {format(parseISO(post.date), 'LLLL d, yyyy')}
                      </time>
                    </p>
                    <h2 className="py-3 text-base font-semibold text-left text-secondary">
                      {post?.title}
                    </h2>
                    <div className="w-full pb-4 text-sm text-justify text-textcolor group-hover:text-secondary font-text">
                      {post?.description.slice(0, 150) +
                        (post?.description.length > 100 ? '...' : '')}
                    </div>
                    <div className="flex justify-between pb-5">
                      <button className="pt-2 text-sm text-black border-b-2 border-primary">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            )
        )}
      </div>

      {/* <div className="flex items-center justify-center md:py-10">
        <button className="px-12 py-2 bg-white border-2 rounded-md border-secondary text-secondary hover:bg-secondary hover:text-white">
          View All
        </button>
      </div> */}
    </div>
  );
};

export default Bloglist;
