import { NavLink } from "react-router-dom";
import useOpenContext from "./Contexts/useOpenContext";
function Navbody() {
  const { setOpen } = useOpenContext();
  const closeHandler = function () {
    setOpen(false);
  };

  return (
    // <Container>
    <div className=" w-full bg-text-color md:h-auto py-6 absolute top-[26px] z-30 border lg:hidden ">
      <ul className=" pl-6 md:pl-[60px] flex h-auto  flex-col gap-y-2 items-center       ">
        <li className="  font-bold font-quicksand text-[32px] leading-[45px] text-btn-text-color  hover:text-blue-text ">
          <NavLink onClick={closeHandler} to="/">
            Home
          </NavLink>
        </li>

        {/* <li className="  font-bold font-quicksand text-[32px] leading-[48px] text-btn-text-color  hover:text-blue-text ">
              <NavLink onClick={closeHandler} to="/">
                Resume
              </NavLink>
            </li> */}

        <li className="  font-bold font-quicksand text-[32px] leading-[48px] text-btn-text-color  hover:text-blue-text ">
          <NavLink onClick={closeHandler} to="/about">
            About
          </NavLink>
        </li>
        <li className="  font-bold font-quicksand text-[32px] leading-[48px] text-btn-text-color  hover:text-blue-text ">
          <NavLink onClick={closeHandler} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbody;
