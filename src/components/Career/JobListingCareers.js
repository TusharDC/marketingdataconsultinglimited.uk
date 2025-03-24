import React from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import ComponentHead from '../Common/ComponentHead';
import ThankYouModal from '../modal/ThankYouModal';

const JobListData = [
  {
    id: 1,
    title: 'Software Development',
    name: 'React.JS Developer ',
    discription:
      'We’re looking for a Experienced React.JS Developer to join our team.',
    experice: '5+ Years',
    Salary: '5 - 7 LPA',
    Skills:
      'React.Js, Flux, Flow, Redux, JavaScript, CSS, HTML, functional programming,REST APIs, Debugging, Backend API Integration etc.',

    jobsch: '',
  },
  {
    id: 2,
    title: 'Software Development',
    name: 'Back-end Developer ',
    discription:
      'We’re looking for a mid-level Back-end Developer to join our team.',
    experice: '5-7 Years',
    Salary: '10-20 LPA',
    Skills: 'Python, PHP, Java, C#, node.js',
    jobsch: '',
  },
  {
    id: 3,
    title: 'Digital Marketing',
    name: 'SEO Executive ',
    discription: 'We’re looking for a SEO Executive to join our team.',
    experice: '4+ Years',
    Salary: '3.5-5 LPA',
    Skills: 'Onpage, Offpage, Technical  ',
    jobsch: '',
  },
];
const JobListingCareers = () => {
  //modal state
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  //form feild

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');

  const [experience, setExperience] = useState('');
  const [currentCompany, setCurrentcompany] = useState('');
  const [skills, setSkills] = useState('');
  const [currentSalary, setCurrentsalary] = useState('');
  const [expectedSalary, setExpectedSalary] = useState('');
  const [relocate, setRelocate] = useState('');
  const [message, setMessage] = useState('');

  const [submitText, setSubmitText] = useState('Send');

  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //send data using api
  const handleSubmit = async e => {
    e.preventDefault();
    console.log('data after submit:', e);

    if (!name) {
      setErrorMessage('Please enter name');
    } else if (!email) {
      setErrorMessage('Please enter email');
    } else if (!emailRegex.test(email)) {
      setErrorMessage('Please enter valid email');
    } else if (!phone) {
      setErrorMessage('Please enter phone number');
    } else if (!position) {
      setErrorMessage('Please enter position');
    } else if (!experience) {
      setErrorMessage('Please enter experience');
    } else if (!currentCompany) {
      setErrorMessage('Please enter current Company');
    } else if (!skills) {
      setErrorMessage('Please enter skills');
    } else if (!currentSalary) {
      setErrorMessage('Please enter current Salary');
    } else if (!expectedSalary) {
      setErrorMessage('Please enter expected Salary');
    } else if (!relocate) {
      setErrorMessage('Please enter relocate');
    } else {
      setSubmitText('...');

      let data = {
        name,
        email,
        phone,
        position,
        experience,
        currentCompany,
        skills,
        currentSalary,
        expectedSalary,
        relocate,
        message,
      };

      fetch('/api/career', {
        method: 'POST',
        headers: {
          Accept: 'application/json, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(res => {
        // console.log("Response received:", res);
        // console.log("data:", data);

        if (res.status === 200) {
          console.log('Response succeeded!');
          setName('');
          setEmail('');
          setPhone('');
          setPosition('');
          setMessage('');
          setSubmitText('Submitted');
          closeModal();
          setIsModalOpen(true);
        }
      });
    }
  };

  return (
    <>
      <div className="container-ack  md:px-0 px-5">
        <ComponentHead
          title="Career"
          sub="Thriving Opportunities"
          head="Thriving in the Tech Era: Exploring Lucrative Career Paths in the IT Industry."
        />

        <div className="md:flex  justify-between items-center  flex-wrap pt-10 ">
          {JobListData.map((JobList, index) => (
            <div
              key={index}
              className="border border-[#D2D2D280] p-4 rounded-md md:w-[49%] mb-6 md:mt-0 mt-10"
            >
              <small className="bg-[#090909] text-[#ABABAB] text-[12px] rounded-[20px] py-1 px-3">
                {' '}
                {JobList.title}{' '}
              </small>
              <h4 className="py-2 text-[20px] font-bold">{JobList.name}</h4>
              <p className="text-textcolor text-[1em] mb-2 w-[80%]">
                {' '}
                {JobList.discription}
              </p>
              <div className="flex justify-between mb-2">
                <div className="col6Exp">
                  <b> Total Experience: </b>{' '}
                  <span className="text-textcolor text-[14px]">
                    {' '}
                    {JobList.experice}{' '}
                  </span>
                </div>
                <div className="col6Exp">
                  <b> Salary: </b>{' '}
                  <span className="text-textcolor text-[14px]">
                    {JobList.Salary}{' '}
                  </span>
                </div>
              </div>

              <p className="text-[16px] mb-5">
                {' '}
                <b className="text-[14px]"> Skills: </b>{' '}
                <span className="text-[14px] text-textcolor">
                  {JobList.Skills}
                </span>
              </p>

              <div className="md:flex justify-between">
                <div className="Rmte">
                  <svg
                    width="12"
                    className="svgimg inline-block mr-1"
                    height="18"
                    viewBox="0 0 15 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.25 0.84375C3.2648 0.84375 0.03125 3.75426 0.03125 7.34063C0.03125 13.1156 7.25 21.0562 7.25 21.0562C7.25 21.0562 14.4688 13.1156 14.4688 7.34063C14.4688 3.75426 11.2352 0.84375 7.25 0.84375ZM7.25 10.95C6.67891 10.95 6.12064 10.7807 5.64579 10.4634C5.17094 10.1461 4.80085 9.69512 4.5823 9.1675C4.36375 8.63988 4.30657 8.0593 4.41798 7.49918C4.5294 6.93906 4.80441 6.42455 5.20823 6.02073C5.61205 5.61691 6.12656 5.3419 6.68668 5.23048C7.2468 5.11907 7.82738 5.17625 8.355 5.3948C8.88262 5.61335 9.33359 5.98344 9.65087 6.45829C9.96815 6.93314 10.1375 7.49141 10.1375 8.0625C10.1367 8.82806 9.83218 9.56202 9.29085 10.1033C8.74952 10.6447 8.01556 10.9492 7.25 10.95Z" />
                  </svg>

                  <span className="text-textcolor text-[14px]">
                    {JobList.jobsch}
                  </span>
                </div>
                <div className="Rmte">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="svgimg inline-block mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 9H11V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4C9.73479 4 9.48043 4.10536 9.2929 4.29289C9.10536 4.48043 9 4.73478 9 5V10C9 10.2652 9.10536 10.5196 9.2929 10.7071C9.48043 10.8946 9.73479 11 10 11H13C13.2652 11 13.5196 10.8946 13.7071 10.7071C13.8946 10.5196 14 10.2652 14 10C14 9.73478 13.8946 9.48043 13.7071 9.29289C13.5196 9.10536 13.2652 9 13 9ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z" />
                  </svg>

                  <span className="text-textcolor text-[14px]">Full-time</span>
                </div>
                <div className="AplyBtnSwh md:mt-0 mt-7">
                  <button
                    onClick={openModal}
                    className="bg-secondary text-white px-8 py-1 text-[12px] border border-transparent rounded-md mr-2"
                  >
                    {' '}
                    Apply{' '}
                  </button>
                  <Link
                    href={'/contact'}
                    className="bg-white text-black border border-secondary px-5 py-1 text-[12px] rounded-md  hover:bg-black hover:text-white"
                  >
                    {' '}
                    Know More{' '}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="w-full ">
                    <div className="flex justify-end">
                      <AiOutlineClose
                        size={25}
                        className="font-bold hover:drop-shadow-xl hover:scale-105"
                        onClick={closeModal}
                      />
                    </div>
                    <div className="md:grid grid-cols-12">
                      <h2 className="absolute text-8xl font-bold text-gray-200 left-0 top-20 -z-10">
                        Join
                      </h2>
                      <div className="col-span-5 px-8 flex flex-col justify-center h-96 pt-20 space-y-6">
                        <div className="">
                          <h2 className="text-4xl">
                            marketingdataconsultinglimited
                          </h2>
                        </div>
                        <p className="">
                          marketingdataconsultinglimited Website Design &
                          Development Company.
                        </p>
                        <p className="text-gray-600">
                          It's a Website Design & Development Company deal in
                          website designing, website development and website
                          promotion on various search engine building online
                          reputation and marketing websites for a wide range of
                          business professionals.
                        </p>
                      </div>

                      <div className="col-span-7 p-8 shadow-xl rounded-md">
                        <h1 className="text-xl font-semibold">
                          Join Our Team!
                        </h1>
                        <p className="font-normal text-sm">
                          Join our team and embark on an exciting journey of
                          innovation and growth.
                        </p>
                        <form className="md:grid grid-cols-2 gap-4 mt-6 text-sm">
                          <div className="">
                            <label
                              for="name"
                              className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                              Name
                            </label>
                            <input
                              id="name"
                              type="name"
                              name="name"
                              onChange={e => setName(e.target.value)}
                              placeholder="Enter Your Name"
                              autocomplete="name"
                              className="block rounded w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="email"
                              className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                              E-mail
                            </label>
                            <input
                              id="email"
                              type="text"
                              name="email"
                              onChange={e => setEmail(e.target.value)}
                              placeholder="Enter Your Email"
                              className="block rounded w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="phone"
                              className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                              Phone Number
                            </label>
                            <input
                              id="phone"
                              type="text"
                              name="phone"
                              onChange={e => setPhone(e.target.value)}
                              placeholder="Enter Your Phone"
                              className="block rounded w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="position"
                              className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                              Position
                            </label>
                            <input
                              id="position"
                              type="text"
                              name="position"
                              onChange={e => setPosition(e.target.value)}
                              placeholder="Enter Your Position"
                              className="block rounded w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="experience"
                              className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                              Year Of Experience
                            </label>
                            <input
                              id="experience"
                              type="text"
                              name="experience"
                              onChange={e => setExperience(e.target.value)}
                              placeholder="Enter Your Year Of Experience"
                              className="block rounded w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="currentcompany"
                              className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                              Current Company
                            </label>
                            <input
                              id="currentcompany"
                              type="text"
                              name="currentcompany"
                              onChange={e => setCurrentcompany(e.target.value)}
                              placeholder="Enter Your Current Company"
                              className="block rounded w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                              required
                            />
                          </div>
                          <div className="col-span-2">
                            <label
                              for="skills"
                              className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                              Skills
                            </label>
                            <input
                              id="skills"
                              type="text"
                              name="skills"
                              onChange={e => setSkills(e.target.value)}
                              placeholder="Enter Your Skills"
                              className="block rounded w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="currentsalary"
                              className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                              Current Salary
                            </label>
                            <input
                              id="currentsalary"
                              type="text"
                              name="currentsalary"
                              onChange={e => setCurrentsalary(e.target.value)}
                              placeholder="Enter Your Current Salary"
                              className="block rounded w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="expectedsalary"
                              className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                              Expected Salary
                            </label>
                            <input
                              id="expectedsalary"
                              type="text"
                              name="expectedsalary"
                              onChange={e => setExpectedSalary(e.target.value)}
                              placeholder="Enter Your Expected Salary"
                              className="block rounded w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                              required
                            />
                          </div>
                          <div className="col-span-2">
                            <label
                              for="relocate"
                              className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                              Are You Willing To Relocate To (Yes/No) ?
                            </label>

                            <div className="flex gap-6 items-center py-2">
                              <div class="flex items-center">
                                <input
                                  id="relocateYes"
                                  type="radio"
                                  value="Yes"
                                  class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                  aria-labelledby="relocateYes"
                                  aria-describedby="relocateYes"
                                  name="relocate"
                                  onChange={e => setRelocate(e.target.value)}
                                />
                                <label
                                  for="relocateYes"
                                  class="text-sm font-medium text-gray-900 ml-2 block"
                                >
                                  Yes
                                </label>
                              </div>

                              <div class="flex items-center">
                                <input
                                  id="relocateNo"
                                  type="radio"
                                  name="relocate"
                                  onChange={e => setRelocate(e.target.value)}
                                  value="No"
                                  class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                  aria-labelledby="relocateNo"
                                  aria-describedby="relocateNo"
                                />
                                <label
                                  for="relocateNo"
                                  class="text-sm font-medium text-gray-900 ml-2 block"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <label
                              for="message"
                              className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                              Additional Information
                            </label>
                            <textarea
                              id="message"
                              rows={5}
                              type="text"
                              name="message"
                              onChange={e => setMessage(e.target.value)}
                              placeholder="Enter Your Additional Information"
                              className="block rounded w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                              required
                            />
                          </div>
                          {/* <div>
                            <label
                              for="uploadFile"
                              className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                              Upload Resume
                            </label>
                            <input
                              id="uploadFile"
                              type="file"
                              name="uploadFile"
                              placeholder="Upload File Here"
                              className="block rounded w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                              required
                            />
                          </div> */}
                          {errorMessage ? (
                            <p className="text-sm text-red-500">
                              {errorMessage}
                            </p>
                          ) : (
                            ''
                          )}
                          {/* <p className="col-span-2 text-sm py-4">
                            Lorem ipsum dolor sit amet consectetur. Accumsan ut
                            ultricies lectus sem nunc.
                          </p> */}
                          <button
                            type="submit"
                            onClick={e => {
                              handleSubmit(e);
                            }}
                            className="col-span-2 w-full py-3 rounded-xl font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                          >
                            <span className="text-base"> {submitText} </span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {isModalOpen ? <ThankYouModal /> : ''}
    </>
  );
};

export default JobListingCareers;
