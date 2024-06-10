import React from "react";

import { Link } from "react-router-dom";
import Rosa from "react-on-scroll-animation";

import coursesAcnsImg from "../assets/images/course-acns.jpg";
import Ikorodu from "../assets/images/Ikorodu.png";
import coursesAdseImg from "../assets/images/course-adse.jpg";
import coursesSmartProImg from "../assets/images/course-smartpro.jpg";
import SchoolsBanner from "../assets/images/schools-banner.png";
import Testimonials from "../partials/Testimonials";





const popularCourses = [
  {
    id: 1,
    title: "aptech ACNS career courses",
    img: coursesAcnsImg,
    delay: 100,
    animation: "fade-up",
    link: "acns",
  },
  {
    id: 2,
    title: "advanced diploma in software engineering (ADSE)",
    img: coursesAdseImg,
    delay: 400,
    animation: "fade-up",
    link: "adse",
  },
  {
    id: 3,
    title: "aptech smart professional courses",
    img: coursesSmartProImg,
    delay: 800,
    animation: "fade-up",
    link: "smart-pro",
  },
];

export const events = [
  {
    id: 1,
    title: "Aptech Techwiz 4 ",
    images: [
      "https://res.cloudinary.com/ds4h5p2np/image/upload/v1702858409/aptech_ota/techwiz%202023/picture_group_2_kscbzr.jpg",
      "https://res.cloudinary.com/ds4h5p2np/image/upload/v1702858408/aptech_ota/techwiz%202023/picture_group_3_sgywa6.jpg",
      "https://res.cloudinary.com/ds4h5p2np/image/upload/v1702773366/aptech_ota/techwiz%202023/picture_group.jpg",
      "https://res.cloudinary.com/ds4h5p2np/image/upload/v1702773318/aptech_ota/techwiz%202023/techwiz_2023_3.jpg",
      "https://res.cloudinary.com/ds4h5p2np/image/upload/v1702773318/aptech_ota/techwiz%202023/techwiz_2023_2.jpg",
      "https://res.cloudinary.com/ds4h5p2np/image/upload/v1702773319/aptech_ota/techwiz%202023/techwiz_2023_1.jpg",
      "https://res.cloudinary.com/ds4h5p2np/image/upload/v1702773318/aptech_ota/techwiz%202023/techwiz_2023_5.jpg",
    ],
    delay: 100,
    animation: "fade-up",
    extraImages: 3,
  },
  {
    id: 2,
    title: "Aptech Christmas Party 2023 ",
    images: [
      "https://res.cloudinary.com/ds4h5p2np/image/upload/v1702773974/aptech_ota/christmas%20party%202023/IMG-20231216-WA0017_nvpcyn.jpg",
      "https://res.cloudinary.com/ds4h5p2np/image/upload/v1702773974/aptech_ota/christmas%20party%202023/IMG-20231216-WA0016_pqqb8h.jpg",
      "https://res.cloudinary.com/ds4h5p2np/image/upload/v1702773973/aptech_ota/christmas%20party%202023/IMG-20231216-WA0015_txqwml.jpg",
      "https://res.cloudinary.com/ds4h5p2np/image/upload/v1702773972/aptech_ota/christmas%20party%202023/IMG-20231216-WA0014_i5s3rt.jpg",
      "https://res.cloudinary.com/ds4h5p2np/image/upload/v1702773972/aptech_ota/christmas%20party%202023/IMG-20231216-WA0013_wvid4o.jpg",
      "https://res.cloudinary.com/ds4h5p2np/image/upload/v1702773971/aptech_ota/christmas%20party%202023/IMG-20231216-WA0012_ihhnes.jpg",
      "https://res.cloudinary.com/ds4h5p2np/image/upload/v1702773971/aptech_ota/christmas%20party%202023/IMG-20231216-WA0011_szhnjw.jpg",
      "https://res.cloudinary.com/ds4h5p2np/image/upload/v1702773970/aptech_ota/christmas%20party%202023/IMG-20231216-WA0010_bmjjdy.jpg",
      "https://res.cloudinary.com/ds4h5p2np/image/upload/v1702773970/aptech_ota/christmas%20party%202023/3H2OMM8KQhjf-Ea1KDzvB8NFLHdPgbo1DAh6CtsNnTI__plaintext_638383319699806187_w8opz1.jpg",
    ],
    delay: 400,
    animation: "fade-up",
    extraImages: 5,
  },
];

