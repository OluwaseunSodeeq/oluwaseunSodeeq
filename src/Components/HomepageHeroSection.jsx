// import Button from "../Ui/Button";
import Container from "../Ui/Container";
import ContentContainer from "../Ui/ContentContainer";

function HomepageHeroSection() {
  return (
    <Container background="#fff">
      <ContentContainer>
        <div className="rounded-lg px-6 py-4 mt-6">
          <div>
            <p className="font-[600] text-base leading-5 font-inter text-text-color">
              Hi, i am
            </p>
            <h2 className="text-text-color font-bold text-[32px] text-inter leading-10">
              Oluwaseun Sodeeq
            </h2>
            <h4 className="text-text-color font-bold text-xl text-inter leading-5 mt-[16px]">
              Frontend Developer
            </h4>
            <p className="text-text-color font-medium text-base text-outfit leading-6 mt-[16px]">
              Devoted Frontend Developer, channeling passion into the creation
              of seamless, intuitive user experiences through meticulous coding
              and a keen eye for design
            </p>
            <div className=" flex items-center gap-[16px] mt-4">
              <button
                className={`px-4 py-2 text-base font-normal font-outfit leading-6 border-2 border-blue-text bg-blue-text text-text-color-two rounded-full`}
              >
                Get in Touch
              </button>
              <button
                className={`px-4 py-2 text-base font-normal font-outfit leading-6 border-2 border-blue-text bg-text-color-two text-btn-text-color rounded-full`}
              >
                View Projects
              </button>
            </div>
          </div>
          <div className="relative mt-5">
            <div>
              <div className="w-[74px] h-[18px] left-[20%] top-[50px] bg-blue-text absolute rounded-full"></div>
              <div className="absolute w-[120px] left-[8%] bottom-[50px] flex justify-between items-center">
                <div className="w-[27px] h-[18px] bg-blue-text  rounded-full"></div>
                <div className="w-[78px] h-[18px] bg-blue-text  rounded-full"></div>
              </div>
            </div>
            <div className="w-full h-[220px] relative z-10 ml-[35%] bg-plain-white rounded-full border-[18px] border-blue-text">
              <div className="w-[188px] h-[180px] ml-[20%] mt-[16px]  ">
                <img className="h-[94%]" src="../seun.png" alt="seun" />
              </div>
            </div>
          </div>
        </div>
        ;
      </ContentContainer>
    </Container>
  );
}

export default HomepageHeroSection;
