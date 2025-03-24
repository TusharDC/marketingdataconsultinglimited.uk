import React from "react";

const DetailPage = () => {
  const employment = [
    {
      id: 1,
      year: "2005 – 2007",
      university: " Los Angeles University",
      country: "New York",
      desc: "Successfully translated subject matter into concrete design for newsletters, promotional materials and sales collateral. Created design theme and graphics for marketing and sales presentations, training videos and corporate websites.",
    },
    {
      id: 2,
      year: "2005 – 2007",
      university: " Los Angeles University",
      country: "Los Angeles",
      desc: "Created new design themes for marketing and collateral materials. Collaborated with creative team to design and produce computer-generated artwork for marketing and promotional materials.",
    },
  ];
  const skill = [
    {
      id: 1,
      skill: "Communication",
    },
    {
      id: 2,
      skill: "Time management",
    },
    {
      id: 3,
      skill: "Teamwork",
    },
    {
      id: 4,
      skill: "Creativity",
    },
    {
      id: 5,
      skill: "Attention to details",
    },
    {
        id: 5,
        skill: "Desire to learn",
      },
      {
        id: 5,
        skill: "Meeting deadlines",
      },
  ];

  const projects = [
    {
      sNo: 1,
      name: "Lorem Ipsum",
      university: " Los Angeles University",
      country: "Lorem Ipsum dolor",
      desc: "Successfully translated subject matter into concrete design for newsletters, promotional materials and sales collateral. Created design theme and graphics for marketing and sales presentations, training videos and corporate websites.",
    },
    {
      sNo: 2,
      name: "Lorem Ipsum",
      university: " Los Angeles University",
      country: "Lorem Ipsum dolor",
      desc: "Successfully translated subject matter into concrete design for newsletters, promotional materials and sales collateral. Created design theme and graphics for marketing and sales presentations, training videos and corporate websites.",
    },
    {
      sNo: 3,
      name: "Lorem Ipsum",
      university: " Los Angeles University",
      country: "Lorem Ipsum dolor",
      desc: "Successfully translated subject matter into concrete design for newsletters, promotional materials and sales collateral. Created design theme and graphics for marketing and sales presentations, training videos and corporate websites.",
    },
    {
      sNo: 4,
      name: "Lorem Ipsum",
      university: " Los Angeles University",
      country: "Lorem Ipsum dolor",
      desc: "Successfully translated subject matter into concrete design for newsletters, promotional materials and sales collateral. Created design theme and graphics for marketing and sales presentations, training videos and corporate websites.",
    },
  ];

  return (
    <div className="container-ack ">
      <div className="group py-10 relative">
        <div className="hover:bg-[#F6F8F9] bg-white  border-2 border-[#D2D2D2] text-left mx-3 py-8 rounded-md  hovertestimonial">
          <div className="flex flex-col items-center justify-left">
            <img
              src="/assets/images/advisor/advisorone.png"
              alt=" "
              className=" w-[200px] rounded-lg md:absolute -top-10  right-[2rem]"
            />
            <div className=" pt-8 md:px-12 px-5">
              <div className="grid md:grid-cols-3 gap-4 justify-start items-start">
                <p className=" md:col-span-1 font-semibold text-lg">Summary</p>
                <div className="md:col-span-2">
                  <h2 className="font-bold text-3xl">Layan Alrahmain, M.D.</h2>
                  <p className="text-textcolor">Lorem Ipsum</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 justify-start items-start pt-8">
                <p className=" md:col-span-1 font-semibold text-lg">Profile</p>
                <div className="md:col-span-2">
                  <p className="text-textcolor">
                    Graphic designer with +8 years of experience in branding and
                    print design. Skilled at Adobe Creative Suite (Photoshop,
                    Illustrator, InDesign) as well as sketching and hand
                    drawing. Supervised 23 print design projects that resulted
                    in an increase of 32% in savings.
                  </p>
                </div>
              </div>

              <div className="md:grid grid-cols-3 gap-4 justify-start items-start pt-8">
                <p className=" md:col-span-1 font-semibold text-lg">Education</p>
                <div className="md:col-span-2">
                  <div className="md:flex justify-between">
                    <p className="font-semibold">
                      2005 – 2007 — Los Angeles University
                    </p>
                    <p className="text-textcolor">Los Angeles</p>
                  </div>
                  <p className="text-textcolor pt-3">
                    Master of Graphic Design
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 justify-start items-start pt-8">
                <p className=" md;col-span-1 font-semibold text-lg">Employment</p>

                <div className="md:col-span-2 flex flex-col space-y-6">
                  {employment.map((item,index) => (
                    <>
                      <div className="md:flex justify-between" key={index}>
                        <p className="font-semibold">
                          {item.year} - {item.university}
                        </p>
                        <p className="text-textcolor">{item.country}</p>
                      </div>
                      <p className="text-textcolor">{item.desc}</p>
                    </>
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 justify-start items-start pt-8">
                <p className=" md:col-span-1 font-semibold text-lg">Soft skills</p>

                <div className="md:col-span-2 grid md:grid-cols-2 justify-start items-start gap-5">
                  {skill.map((item, id) => (
                    <>
                      <div className="" key={item.id}>
                        <ul className="list-disc  ">
                          <li>{item.skill}</li>
                        </ul>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 justify-start items-start pt-8">
                <p className=" md:col-span-1 font-semibold text-lg">Projects</p>

                <div className="md:col-span-2 flex flex-col space-y-6 pt-5">
                  {projects.map((item) => (
                    <>
                      <div className="md:flex justify-between" key={item.id}>
                        <p className="font-semibold">
                          {item.sNo}. {item.name}
                        </p>
                        <p className="text-textcolor">{item.country}</p>
                      </div>
                      <p className="text-textcolor">{item.desc}</p>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
