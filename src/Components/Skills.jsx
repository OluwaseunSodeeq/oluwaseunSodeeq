function Skills() {
  const skillsArray = [
    { skill: "HTML", percent: 9 },
    { skill: "CSS", percent: 9 },
    { skill: "JAVASCRIPT", percent: 8 },
    { skill: "REACT.JS", percent: 7 },
    { skill: "TAILWIND CSS", percent: 7 },
    { skill: "GIT", percent: 6 },
  ];
  const maxPercent = 10;
  return (
    <div className="px-6 py-10">
      <div>
        <h4 className="text-blue-text text-base font-normal leading-6 font-outfit">
          Skills
        </h4>
        <h2 className="font-outfit text-3xl leading-[56px] font-bold text-btn-text-color">
          What I&apos;m good @
        </h2>
        <div className="flex gap-[10px] -mt-[10px]">
          <div className="bg-blue-text h-[2px] w-[75px]"></div>
          <div className="bg-blue-text h-[2px] w-[20px]"></div>
          <div className="bg-blue-text h-[2px] w-[20px]"></div>
        </div>
        <p className="text-base leading-6 font-normal font-outfit text-btn-text-color mt-4">
          As a web developer, I blend creativity and technical expertise to
          craft captivating and user-friendly websites. I bring a commitment to
          cutting-edge technologies and a keen eye for design, ensuring your
          project becomes a digital masterpiece. Let&apos;s collaborate to
          transform your vision into a compelling online presence.
        </p>
      </div>
      <div className="boxSHadow">
        <div>
          {skillsArray.map((each) => (
            <div key={each.skill}>
              <h5 className="text-btn-text-color text-base font-quicksand leading-5 font-normal">
                {each.skill}
              </h5>
              <div className="flex gap-3 items-center">
                <div className="w-[183px] relative border-btn-text-color  border h-[17px] py-[1px]  ">
                  <div className=" bg-plain-white relative z-20 flex items-center gap-[2px]">
                    {Array.from({ length: maxPercent }, (_, i) => (
                      <div
                        key={i}
                        className={`w-[16px] h-[13px] bg-${
                          each.percent + 1 <= i + 1
                            ? "text-color-two"
                            : "blue-text"
                        }`}
                      ></div>
                    ))}
                  </div>
                  <div className="bg-plain-white w-[185px] h-[5px] absolute z-10 bottom-[30%] flex justify-end">
                    <div className="bg-btn-text-color h-[5px] w-1 opacity-40"></div>
                  </div>
                </div>
                <div className="text-base font-normal text-btn-text-color font-quicksand opacity-70">
                  {each.percent}0%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
