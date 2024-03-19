// import Container from "../Ui/Container";
import "../Ui/styles.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ContentContainer from "../Ui/ContentContainer";

function Projects() {
  const projectSliderItems = [
    {
      images: ["../bespro1.png", "../bespro3.png", "../bespro3.png"],
      projBg: "#F8FEF9",
      tech: "",
      title: "BES",
      aboutProject:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Neque nisi iure eveniet quo vitae illo nesciun suscipit, earum exercitationem explicabo obcaeconsequuntur reiciendis, voluptatem ratione rem eaque.",
      tools: "Css Modules, Context api,React Router, Hooks",
      logo: "../besLogo.png",
      borderBg: {
        background:
          "linear-gradient(180deg, rgba(0, 112, 60, 0.4) 0%, rgba(0, 92, 183, 0.4) 100%)",
      },
    },
    {
      images: ["../bespro1.png", "../bespro3.png", "../bespro3.png"],
      projBg: "#F7F7F7",
      tech: "",
      title: "AJ-portfolio",
      aboutProject:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elitNeque nisi iure eveniet quo vitae illo nesciun suscipit, earum exercitationem explicabo obcaeconsequuntur reiciendis, voluptatem ratione rem eaque.",
      tools: "Tailwind css, React-router, Context Api",
      logo: "../aj-logo.png",
      borderBg: {
        background: "linear-gradient(180deg, #CED3DC 0%, #67696E 100%)",
      },
    },
    {
      images: ["../ip-tracker-pic.png", "../ip-tracker-pic.png"],
      projBg: "#FEFEFE",
      tech: "",
      title: "IP-Address-Tracker",
      aboutProject:
        " This is a dynamic website developed using HTML,CSS and JavaScript, inspired by a challenge from Frontend Mentor. This website effortlessly fetches and displays location, ISP, timezone, and current IP address information based on user input, complete with robust error handling for incorrect entries.",
      tools: "Html,Css and JavaScript",
      logo: "../fontendMentor-Logo.png",
      borderBg: {
        background: "linear-gradient(180deg, #CED3DC 0%, #5B7BE4 100%)",
      },
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
          className={`flex justify-center items-center absolute w-[88px] h-[26px]  gap-x-2 rounded-[12px] bottom-[-26px] md:bottom-[-25px] lg:bottom-[-30px] inset-x-0 mx-auto left-0 right-0 cursor-not-allowed `}
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
        <h4 className=" ml-6 md:ml-0  font-[600] font-inter leading-10 text-3xl text-text-color ">
          My Last 3 projects
        </h4>
      </ContentContainer>

      <div className="mt-[22px]">
        {projectSliderItems.map((each, ind) => {
          const { projBg, images, title, aboutProject, logo, tools, borderBg } =
            each;

          return (
            // <div key={ind} className={"border bg-" + projBg}>
            <div
              key={ind}
              className="border lg:max-w-[1440px] lg:mx-auto pb-[24px]"
              style={{ backgroundColor: projBg }}
            >
              <ContentContainer>
                <div
                  className={`flex flex-col gap-y-5 md:gap-y-0 md:justify-between ${
                    (ind + 1) % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* <div className="p-6 h-auto md:w-[310px] lg:w-[600px] lg:h-[509px] md:max-h-auto border-[2px] rounded-[16px]"> */}
                  <div className="p-6 md:px-2 lg:pb-6 h-auto md:w-[310px] md:h-[310px]  lg:w-[540px] lg:h-[500px] md:max-h-auto  rounded-[16px]">
                    <div
                      className={`${
                        title !== "IP-Address-Tracker"
                          ? "w-[47px] lg:w-[73px] "
                          : "w-auto"
                      } h-[47px] lg:h-[73px] lg:mt-2 `}
                    >
                      <img src={logo} alt={title} />
                    </div>
                    <p className=" block text-base font-normal leading-6 font-inter text-btn-text-color mt-4 md:hidden lg:block lg:mt-6  ">
                      {aboutProject}
                    </p>
                    <div className="flex gap-x-3 mt-4 md:mt-8 lg:mt-6">
                      <h4 className="flex gap-x-1 font-inter font-medium lg:text-[20px]">
                        <span className="text-btn-text-color ">
                          {title !== "IP-Address-Tracker"
                            ? "Tools"
                            : "Technologies"}{" "}
                        </span>
                        <span className="mt-2 lg:ml-2 text-[18px] ">
                          <svg
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.33301 6.42503H10.6663M10.6663 6.42503L5.99967 1.75836M10.6663 6.42503L5.99967 11.0917"
                              stroke="#67696E"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </h4>
                      <h6 className=" font-inter font-medium text-[16px] text-btn-text-color lg:text-[18px]">
                        {tools}
                      </h6>
                    </div>
                    <div
                      className={`hidden md:mt-16  lg:ml-[0px]  lg:mt-[130px] md:flex md:justify-end ${
                        (ind + 1) % 2 !== 0
                          ? "lg:justify-end"
                          : "lg:justify-start"
                      } `}
                    >
                      <button className="  px-3 py-2 border rounded-[8px]   bg-blue-text text-plain-white hover:bg-plain-white hover:text-blue-text hover:shadow-custom ">
                        View Website
                      </button>
                    </div>
                  </div>
                  <div className="px-6 md:px-0">
                    <div
                      className=" relative flex items-center justify-center  w-full h-[295px]  md:w-[310px] md:h-[310px] lg:w-[540px] lg:h-[500px] rounded-[16px]   md:p-8  lg:p-[40px] "
                      style={borderBg}
                    >
                      <div className="absolute z-10 px-6  w-full mx-auto my-4 rounded-[16px]">
                        {
                          <Slider {...settings}>
                            {images.map((each, i) => (
                              // console.log(each, i)
                              <img
                                key={i}
                                className="w-full h-[240px]  md:h-[260px]  lg:max-w-[480px] lg:h-[420px] cursor-grab rounded-[16px]"
                                src={each}
                                alt="projects"
                              />
                            ))}
                          </Slider>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-end pr-6 md:hidden">
                    <button className="px-3 py-2 border rounded-[8px] mt-3 bg-blue-text text-plain-white hover:bg-plain-white hover:text-blue-text hover:shadow-custom">
                      View Website
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
