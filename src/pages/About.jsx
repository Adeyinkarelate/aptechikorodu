import React from "react";
import { IntroBanner } from "../partials/pageBanners";
import Rosa from "react-on-scroll-animation";
import SchoolsBanner from "../assets/images/schools-banner.png";


import OfficeImg from "../assets/images/office3.jpeg";
import StudentsImg from "../assets/images/students1.jpg";
const About = () => {
  return (
    <div>
      {/* Intro Banner */}
      <IntroBanner
        bannerTitle="About"
        bannerTitleYellow="Us"
        bannerText="All About Aptech Computer Education Ikorodu"
      />

      {/* Feature 1 */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Aptech Ikorodu
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Prepare</span>
          </span>{' '}
          for your career with digital skills training at Aptech Ikorodu.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Aptech Computer Education, Ikorodu, Lagos State came into being when Avigo Technology Limited acquired the ICT Educational franchise from Aptech Computer Education, Mumbai India. 
        </p>
      </div>
      <div className="mx-auto lg:max-w-2xl">
        <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96 animate-pulse"
            src="https://res.cloudinary.com/madflows/image/upload/v1651157237/apcalabar_ibikwf.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
      {/* ========= */}

      {/* Feature 2 */}
      <section className="mt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                src={OfficeImg}
                alt="Business Team"
              />
            </div>

            <div className="lg:py-16">
              <Rosa animation={"fade-down"} once>
                <h2 className="text-2xl font-semibold capitalize text-aptechRed sm:text-3xl">
                  avigo investment limited
                </h2>
              </Rosa>
              <p className="mt-2 text-justify text-gray-700">
                AVIGO, is an indigenous firm, which is one of the most effective
                environmental and allied services company in Nigeria, it was
                incorporated at Corporate Affairs Commission Abuja in the year
                2017. AVIGO is a 100% Nigerian owned Company. The company has a
                comprehensive pool of professional staff consisting of Managers,
                Software developers, Hardware Engineers, Network Engineers as
                well as grounded Informational Technology professionals. We have
                the skill set to design, and deploy Local Area Network (LAN),
                Wide Area Network (WAN), WIFI, Cisco Network Cascading, Network
                Integration, etc. We also can also offer network support
                services to existing clients network.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ========= */}

      {/* Feature 3 */}
      <section className="mt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-0 relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
              <img
                className="pointer-events-none absolute inset-0 h-full w-full  object-cover"
                src={StudentsImg}
                alt="Students"
              />
            </div>

            <div className="lg:py-12">
              <Rosa animation={"fade-down"} once>
                <h2 className="text-2xl font-semibold text-aptechRed sm:text-3xl">
                  Our Alliances
                </h2>
              </Rosa>
              <p className="mt-2 text-justify text-gray-700">
                <span className="text-justify font-bold">
                  Avigo inculcates strict adherence to policies, procedures and
                  high standards on every task whose overall effect will result
                  to quality and guarantee job satisfaction at final delivery
                  point.
                </span>
                Our students are trained to compete with other Aptech Centers
                (about 1,400 centers worldwide) as well as International
                students/graduates from other elite Universities.
              </p>
              <p className="mt-2 text-justify text-gray-700">
                Aptech Computer Education, Ota have alliance with Middlesex
                University as well as Portsmouth University, London, United
                Kingdom. To expatiate further, our students after 24 months
                programme in Advanced Diploma in Software Engineering (ADSE)
                will merit a full credit transfer to either Middlesex or
                Portsmouth Universities in the UK to start in the final year and
                after 12 months, graduates in Software engineering with a
                Bachelor of Science (BSC).
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ============== */}
      <div className=" mt-20">
        <h6 className="text-center text-3xl font-medium">
          In Collaboration with{" "}
        </h6>
        <img
          src={SchoolsBanner}
          alt="Schools Banner"
          className="pointer-events-none mx-auto w-fit"
        />
      </div>
    </div>
  );
};

export default About;
