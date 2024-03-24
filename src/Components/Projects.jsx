// import Container from "../Ui/Container";
import "../Ui/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ContentContainer from "../Ui/ContentContainer";
import ProjectCardCOntent from "./ProjectCardCOntent";
import ProjectCardSlider from "./ProjectCardSlider";
import SubsectionsHeader from "./SubsectionsHeader";
import { Link } from "react-router-dom";

function Projects() {
  const projectSliderItems = [
    {
      images: ["../bespro1.png", "../bespro3.png", "../bespro3.png"],
      projBg: "#F8FEF9",
      title: "BES",
      aboutProject: [
        "BES is a meticulously crafted website highlighting its comprehensive range of services and commitment to excellence.",
        "Explore our office location and connect with us effortlessly through our user-friendly contact form, ensuring seamless communication for potential clients.",
        "Dive into our latest project showcase to witness our innovative solutions and dedication to delivering exceptional results firsthand.",
      ],
      tools: "CSS Modules, Context api, React Router, Hooks",
      logo: "../besLogo.png",
      borderBg: {
        background:
          "linear-gradient(180deg, rgba(0, 112, 60, 0.4) 0%, rgba(0, 92, 183, 0.4) 100%)",
      },
      url: "https://bes-beta.vercel.app/",
    },
    {
      images: ["../bespro1.png", "../bespro3.png", "../bespro3.png"],
      projBg: "#F7F7F7",
      tech: "",
      title: "AJ-portfolio",
      aboutProject: [
        " AJ's portfolio website highlights the expertise of a skilled product designer, showcasing recent projects and capabilities.",
        "Employers can easily connect with AJ via a user-friendly contact form for potential collaborations.",
        "Explore the latest project page for insights into AJ's innovative solutions and commitment to excellence in product design.",
      ],
      tools: "Tailwind css, React-router, Context Api, Hooks",
      logo: "../aj-logo.png",
      borderBg: {
        background: "linear-gradient(180deg, #CED3DC 0%, #67696E 100%)",
      },
      url: "https://abdul-gafar.netlify.app/",
    },
    {
      images: ["../ip-tracker-pic.png", "../ip-tracker-pic.png"],
      projBg: "#FEFEFE",
      tech: "",
      title: "IP-Address-Tracker",
      aboutProject: [
        "This is a dynamic website developed using HTML,CSS and JavaScript, inspired by a challenge from Frontend Mentor.",
        "",
        " This website effortlessly fetches and displays location, ISP, timezone, and current IP address information based on user input, complete with robust error handling for incorrect entries.",
      ],
      tools: "Html,Css and JavaScript",
      logo: "../fontendMentor-Logo.png",
      borderBg: {
        background: "linear-gradient(180deg, #CED3DC 0%, #5B7BE4 100%)",
      },
      url: "https://oluwaseunsodeeq.github.io/ip-address-tracker",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: <></>,
    nextArrow: <></>,

    appendDots: (dots) => (
      <>
        <ul className="slick-dots"></ul>
        <ul
          className={`flex justify-center items-center absolute w-[88px] h-[26px]  gap-x-2 rounded-[12px] bottom-[-26px] md:bottom-[-28px] lg:bottom-[-30px] inset-x-0 mx-auto left-0 right-0 cursor-not-allowed `}
        >
          {dots.map((dot, index) => (
            <li
              key={index}
              className={`inline-block w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full ${
                dot.props.className.includes("slick-active")
                  ? "bg-[#FFFFFF]"
                  : "bg-[#9A9EA5]"
              }`}
            >
              {/* {dot} */}
            </li>
          ))}
        </ul>
      </>
    ),
  };
  return (
    <div className="py-4 h-auto bg-plain-white lg:px-0  ">
      <ContentContainer>
        {/* <h4 className=" ml-6 md:ml-0  font-[600] font-inter leading-10 text-3xl text-text-color ">
          My Last 3 projects
        </h4> */}
        <div className="pl-6  lg:pl-0">
          <SubsectionsHeader title="Projects" header="Recent projects" />
        </div>
      </ContentContainer>

      <div className="mt-[22px]">
        {projectSliderItems.map((each, ind) => {
          const { projBg, images, borderBg, url } = each;
          return (
            <div
              key={ind}
              className=" lg:max-w-[1440px] lg:mx-auto pb-[32px] pt-8 md:pt-[52px] md:pb-[72px] md:px-4 lg:px-0 "
              style={{ backgroundColor: projBg }}
            >
              <ContentContainer>
                <div
                  className={`flex flex-col gap-y-5 md:gap-7 md:justify-between  ${
                    (ind + 1) % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <ProjectCardCOntent each={each} ind={ind} />
                  <ProjectCardSlider
                    sliderProperties={{ borderBg, settings, images, Slider }}
                  />
                  <div className="w-full flex justify-end pr-6 md:hidden">
                    <button className="px-3 py-2 border rounded-[8px] mt-3 bg-blue-text text-plain-white hover:bg-plain-white hover:text-blue-text hover:shadow-custom">
                      <Link to={url}>View Website</Link>
                    </button>
                  </div>
                </div>
              </ContentContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
