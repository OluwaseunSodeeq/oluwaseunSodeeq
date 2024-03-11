// import Button from "../Ui/Button";
import Container from "../Ui/Container";
import ContentContainer from "../Ui/ContentContainer";
import Earth from "./Earth";

function HomepageHeroSection() {
  return (
    <Container background="#ffffff">
      <ContentContainer>
        <div className="px-6 pb-4 lg:pb-4 md:pt-20 pt-16 mt-6 lg:flex justify-between  lg:gap-x-[104px] lg:px-0 lg:pt-0 lg:mt-[80px]  ">
          <div className="w-full lg:w-[680px] lg:mt-[72px] ">
            <p className="font-[600] text-base leading-5 font-inter text-text-color">
              Hi, i am
            </p>
            <h2 className="text-text-color font-bold text-[32px] text-inter leading-10 lg:mt-4 lg:leading-[58px] lg:text-[48px]">
              Oluwaseun Sodeeq
            </h2>
            <h4 className="text-text-color font-bold text-xl text-inter leading-5  mt-[16px]">
              A Frontend Developer
            </h4>
            <p className="text-text-color font-medium text-base text-outfit leading-6 mt-[16px] lg:mt-[24px]">
              driven by the thrill of crafting seamless, intuitive user
              experiences. My passion for precision coding and design finesse
              ensures every project I undertake captivates and engages its
              audience. From translating complex concepts into elegant
              interfaces to staying ahead of emerging trends, I&#39;m committed
              to delivering not just functional, but future-proof solutions.
              {/* Devoted Frontend Developer, channeling passion into the creation
              of seamless, intuitive user experiences through meticulous coding
              and a keen eye for design */}
            </p>
            <div className=" flex items-center gap-[16px] mt-4 lg:mt-[58px]">
              <button
                className={`px-3 md:px-4 py-2 text-nowrap text-base font-normal font-outfit leading-6 border-2 border-blue-text bg-blue-text text-text-color-two rounded-[8px]`}
              >
                Get in Touch
              </button>
              <button
                className={`px-3 md:px-4 py-2 text-nowrap text-base font-normal font-outfit leading-6 border-2 border-blue-text bg-text-color-two text-btn-text-color rounded-[8px]`}
              >
                View Projects
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-center lg:w-[520px] lg:h-[438px] pb-[48px] lg:mt-[72px] h-auto pt-0 lg:border lg:rounded-full xl:h-[475px]">
            <Earth />
          </div>
        </div>
      </ContentContainer>
    </Container>
  );
}

export default HomepageHeroSection;

{
  /* <div className="hidden w-full relative mt-5 overflow-x-hidden">
            <div>
              <div className="w-[74px] h-[18px] left-[12%] top-[50px] bg-blue-text absolute rounded-full"></div>
              <div className="absolute w-[120px] left-[0%] bottom-[50px] flex justify-between items-center">
                <div className="w-[27px] h-[18px] bg-blue-text  rounded-full"></div>
                <div className="w-[78px] h-[18px] bg-blue-text  rounded-full"></div>
              </div>
            </div>
            <div className="w-[400px] h-[220px] relative z-10 ml-[28%] bg-plain-white rounded-full border-[18px] border-blue-text">
              <div className="w-[95%] h-[180px] ml-[20%] mt-[16px]  ">
                <img className="h-[94%]" src="../seun.png" alt="seun" />
              </div>
            </div>
          </div> */
}