const Home = () => {
  return (
    <div className="sm:mt-14">
      {/* Carousel */}
      <header className="h-full  bg-[#efd9db] py-20 sm:py-18 mb-10">
        <div className="mx-auto px-4 pt-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pt-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 lg:max-w-lg xl:pr-0">
              <div className="mb-6 max-w-xl">
                <h2 className="font-sans mb-6 max-w-lg text-5xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
                  Kick Start Your IT career 
                  <span className="text-my_dark inline-block animate-pulse">
                    @Aptech Ikorodu
                  </span>
                </h2>
                <p className="text-justify text-base text-gray-700 md:text-lg">
                  Students get dual-diploma which is valued by employers and
                  universities as well. With over 32 years of expertise in IT
                  training.
                </p>
              </div>
              <div>
                <a
                  href="/about"
                  aria-label=""
                  className="text-deep-purple-accent-400 hover:text-deep-purple-800 inline-flex items-center font-semibold transition-colors duration-200"
                >
                  Learn more
                  <svg
                    className="ml-2 inline-block w-3"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="-mx-4 flex items-center justify-center lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <img
                  className="mb-6 h-28 w-28 rounded object-cover shadow-lg sm:h-48 sm:w-48 xl:h-56 xl:w-56"
                  src="https://www.aptechglobaltraining.com/campaign/nigeria/degree/images/course-category-1-4.png"
                  alt=""
                />
                <img
                  className="duration-400 h-20 w-20 animate-pulse rounded object-cover shadow-lg ease-out sm:h-32 sm:w-32 xl:h-40 xl:w-60"
                  src="https://www.aptechglobaltraining.com/campaign/nigeria/degree/images/about-1-1.jpg"
                  alt=""
                />
              </div>
              <div className="px-3">
                <img
                  className="xl:w-100 h-40 w-40 animate-pulse rounded object-cover shadow-lg duration-200 ease-out sm:h-64 sm:w-64 xl:h-80"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-amqQspTVEyokbSe_bKrl1giK_KsicaaFxw&s"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* ========================INTERNATIONAL DEGREE===================================== */}
      <section className="mt-8">
      <Rosa animation={"fade-up"} once>
        <div className="mx-auto px-4 pt-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-22 my-10">
          <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
            <div></div>
            <h2 className="font-sans mb-6  items-center text-center text-3xl font-bold leading-none tracking-tight text-gray-900 ">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="text-blue-gray-100 absolute top-0 left-0 z-0 -mt-8 -ml-20 hidden w-32 text-[#ba5457] sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
                >
                  <defs>
                    <pattern
                      id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">AN</span>
              </span>{" "}
              INTERNATIONAL DEGREE IS FOUR STEPS AWAY
            </h2>
            <p className="items-center text-center text-base text-gray-700">
              Aptech has alliance with the best international Universities and
              institutes across the globe to benefit Aptech students.{" "}
              <a href="/about"> Learn More</a>
            </p>
          </div>
        </div>
        </Rosa>
        {/* the image */}
        <div className="mx-auto px-4 pb-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-8">
          <div className="row-gap-5 sm:row-gap-6 mb-8 grid gap-6 sm:grid-cols-2 sm:px-4 lg:grid-cols-4">
            <div>
              <div className="relative transform overflow-hidden rounded shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="h-56 w-full object-cover md:h-64 xl:h-80"
                  src="https://www.aptechglobaltraining.com/campaign/nigeria/degree/images/course-category-1-1.png"
                  alt=""
                />
                <div className="absolute inset-0 bg-black bg-opacity-75 px-6 py-4 text-center opacity-0 transition-opacity duration-200 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">STEP 1</p>
                  <p className="text-sm tracking-wide text-gray-300">
                    ENROL FOR ADSE AT APTECH IKORODU
                  </p>
                </div>
              </div>
            </div>
            <a href="/" aria-label="View Item">
              <div className="relative transform overflow-hidden rounded shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="h-56 w-full object-cover md:h-64 xl:h-80"
                  src="https://www.aptechglobaltraining.com/campaign/nigeria/degree/images/course-category-1-2.png"
                  alt=""
                />
                <div className="absolute inset-0 bg-black bg-opacity-75 px-6 py-4 text-center opacity-0 transition-opacity duration-200 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">STEP 2</p>
                  <p className="text-sm tracking-wide text-gray-300">
                    COMPLETE ADSE PROGRAM
                  </p>
                </div>
              </div>
            </a>
            <div>
              <div className="relative transform overflow-hidden rounded shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="h-56 w-full object-cover md:h-64 xl:h-80"
                  src="https://www.aptechglobaltraining.com/campaign/nigeria/degree/images/course-category-1-3.png"
                  alt=""
                />
                <div className="absolute inset-0 bg-black bg-opacity-75 px-6 py-4 text-center opacity-0 transition-opacity duration-200 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">STEP 3</p>
                  <p className="text-sm tracking-wide text-gray-300">
                    GET FINAL YEAR ADMISSION AT PARTNER UNIVERSITIES
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative transform overflow-hidden rounded shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="h-56 w-full object-cover md:h-64 xl:h-80"
                  src="https://www.aptechglobaltraining.com/campaign/nigeria/degree/images/course-category-1-4.png"
                  alt=""
                />
                <div className="absolute inset-0 bg-black bg-opacity-75 px-6 py-4 text-center opacity-0 transition-opacity duration-200 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">STEP 4</p>
                  <p className="text-sm tracking-wide text-gray-300">
                    BE AN IT DEGREE HOLDER
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/contact"
              aria-label=""
              className="text-deep-purple-accent-400 hover:text-deep-purple-800 inline-flex items-center font-semibold transition-colors duration-200"
            >
              Enroll Now
              <svg
                className="ml-2 inline-block w-3"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* Why Choose Us =============================================================================================*/}
      <div className="mx-auto px-4 py-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-8">
        <div className="row-gap-8 grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-6 max-w-xl">
            <Rosa animation={"fade-up"} once>
              <h2 className="font-sans mb-6 max-w-lg text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center item-center md:items-start md:text-start">
              APTECH IKORODU- A GLOBAL LEARNING SOLUTIONS PROVIDER
              </h2>
              </Rosa>
              <p className="text-base text-gray-700 md:text-lg text-center item-center md:items-start md:text-start">
              Are you considering a new career path or you are looking at adding a skill? Let's help you in your decision making and give options on how to reboot your career journey for success.
              </p>
            </div>
            <div className="row-gap-8 grid gap-8 sm:grid-cols-2">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#a02025]">
                  <svg
                    className="text-white h-10 w-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                Students get Advanced Diploma in Software Engineering (ADSE)
                </h6>
                <p className="text-sm text-gray-900">
                 which is valued by employers and universities worldwide. With over 30 years of expertise in IT training, aptech is sure to build careers.
                </p>
              </div>
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#a02025] text-whte">
                  <svg
                    className="text-white  h-10 w-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                Online varsity is an exclusive e-learning portal 
                </h6>
                <p className="text-sm text-gray-900">
                with a 24x7 access from anywhere, any platform, any time, any place. It offers interactive tools, valuable resources, expert advice and guidance to sharpen students' skill beyond the classroom.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className=" w-full rounded shadow-lg sm:h-96  object-cover md:object-fill md:h-auto"
              src={Ikorodu}
              alt="aptech ikorodu"
            />
          </div>
        </div>
      </div>
      {/* Popular Courses */}
      <section className="mt-8 text-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <Rosa animation={"fade-up"} once>
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-medium capitalize sm:text-4xl">
                most chosen courses
              </h2>

              <p className="mt-1 text-gray-600">
                A few of our most popular courses
              </p>
            </div>
          </Rosa>
          <div className="container mx-auto mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {popularCourses.map((course) => (
              <Rosa
                animation={course.animation}
                delay={course.delay}
                once={"false"}
              >
                <div
                  key={course.id}
                  className="relative block h-[40vh] overflow-hidden rounded-md bg-cover bg-center bg-no-repeat md:h-[40vh] lg:h-[40vh]"
                  style={{
                    backgroundImage: `linear-gradient(62deg,rgba(0, 0, 0, 0.2) 50%,rgba(0, 0, 0, 0.2) 50%),url(${course.img})`,
                  }}
                >
                  <Link
                    reloadDocument
                    to={`/courses/${course.link}`}
                    className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1.5 h-4 w-4 font-bold text-aptechOrange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>

                  <div className="relative h-full bg-black bg-opacity-40 p-8 pt-40 text-center text-white">
                    <h5 className="text-2xl font-semibold capitalize">
                      {course.title}
                    </h5>
                    {/* <p className="text-sm">Italy</p> */}
                  </div>
                </div>
              </Rosa>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              reloadDocument
              className="feature-btn mt-5 inline-flex items-center rounded bg-aptechRed px-6 py-3 text-white hover:shadow-md"
              to="/courses"
            >
              <span className="text-sm font-semibold"> View Courses </span>
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <div className="mx-auto mt-20 bg-gray-800 py-10">
        <Rosa animation={"fade-up"} once>
          <div className="mx-auto mb-12 max-w-lg text-center">
            <h2 className="text-3xl font-medium capitalize text-white sm:text-4xl">
              testimonials
            </h2>

            <p className="text-gray-300">What our students say about us</p>
          </div>
        </Rosa>
        <Testimonials />
      </div>
      {/* Footer Banner */}
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
      {/* Future Programs */}
      <div className="container mx-auto mt-20 p-2 text-center capitalize">
        <Rosa animation={"fade-up"} once>
          <h1 className="text-2xl font-semibold sm:text-3xl">
            future programs
          </h1>
        </Rosa>
        <p className="mx-auto mt-2 w-5/6 font-medium  normal-case text-gray-600 sm:w-4/6">
          For the first time Aptech is launching futuristic cutting-edge Digital
          Transformation Programs which include some of the Newest, Fastest
          growing Technologies aligned with Industry 4.0 like;
        </p>
        <div className="grid-col-1 mx-auto mt-6 grid gap-y-2 p-3 sm:w-5/6 sm:gap-0 md:grid-cols-2">
          <div className="bg-gray-200 text-start">
            <p className="p-2 px-4 text-base ">
              Power Business Intelligence (BI)
            </p>
            <p className="bg-gray-50 p-2 px-4 text-base">
              Artificial Intelligence (AI)
            </p>
            <p className="p-2 px-4 text-base">Software Engineering</p>
            <p className="bg-gray-50 p-2 px-4 text-base">
              Digital Marketing (SEO, SEM, Mobile & Email Marketing, ORM)
            </p>
          </div>
          <div className="bg-gray-200 text-start">
            <p className="bg-gray-50 p-2 px-4 text-base">Block Chain</p>
            <p className="p-2 px-4 text-base ">Machine Learning with R</p>
            <p className="bg-gray-50 p-2 px-4 text-base">
              Data Analytics (Machine Learning using R & Python, Artificial
              Intelligence, Business Intelligence)
            </p>
            <p className="p-2 px-4 text-base ">Big Data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
