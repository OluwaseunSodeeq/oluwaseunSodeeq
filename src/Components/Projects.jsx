import Carousel from "react-multi-carousel";
import Container from "../Ui/Container";
import ContentContainer from "../Ui/ContentContainer";
import "react-multi-carousel/lib/styles.css";
// import "../Ui/styles.css";
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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container>
      <div>
        <ContentContainer>
          <h4 className="font-[600] font-outfit leading-10 text-3xl text-text-color ">
            My Last 3 projects
          </h4>
        </ContentContainer>

        <div className="mt-[22px]">
          {projectArray.map((each, i) => (
            <div key={i} className={` bg-${each.eachBg}`}>
              <ContentContainer>
                <div
                  className={`flex flex-col gap-y-5 md:gap-y-0 md:justify-between md:flex-row md:${
                    (i + 1) % 2 !== 0 ? "flex-row-reverse" : ""
                  } `}
                >
                  <div className="p-6 h-[295px] md:w-[330px] lg:w-[600px] lg:h-[509px] md:max-h-auto border-[2px] rounded-[16px]">
                    <h4>{each.title}</h4>
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
                    className=" relative flex items-center justify-center  w-full h-[295px]  md:w-[330px] md:h-auto lg:w-[590px] lg:h-[509px] rounded-[16px]  p-6 md:p-8 lg:p-[72px] "
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 112, 60, 0.4) 0%, rgba(0, 92, 183, 0.4) 100%)",
                    }}
                  >
                    <div className="relative z-10 w-full mx-auto my-">
                      {/* <div className="w-full h-[295px] md:w-[350px] rounded-[16px] border-[24px] border-solid md:border-[32px] lg:border-[72px] border-gradient"> */}
                      <Carousel
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
                      >
                        {each.images.map((img, i) => (
                          <img
                            className="object-contain rounded-[10px] "
                            src={img}
                            alt={each.title}
                            key={i}
                          />
                        ))}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </ContentContainer>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Projects;
