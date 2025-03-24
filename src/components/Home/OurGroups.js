import React from 'react'
import ComponentHead from '../Common/ComponentHead'

const OurGroups = () => {

    const clientsData = [
        {
          id: 1,
      
          image: "/assets/images/associates/asso1.png",
        },
        {
          id: 2,
      
          image: "/assets/images/associates/asso2.png",
        },
        {
          id: 3,
      
          image: "/assets/images/associates/asso3.png",
        },
        {
          id: 4,
      
          image: "/assets/images/associates/asso4.png",
        },
        {
          id: 5,
      
          image: "/assets/images/associates/asso5.png",
        },
        {
          id: 6,
      
          image: "/assets/images/associates/asso6.png",
        },
     {
        id:7,
        image:"/assets/images/associates/asso7.png",
     },
     {
        id:8,
        image:"/assets/images/associates/asso8.png",
     },
     {
        id:9,
        image:"/assets/images/associates/asso9.png",
     },
     {
        id:10,
        image:"/assets/images/associates/asso10.png",
     },
     {
        id:11,
        image:"/assets/images/associates/asso11.png",
     },
     {
        id:12,
        image:"/assets/images/associates/asso12.png",
     },
     {
        id:13,
        image:"/assets/images/associates/asso13.png",
     },
     {
        id:14,
        image:"/assets/images/associates/asso14.png",
     },
     {
        id:15,
        image:"/assets/images/associates/asso15.png",
     },
     {
        id:16,
        image:"/assets/images/associates/asso16.png",
     },
     {
        id:17,
        image:"/assets/images/associates/asso17.png",
     },
     {
        id:18,
        image:"/assets/images/associates/asso18.png",
     },
     {
        id:19,
        image:"/assets/images/associates/asso19.png",
     },
     {
        id:20,
        image:"/assets/images/associates/asso20.png",
     },
     {
        id:21,
        image:"/assets/images/associates/asso21.png",
     },
     {
        id:22,
        image:"/assets/images/associates/asso22.png",
     },
     {
        id:23,
        image:"/assets/images/associates/asso23.png",
     },
     {
        id:24,
        image:"/assets/images/associates/asso24.png",
     },
     {
        id:25,
        image:"/assets/images/associates/asso25.png",
     },
     {
        id:26,
        image:"/assets/images/associates/asso26.png",
     },
     {
        id:27,
        image:"/assets/images/associates/asso27.png",
     },
     {
        id:28,
        image:"/assets/images/associates/asso28.png",
     },
     {
        id:29,
        image:"/assets/images/associates/asso29.png",
     },
     {
        id:30,
        image:"/assets/images/associates/asso30.png",
     },
      ];

  return (
    <div className='container-ack md:px-0 px-5 md:pt-0 pt-12'>
        <ComponentHead
        title="Our Associates"
        sub="Our Group of Companies, Associations, Members, Affiliations & Partnerships"
      />

<div className="pb-16">
        <ul className=" grid md:grid-cols-6 grid-cols-2  itmes-center nobottommargin clearfix">
          {clientsData.map((item, index) => (
            <>
              <li key={index} className="clientzoom  p-4 border border-gray-200 border-dashed">
                <img
                  src={item.image}
                  alt="Clients"
                  className="rounded-lg w-[70%] mx-auto zoom-client"
                />
              </li>
            </>
          ))}
        </ul>

    
      </div>

    </div>
  )
}

export default OurGroups