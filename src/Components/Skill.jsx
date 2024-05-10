import { useState } from "react";

function Skill({ each, maxPercent, i }) {
  const [currentSkill, setcurrentSkill] = useState(null);
  const { skill, percent } = each;
  const bar = false;

  return (
    <div className="md:pb-0 lg:mt-2 ">
      <div className="px-2">
        <div
          key={skill}
          className=" flex gap-x-2  items-center lg:mt-1.5 text-btn-text-color hover:text-blue-text "
          onMouseEnter={() => setcurrentSkill(i)}
          onMouseLeave={() => setcurrentSkill(null)}
        >
          <div
            className={`md:w-2 md:h-2  w-1.5 h-1.5 border rounded-full text-inherit  ${
              currentSkill === i ? "bg-blue-text" : "bg-btn-text-color"
            }`}
          ></div>
          <p className="font-bold font-Helvetica text-sm md:text-base text-inherit leading-9 px-2">
            {skill}
          </p>
        </div>
      </div>

      {bar && (
        <h5 className="text-btn-text-color text-[14px] md:text-base lg:text-[18px] font-quicksand leading-5 font-normal ">
          {skill}
        </h5>
      )}

      {/* Initial skills Format */}
      {bar && (
        <div className="flex gap-3 items-center lg:mt-2">
          <div className="w-[262px] md:w-[500px] lg:w-[210px] relative border-btn-text-color  border py-[2px] pl-[2px] lg:pl-[1px] pr-[1px] lg:h-[17px] lg:py-[1px]">
            <div className="w-full bg-plain-white relative z-20 flex items-center gap-[2px] ">
              {Array.from({ length: maxPercent }, (_, i) => (
                <div
                  key={i}
                  className={`w-[26px] md:w-[50px] h-[17px] md:h-[25px]   lg:w-[21px] lg:h-[13px] bg-${
                    percent + 1 <= i + 1 ? "text-color-two" : "blue-text"
                  }`}
                ></div>
              ))}
            </div>
            <div className="bg-plain-white w-[263px] md:w-[502px] lg:w-[210px]   absolute z-10 bottom-[30%] md:bottom-[30%] lg:h-[3px] lg:bottom-[45%] flex justify-end">
              <div className="bg-btn-text-color h-[10px] lg:h-[5px] w-full opacity-40"></div>
            </div>
          </div>
          <div className="text-base md:text-[20px] lg:text-[18px] md:ml-4 lg:ml-0 lg:text-basefont-normal text-btn-text-color font-quicksand opacity-70">
            {percent}0%
          </div>
        </div>
      )}
    </div>
  );
}

export default Skill;
