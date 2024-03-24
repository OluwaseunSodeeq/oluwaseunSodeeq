import { useMediaQuery } from "react-responsive";

function ProjectCardCOntent({ each, ind }) {
  const mobilebreakpoint = useMediaQuery({ maxWidth: 450 });
  const tabletbreakpoint = useMediaQuery({ maxWidth: 1024 });
  const desktopbreakpoint = useMediaQuery({ minWidth: 1025 });

  const { title, aboutProject, logo, tools } = each;
  const [setence1, setence2, setence3] = aboutProject;

  return (
    <div className="relative  p-6 md:px-2 md-p-2 lg:p-6 h-auto md:w-[310px] md:h-[310px]  lg:w-[560px] lg:max-w-[600px] lg:h-[500px] md:max-h-auto  rounded-[16px] ">
      <div
        className={`${
          title !== "IP-Address-Tracker"
            ? "w-[47px] lg:w-[73px] md:w-[52px] "
            : "w-auto"
        } h-[47px] lg:h-[73px] lg:mt-2 `}
      >
        <img src={logo} alt={title} />
      </div>
      <p className=" text-[14px] md:text-base font-normal leading-6 font-inter text-btn-text-color mt-4  lg:mt-6 ">
        {mobilebreakpoint && setence1 + setence2}
        {tabletbreakpoint && setence1}
        {desktopbreakpoint && setence1 + setence2 + setence3}
      </p>
      <div className="flex gap-x-3 mt-4  lg:mt-6">
        <h4 className="flex gap-x-1 font-inter font-medium lg:text-[20px]">
          <span className="text-btn-text-color ">
            {title !== "IP-Address-Tracker" ? "Tools" : "Technologies"}{" "}
          </span>
          <span className="mt-2 ml-2  lg:ml-4 text-[16px] ">
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
        <h6 className="ml-1 lg:mt-1  lg:ml-2 font-inter italic font-normal text-[14px] md:text-base text-btn-text-color lg:text-[16px]">
          {tools}
        </h6>
      </div>
      <div
        className={`hidden w-full absolute md:bottom-[5px] lg:bottom-8 md:flex md:justify-end 
                      ${
                        (ind + 1) % 2 !== 0
                          ? "lg:justify-end pr-12"
                          : "lg:justify-start"
                      } `}
      >
        <button className="  px-3 py-2 border rounded-[8px]   bg-blue-text text-plain-white hover:bg-plain-white hover:text-blue-text hover:shadow-custom ">
          View Website
        </button>
      </div>
    </div>
  );
}

export default ProjectCardCOntent;
