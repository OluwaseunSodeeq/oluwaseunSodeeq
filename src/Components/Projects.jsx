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
      id: 1,
      images: [
        "../bespro1.png",
        "../bespro2.png",
        "../bespro3.png",
        "../bespro4.png",
      ],
      projBg: "#F8FEF9",
      title: "BES",
      aboutProject: [
        "BES is a meticulously crafted website highlighting its comprehensive range of services and commitment to excellence.",
        " Explore our office location and connect with us effortlessly through our user-friendly contact form, ensuring seamless communication for potential clients.",
        " Dive into our latest project showcase to witness our innovative solutions and dedication to delivering exceptional results firsthand.",
      ],
      tools: "CSS Modules, Context api, React Router, Hooks, Git",
      logo: "../besLogo.png",
      borderBg: {
        background:
          "linear-gradient(180deg, rgba(0, 112, 60, 0.4) 0%, rgba(0, 92, 183, 0.4) 100%)",
      },
      url: "https://bes-beta.vercel.app/",
    },
    {
      id: 2,
      images: ["../aj01.png", "../aj02.png", "../aj03.png"],
      projBg: "#F7F7F7",
      tech: "",
      title: "AJ-portfolio",
      aboutProject: [
        " AJ's portfolio website highlights the expertise of a skilled product designer, showcasing recent projects and capabilities.",
        " Employers can easily connect with AJ via a user-friendly contact form for potential collaborations.",
        " Explore the latest project page for insights into AJ's innovative solutions and commitment to excellence in product design.",
      ],
      tools: "Tailwind css, React-router, Context Api, Hooks, Git",
      logo: "../aj-logo.png",
      borderBg: {
        background: "linear-gradient(180deg, #CED3DC 0%, #67696E 100%)",
      },
      url: "https://abdul-gafar.netlify.app/",
    },
    {
      id: 3,
      images: [
        "../loginLL.PNG",
        "../homeLL.PNG",
        "../reservationLL.PNG",
        "../orderLL.PNG",
        
      ],
      projBg: "#F8FEF9",
      title: "Little Lemon",
      aboutProject: [
        "Little Lemon is the final project of the Front-End Development Professional Certificate program, an online course hosted on Coursera and led by Meta.",
        " This 🍋 is a dynamic website that transforms the user experience while capturing the essence of a family-inherited restaurant.",
        " Explore our menu, make a reservation and order online with ease.",
      ],
      tools: "Styled Components, Context API & useReducer, React Router, Hooks, LocalStorage, Formik & Yup, Git",
      logo: "../lemon-logo.png",
      borderBg: {
        background:
          "linear-gradient(180deg, rgba(0, 112, 60, 0.4) 0%, rgba(0, 92, 183, 0.4) 100%)",
      },
      url: "https://little-lemon-indol.vercel.app/",
    },
    {
      id: 4,
      images: ["../ip-design.jpg", "../ip-web.PNG"],
      projBg: "#FEFEFE",
      tech: "",
      title: "IP-Address-Tracker",
      aboutProject: [
        "This is a dynamic website developed using HTML, CSS, Git and JavaScript, inspired by a challenge from Frontend Mentor.",
        " This website effortlessly fetches and displays location, ISP, timezone, and current IP address information based on user input, complete with robust error handling for incorrect entries.",
        "",
      ],
      tools: "Html, Css and JavaScript",
      logo: "../fontendMentor-Logo.png",
      borderBg: {
        background: "linear-gradient(180deg, #CED3DC 0%, #5B7BE4 100%)",
      },
      url: "https://oluwaseunsodeeq.github.io/ip-address-tracker/",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <></>,
    nextArrow: <></>,

    appendDots: (dots) => (
      <>
        <ul className="slick-dots"></ul>
        <ul
          className={`flex justify-center items-center absolute w-[88px] h-[26px]  gap-x-2 rounded-[12px] bottom-[-26px] md:bottom-[-28px] lg:bottom-[-37px] inset-x-0 mx-auto left-0 right-0 cursor-not-allowed `}
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
              className="lg:w-full  lg:mx-auto pb-[32px] pt-8 md:pt-[52px] md:pb-[72px] md:px-4 lg:px-0  "
              style={{ backgroundColor: projBg }}
            >
              <ContentContainer>
                <div
                  className={`w-full  flex flex-col gap-5 md:gap-6 lg:gap-8 md:justify-between items-center   ${
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
