import React, { useState } from "react";
import ThankYouModal from "../../modal/ThankYouModal";

const Enquiry = () => {
  //form feild

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [submitText, setSubmitText] = useState("Submit");

  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //send data using api
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data after submit:", e);

    if (!name) {
      setErrorMessage("Please enter name");
    } else if (!email) {
      setErrorMessage("Please enter email");
    } else if (!emailRegex.test(email)) {
      setErrorMessage("Please enter valid email");
    } else if (!phone) {
      setErrorMessage("Please enter phone number");
    } else if (!subject) {
      setErrorMessage("Please enter subject");
    } else {
      setSubmitText("...");

      let data = {
        name,
        email,
        phone,
        subject,
        message,
      };

      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log("Response received:", res);
        console.log("data:", data);

        if (res.status === 200) {
          console.log("Response succeeded!");
          setName("");
          setEmail("");
          setPhone("");
          setSubject("");
          setMessage("");
          setSubmitText("Submitted");
          setIsModalOpen(true);
        }
      });
    }
  };
  return (
    <>
      <div className="bg-[#282828]">
        <div className="container-ack md:px-0 px-5">
          <div className="flex py-5 md:gap-[9.5rem] gap-5 items-center">
            <div className="md:col-span-2 md:px-0 px-5 md:pt-0 pt-8 w-full  relative">
              <div className="md:text-[4rem] text-[4rem] tracking-wider text-left texttransparent1 font-bold  md:pt-10 ">
                Reach Us
              </div>
              <div className="">
                <div className="absolute md:top-[5rem] top-[4rem] inset-x-0 flex justify-left">
                  <div className="text-[32px] text-left text-white font-bold max-w-xl">
                  Have You Got a Question for Us? 
                  {/*  */}

                  </div>
                </div>

                 <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pt-10">
                 We know! Our experts are here to assist you with your ideas, challenges, and aspirations. Share your requirements, and let's turn your vision into real business.</div>
            </div>

            
          </div>
          <div className="pb-5 w-full">
              <form>
                <div className="flex justify-start items-center space-x-4">
                  <div className="w-full">
                    <label for="name" className="text-white">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      className="  p-2  outline-none bg-[#D9D9D9]/50 rounded-md w-full text-white"
                    />
                  </div>
                  <div className="w-full">
                    <label for="email" className="text-white">
                      Email Address
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="  p-2  outline-none bg-[#D9D9D9]/50 rounded-md w-full text-white"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className=" flex justify-start items-center space-x-4 pt-3">
                  <div className="w-full">
                    <label for="phone" className="text-white">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      onChange={(e) => setPhone(e.target.value)}
                      className="  p-2  outline-none bg-[#D9D9D9]/50 rounded-md w-full text-white"
                    />
                  </div>
                  <div className="w-full">
                    <label for="subject" className="text-white">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="  p-2  outline-none bg-[#D9D9D9]/50 rounded-md w-full text-white"
                      name="subject"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                </div>
                <div className="pt-3">
                  <label for="message" className="text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    className="  p-2  outline-none bg-[#D9D9D9]/50 rounded-md w-full text-white"
                    rows="4"
                  />{" "}
                </div>
                {errorMessage ? (
                  <p className="text-sm text-red-500">{errorMessage}</p>
                ) : (
                  ""
                )}
                <div className="pt-4">
                  <button
                    className=" bg-transparent border border-white text-white px-12 py-2 rounded-md"
                    type="submit"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    {submitText}
                  </button>
                </div>
              </form>
            </div>
        </div>
      </div>
      </div>
      {isModalOpen ? <ThankYouModal /> : ""}
      </>
  );
  }

export default Enquiry;
