// import Container from "../Ui/Container";
import "../Ui/styles.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ContentContainer from "../Ui/ContentContainer";
function Projects() {
  const projectArray = [
    {
      images: ["../bespro1.png", "../bespro3.png", "../bespro3.png"],
      eachBg: "",
      tech: "",
      title: "BES",
    },
    {
      images: ["../bespro1.png", "../bespro3.png", "../bespro3.png"],
      eachBg: "",
      tech: "",
      title: "BES",
    },
    {
      images: ["../bespro1.png", "../bespro3.png", "../bespro3.png"],
      eachBg: "",
      tech: "",
      title: "BES",
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
          className={`flex justify-center items-center absolute w-[88px] h-[26px]  gap-x-2 rounded-[12px] bottom-[-33px] md:bottom-[-50px] inset-x-0 mx-auto left-0 right-0 cursor-not-allowed bg-[#333437]`}
        >
          {dots.map((dot, index) => (
            <li
              key={index}
              className={`inline-block w-[10px] h-[10px] rounded-full ${
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
    // <Container>
    <div className="px-4 lg:px-0">
      <ContentContainer>
        <h4 className="  font-[600] font-outfit leading-10 text-3xl text-text-color ">
          My Last 3 projects
        </h4>
      </ContentContainer>

      <div className="mt-[22px]">
        {projectArray.map((each, i) => {
          const { eachBg, title, images } = each;

          return (
            <div key={i} className={` bg-${eachBg}`}>
              <ContentContainer>
                <div
                  className={`flex flex-col gap-y-5 md:gap-y-0 md:justify-between ${
                    (i + 1) % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                  } `}
                >
                  {/* <div className="p-6 h-auto md:w-[310px] lg:w-[600px] lg:h-[509px] md:max-h-auto border-[2px] rounded-[16px]"> */}
                  <div className="p-6 h-auto md:w-[310px] lg:w-[45%] lg:h-[509px] md:max-h-auto border-[2px] rounded-[16px]">
                    <h4>{title}</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Neque nisi iure eveniet quo vitae illo nesciunt dolor
                      suscipit, earum exercitationem explicabo obcaecati
                      consequuntur reiciendis, voluptatem ratione rem eaque.
                    </p>
                    <h6>Tech: html, css, Js</h6>
                    <button className="px-3 py-2 border rounded-[8px] mt-3 hover:bg-text-color hover:text-plain-white">
                      View Website
                    </button>
                  </div>
                  <div
                    className=" relative flex items-center justify-center  w-full h-[295px]  md:w-[310px] md:h-auto lg:w-[590px] lg:h-[509px] rounded-[16px]  p-6 md:p-8 lg:p-[72px] "
                    // className=" relative flex items-center justify-center  w-full h-[295px]  md:w-[310px] md:h-auto lg:w-[40%] lg:h-[509px] rounded-[16px]  p-6 md:p-8 lg:p-[72px] "
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 112, 60, 0.4) 0%, rgba(0, 92, 183, 0.4) 100%)",
                    }}
                  >
                    <div className="relative z-10 w-full mx-auto my-4">
                      {/* <div className="w-full h-[295px] md:w-[350px] rounded-[16px] border-[24px] border-solid md:border-[32px] lg:border-[72px] border-gradient"> */}
                      {/* <Carousel
                      responsive={responsive}
                      swipeable={true}
                      showDots={false}
                      autoPlaySpeed={3000}
                      autoPlay={true}
                      arrows={false}
                      infinite={true}
                      pauseOnHover={true}
                      keyBoardControl={true}
                      draggable={true}
                    > */}

                      {
                        <Slider {...settings}>
                          {images.map((each, i) => (
                            <img
                              key={i}
                              className="w-inherit cursor-grab rounded-xl"
                              src={each}
                              alt="projects"
                            />
                          ))}
                        </Slider>

                        // each.images.map((img, i) => (
                        //   <img
                        //     className="object-contain rounded-[10px] "
                        //     src={img}
                        //     alt={each.title}
                        //     key={i}
                        //   />
                        // ))}
                      }
                      {/* </Carousel> */}
                    </div>
                  </div>
                </div>
              </ContentContainer>
            </div>
          );
        })}
      </div>
    </div>
    // </Container>
  );
}

export default Projects;
