import Carousel from "react-multi-carousel";
import Container from "../Ui/Container";
import ContentContainer from "../Ui/ContentContainer";
import "react-multi-carousel/lib/styles.css";

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

        <div className="mt-[32px]">
          {projectArray.map((each, i) => (
            <div key={i} className={` bg-${each.eachBg}`}>
              <ContentContainer>
                <div className="flex flex-col">
                  <div className="p-6 align-center">
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
                    className="w-full  h-[295px]  md:w-[350px] "
                    style={{
                      borderImage:
                        "linear-gradient(180deg, rgba(0, 112, 60, 0.4) 0%, rgba(0, 92, 183, 0.4) 100%)",
                      borderStyle: "solid",
                      borderWidth: "24px",
                      //   "@media (min-width: 768px)": {
                      //     borderWidth: "32px",
                      //   },
                      //   "@media (min-width: 1024px)": {
                      //     borderWidth: "72px",
                      //   },
                    }}
                  >
                    <div>
                      <Carousel
                        responsive={responsive}
                        swipeable={true}
                        showDots={true}
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
                            className="w-full rounded-[10px] h-full"
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
