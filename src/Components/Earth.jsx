import "../Ui/styles.css";
import { FaGithub, FaCss3, FaReact } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";
import { SiTailwindcss } from "react-icons/si";
const Earth = () => {
  const check = window.innerWidth > 360;
  const check2 = window.innerWidth > 400;
  console.log(check);

  return (
    // <div className="relative mt-12 w-[300px] h-[300px] mx-auto lg:w-[420px]  lg:h-[420px] md:border  flex items-center  rounded-full">
    <div
      className={`relative  p-1 md:p-4 md:pl-1 mt-12  md:mx-auto md:w-[420px]  md:h-[420px] lg:w-[430px]  lg:h-[430px] lg:max-h-[40px] border  flex items-center  rounded-full lg:rounded-none lg:border-none ${
        check ? "w-[327px] h-[327px]" : "w-[320px] h-[320px]"
      } ${check2 ? "ml-[0px]" : "ml-[-18px]"}`}
    >
      <div className="wheel">
        <div className="cabin">
          <TiHtml5 style={{ color: "orangered", fontSize: "inherit" }} />
        </div>
        <div className="cabin">
          <FaCss3 style={{ color: "#0091F7", fontSize: "inherit" }} />
        </div>
        <div className="cabin">
          <IoLogoJavascript style={{ color: "#FFFF00", fontSize: "inherit" }} />
        </div>
        <div className="cabin">
          <FaReact style={{ color: "#00D8FF", fontSize: "inherit" }} />
        </div>
        <div className="cabin">
          <SiTailwindcss style={{ color: "#00FFFF", fontSize: "inherit" }} />
        </div>
        <div className="cabin">
          <FaGithub style={{ color: "#333333", fontSize: "inherit" }} />
        </div>
      </div>

      <div
        className={`relative mx-auto rounded-full md:w-[280px] md:h-[280px] border md:border-none  ${
          check ? "w-[240px] h-[240px] " : "w-[200px] h-[200px]"
        }`}
      >
        <img
          src="seun.png"
          className="rounded-full w-full h-full mx-auto  md:pr-0 md:pl-4 lg:pl-0 lg:ml-2"
        />
      </div>
    </div>
  );
};

export default Earth;
