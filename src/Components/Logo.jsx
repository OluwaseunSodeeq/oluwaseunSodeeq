import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Logo() {
  const breakpoint = useMediaQuery({ maxWidth: 768 });

  return (
    <div className=" cursor-pointer  ">
      <Link to="/">
        <img
          src={breakpoint ? "../mobile-logo.png" : "../desktop-logo.png"}
          alt="Logo"
          className=" w-full h-full bg-transparent rounded-md px-0 py-0 "
        />
      </Link>
    </div>
  );
}

export default Logo;
