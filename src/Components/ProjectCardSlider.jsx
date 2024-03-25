function ProjectCardSlider({ sliderProperties }) {
  const { borderBg, settings, images, Slider } = sliderProperties;
  return (
    <div className="px-6 md:px-0">
      <div
        className=" relative z-10 flex items-center justify-center  w-full h-[295px]  md:w-[310px] md:h-[310px] lg:w-[550px] xl:w-[600px] lg:h-[500px] rounded-[16px]   md:p-8  lg:py-[40px] lg:px-[0px]  "
        style={borderBg}
      >
        <div className="absolute w-full z-10 px-6 lg:px-8  mx-auto my-4 rounded-[16px] ">
          {
            <Slider {...settings}>
              {images.map((each, i) => (
                // console.log(each, i)
                <img
                  key={i}
                  className="w-full h-[240px] md:h-[245px] lg:w-[90%] lg:h-[420px] cursor-grab rounded-[16px]"
                  src={each}
                  alt="projects"
                />
              ))}
            </Slider>
          }
        </div>
      </div>
    </div>
  );
}

export default ProjectCardSlider;
