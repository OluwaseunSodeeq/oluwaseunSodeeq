import { NavLink } from "react-router-dom";
import useOpenContext from "./Contexts/useOpenContext";

function Nav() {
  const { setOpen } = useOpenContext();
  const closeHandler = function () {
    setOpen(false);
  };

  return (
    <div className=" hidden lg:block lg:w-[230px]   ">
      <ul className="  lg:h-auto lg:flex  lg:justify-between  items-center  lg:mt-0 lg:flex-row lg:gap-x-4 ">
        <li className=" text-btn-text-color lg:text-text-base hover:text-text-blue lg:leading-6 lg:font-normal">
          <NavLink onClick={closeHandler} to="/">
            Home
          </NavLink>
        </li>
        {/* <li className=" text-btn-text-color lg:text-text-base hover:text-text-blue lg:leading-6 lg:font-normal">
          <NavLink onClick={closeHandler} to="/">
            Resume
          </NavLink>
        </li> */}
        <li className=" text-btn-text-color lg:text-text-base hover:text-text-blue lg:leading-6 lg:font-normal">
          <NavLink onClick={closeHandler} to="/about">
            About
          </NavLink>
        </li>
        <li className=" text-btn-text-color lg:text-text-base hover:text-text-blue lg:leading-6 lg:font-normal">
          <NavLink onClick={closeHandler} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
