import { NavLink, useLocation } from "react-router-dom";
import useOpenContext from "./Contexts/useOpenContext";

import "../Ui/styles.css";

function Nav() {
  const { setOpen } = useOpenContext();
  const location = useLocation();

  const closeHandler = function () {
    setOpen(false);
  };

  return (
    <div className="hidden lg:block lg:w-[230px]">
      <ul className="lg:h-auto lg:flex lg:justify-between items-center lg:mt-0 lg:flex-row  lg:gap-x-4">
        <NavItem to="/" onClick={closeHandler} location={location}>
          Home
        </NavItem>
        <NavItem to="/about" onClick={closeHandler} location={location}>
          About
        </NavItem>
        <NavItem to="/contact" onClick={closeHandler} location={location}>
          Contact
        </NavItem>
      </ul>
    </div>
  );
}

function NavItem({ to, onClick, location, children }) {
  const isActive = location.pathname === to;
  const className = isActive
    ? "text-blue-text font-bold"
    : "text-btn-text-color hover:text-blue-text";
  return (
    <li className="text-base lg:leading-6 lg:font-normal">
      <NavLink className={className} to={to} onClick={onClick}>
        {children}
      </NavLink>
    </li>
  );
}

export default Nav;

// import { NavLink } from "react-router-dom";
// import useOpenContext from "./Contexts/useOpenContext";
// import "../Ui/styles.css";

// function Nav() {
//   const { setOpen } = useOpenContext();
//   const closeHandler = function () {
//     setOpen(false);
//   };

//   return (
//     <div className=" hidden lg:block lg:w-[230px]   ">
//       <ul className="  lg:h-auto lg:flex  lg:justify-between  items-center  lg:mt-0 lg:flex-row lg:gap-x-4 ">
//         <li className="  lg:text-text-base hover:text-text-blue lg:leading-6 lg:font-normal">
//           <NavLink activeClassName="active-link" onClick={closeHandler} to="/">
//             Home
//           </NavLink>
//         </li>

//         <li className="  lg:text-text-base hover:text-text-blue lg:leading-6 lg:font-normal">
//           <NavLink
//             activeClassName="active-link"
//             onClick={closeHandler}
//             to="/about"
//           >
//             About
//           </NavLink>
//         </li>
//         <li className="  lg:text-text-base hover:text-text-blue lg:leading-6 lg:font-normal">
//           <NavLink
//             activeClassName="active-link"
//             onClick={closeHandler}
//             to="/contact"
//           >
//             Contact
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Nav;
