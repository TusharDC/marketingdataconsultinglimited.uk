import Link from "next/link";
import React from "react";

const SingleBlog = () => {
    return (
        <div className="px-5 pt-5 pb-10 container-ack md:pt-16 md:px-0 md:pb-0">
            <div className="grid md:grid-cols-2 gap-12 items-center  border-2 border-[#F6F8F9] hover:drop-shadow-sm hover:bg-[#F6F8F9] rounded-xl p-4">
                <img
                    src="/assets/images/blog/blogone.png"
                    alt=""
                    className="rounded-md"
                />

                <div className="">
                    <p className="w-full text-base text-justify text-textcolor font-text ">
                        5 March 2025{" "}
                    </p>
                    <h2 className="py-3 text-lg font-semibold text-left text-secondary">
                        Lorem ipsum dolor sit amet in maecenas tinc
                    </h2>
                    <div className="w-full pb-4 text-base text-justify  text-textcolor font-text">
                        Lorem ipsum dolor sit amet consectetur. Sapien porttitor
                        non ultrices id enim lectus sagittis viverra interdum.
                        Nisi lobortis tincidunt convallis viverra. Scelerisque
                        sed orci amet proin cras quam pellentesque. Sollicitudin
                        sed velit nunc nunc morbi sed aliquam.
                    </div>
                    <div className="flex justify-between pb-5">
                        <Link href="/blog-details">
                            <button className="py-2 text-sm text-black border-b-2 border-primary">
                                Read More
                            </button>
                        </Link>
                        <div className="flex space-x-4">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.00048 17.25C8.72449 17.2497 8.45499 17.1663 8.22704 17.0107C4.85013 14.7183 3.3879 13.1465 2.58138 12.1638C0.862626 10.0691 0.039774 7.91848 0.0629771 5.58957C0.0900474 2.92078 2.23118 0.75 4.83595 0.75C6.73001 0.75 8.04184 1.81691 8.80583 2.70551C8.83003 2.73337 8.85993 2.75572 8.89351 2.77103C8.92709 2.78634 8.96357 2.79427 9.00048 2.79427C9.03738 2.79427 9.07386 2.78634 9.10744 2.77103C9.14102 2.75572 9.17093 2.73337 9.19513 2.70551C9.95911 1.81605 11.2709 0.75 13.165 0.75C15.7698 0.75 17.9109 2.92078 17.938 5.59C17.9612 7.91934 17.1375 10.0699 15.4196 12.1642C14.6131 13.1469 13.1508 14.7187 9.77391 17.0111C9.54592 17.1665 9.27642 17.2498 9.00048 17.25Z"
                                    fill="black"
                                />
                            </svg>
                            <svg
                                width="20"
                                height="18"
                                viewBox="0 0 20 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.5312 0.75H3.46875C2.83113 0.751814 2.22014 1.00591 1.76928 1.45678C1.31841 1.90764 1.06431 2.51863 1.0625 3.15625V11.4062C1.06431 12.0439 1.31841 12.6549 1.76928 13.1057C2.22014 13.5566 2.83113 13.8107 3.46875 13.8125H5.1875V17.25L9.21453 13.8924C9.27637 13.8408 9.35439 13.8125 9.43496 13.8125H16.5312C17.1689 13.8107 17.7799 13.5566 18.2307 13.1057C18.6816 12.6549 18.9357 12.0439 18.9375 11.4062V3.15625C18.9357 2.51863 18.6816 1.90764 18.2307 1.45678C17.7799 1.00591 17.1689 0.751814 16.5312 0.75Z"
                                    stroke="black"
                                    stroke-width="1.375"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.4998 12.4373C14.1294 12.4372 13.7628 12.5121 13.4222 12.6576C13.0816 12.8031 12.774 13.0161 12.518 13.2838L6.15867 9.70582C6.28185 9.24323 6.28185 8.75646 6.15867 8.29387L12.518 4.71586C12.9811 5.19597 13.6034 5.49076 14.2682 5.54502C14.933 5.59927 15.5948 5.40927 16.1296 5.0106C16.6644 4.61192 17.0355 4.03194 17.1734 3.3793C17.3113 2.72666 17.2064 2.04614 16.8786 1.46523C16.5507 0.884329 16.0223 0.442894 15.3923 0.223629C14.7623 0.00436329 14.074 0.022312 13.4563 0.274112C12.8386 0.525913 12.334 0.994287 12.0368 1.59149C11.7397 2.18869 11.6705 2.87375 11.8421 3.51832L5.48277 7.09633C5.1029 6.70026 4.61322 6.4269 4.07672 6.31142C3.54022 6.19594 2.98143 6.24362 2.47225 6.44832C1.96307 6.65303 1.52678 7.0054 1.21951 7.46011C0.912243 7.91481 0.748047 8.45105 0.748047 8.99984C0.748047 9.54863 0.912243 10.0849 1.21951 10.5396C1.52678 10.9943 1.96307 11.3467 2.47225 11.5514C2.98143 11.7561 3.54022 11.8037 4.07672 11.6883C4.61322 11.5728 5.1029 11.2994 5.48277 10.9034L11.8421 14.4814C11.6947 15.0365 11.7248 15.6238 11.9281 16.1609C12.1314 16.6981 12.4979 17.1581 12.9759 17.4764C13.454 17.7947 14.0198 17.9553 14.5938 17.9357C15.1678 17.9162 15.7213 17.7173 16.1765 17.3672C16.6318 17.017 16.966 16.5331 17.1323 15.9833C17.2985 15.4336 17.2885 14.8456 17.1035 14.3018C16.9186 13.7581 16.568 13.2859 16.101 12.9515C15.6341 12.6171 15.0741 12.4373 14.4998 12.4373Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
