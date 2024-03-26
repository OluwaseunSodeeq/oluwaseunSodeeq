import { NavLink } from "react-router-dom";

function CurrentNav({ to, onClick, location, children }) {
  const isActive = location.pathname === to;
  const className = isActive
    ? "text-blue-text font-bold"
    : "text-btn-text-color hover:text-blue-text";
  return (
    <span className="text-base lg:leading-6 lg:font-normal">
      <NavLink className={className} to={to} onClick={onClick}>
        {children}
      </NavLink>
    </span>
  );
}

export default CurrentNav;
