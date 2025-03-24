import React from "react";

const BlogDetail = ({ blog }) => {
    return (
        <div className="px-5 pt-16 container-ack md:px-0">
            <div className="text-4xl text-center font-bold md:w-[70%] mx-auto">
                {blog.title}
            </div>

            <img
                src="/assets/images/blog/blogdetail.png"
                alt=""
                className="pt-10"
            />

            <div className="flex items-center justify-between pt-3">
                <p className="w-full text-base text-justify text-textcolor font-text ">
                    5 March 2025{" "}
                </p>
            </div>

            <div className="pt-6 text-lg tracking-tighter text-justify md:text-left md:tracking-normal">
                {blog.titleDescription}
            </div>

            <div className="mt-14">
                <div className="float-left max-w-lg mb-5 mr-5">
                    <img src="/assets/images/blog/blogdetailtwo.png" alt="" />
                </div>

                <div>
                    <ul>
                        {blog?.trends?.map((trend, index) => (
                            <li key={index} className="mb-2">
                                <strong>{trend?.title}:</strong>{" "}
                                {trend?.description}
                            </li>
                        ))}
                    </ul>
                    <div
                        dangerouslySetInnerHTML={{ __html: `${blog?.htmlStr}` }}
                    ></div>
                </div>
                <div className="clear-both"></div>
            </div>

            <div>
                <div>
                    <h2 className="mt-6 mb-3 text-3xl font-semibold">
                        {blog?.bonusTitle}
                    </h2>
                </div>
                <ul>
                    {blog?.bonus?.map((trend, index) => (
                        <li key={index} className="mb-2">
                            <strong>{trend?.title}:</strong>{" "}
                            {trend?.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlogDetail;
