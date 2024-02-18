import ContentContainer from "../Ui/ContentContainer";

function AboutHeroSection() {
  return (
    <ContentContainer>
      <div className="lg:flex justify-between ">
        <div className="w-[105%] h-[345px] lg:w-[590px] lg:h-[620px]">
          <img
            src="../aboutPic.png"
            alt="Oluwaseun Sodeeq"
            className="w-full h-full"
          />
        </div>
        <div className="lg:w-[590px] h-auto lg:-mt-7">
          <h2 className="font-outfit font-bold text-[30px] md:text-[38px] lg:text-[48px] lg:leading-[60px] leading-[46px] text-text-color mt-5">
            OLUWASEUN SODEEQ
          </h2>
          <h6 className="font-normal font-outfit text-2xl md:text-[30px] lg:text-[32px] leading-9 lg:leading-[48px] text-text-color">
            Frontend Developer
          </h6>

          <div className="lg:mt-6">
            <h6 className="text-base font-bold leading-6 font-outfit text-text-color bg-text-color-two pr-2 w-[143px] py-1">
              Little Bit About Me
            </h6>
            <p className="font-normal text-base leading-6 font-outfit text-text-color mt-1">
              &quot;After a couple of weeks of frustration, you&apos;ll give
              up,&quot; said a friend. My journey started miles away from lines
              of code, deep within the bustling world of a factory worker
              (warehouse clerk, to be precise). While my days were filled with
              packing and shipping finished goods, my nights were fueled by a
              burning passion for web development. Every spare moment was spent
              glued to online tutorials, devouring documentation, and building
              projects I found interesting. It wasn&apos;t easy – the learning
              curve was steep, the resources endless, especially because I
              didn&apos;t know exactly what I needed. There were late nights
              debugging code, moments of frustration when things wouldn&apos;t
              work, and the constant struggle to balance my day job with my
              learning. But I persevered, overcame each hurdle, and my skills
              grew.
            </p>
            <h6 className="text-base font-bold leading-6 font-outfit text-text-color bg-text-color-two pr-2 w-[143px] py-1 mt-5">
              Why Hire Me?
            </h6>
            <p className="font-normal text-base leading-6 font-outfit text-text-color mt-1">
              Driven by a thirst for knowledge, I actively participated in
              online courses across platforms like FreeCodeCamp, Udemy, Coursera
              (anchored meta), InstinctHub, and Tiidelab. This diverse learning
              experience not only broadened my skillset in the basics of web
              development technologies like HTML, CSS, and JavaScript, but also
              advanced skills like React, Tailwind, and VCS (Git). My learning
              journey is validated by building projects and earning certificates
              of completion, which solidify my proficiency in web development.
            </p>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}

export default AboutHeroSection;
