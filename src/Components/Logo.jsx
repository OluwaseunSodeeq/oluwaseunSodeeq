import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="w-[50px] h-[55px] cursor-pointer border ">
      <Link to="/">
        <img
          src="../OS black.png"
          alt="Logo"
          className=" w-full h-full bg-transparent rounded-md px-0 py-0 border"
        />
      </Link>
    </div>
  );
}

export default Logo;
