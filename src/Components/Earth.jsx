import "../Ui/styles.css"; // Import our Tailwind CSS file
import { FaGithub, FaCss3, FaReact } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";
import { SiTailwindcss } from "react-icons/si";

const Earth = () => {
  return (
    <div className="relative mt-14 w-[300px] h-[300px] lg:w-[400px]  lg:h-[400px] md:border  flex items-center  rounded-full">
      <div className="wheel">
        <div className="   cabin">
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

      <div className="relative lg:w-[300px] lg:h-[300px] mx-auto rounded-full">
        <img
          className="w-full  h-full p-2 rounded-full "
          src="../seun.png"
          alt="sheun"
        />
      </div>
    </div>
    // </div>
  );
};

export default Earth;
/* 

const Earth = () => {
  return (
    <div className="w-[600px] border border-l-orange-950">
      <div className="relative w-screen h-screen flex justify-center items-center">
        <div className="earth h-16 w-16 bg-blue-500 rounded-full absolute"></div>
        <div className="orbit orbit-1">
          <div className="planet mercury"></div>
        </div>
        <div className="orbit orbit-2">
          <div className="planet venus"></div>
        </div>
        <div className="orbit orbit-3">
          <div className="planet mars"></div>
        </div>
      </div>
    </div>
  );
};

*/
