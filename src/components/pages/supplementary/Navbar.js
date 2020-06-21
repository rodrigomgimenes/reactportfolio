import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
  const location = useLocation();
  const navHref  = props.href;

  return (
    <li key={props.id}>
      <Link to={navHref} className={location.pathname === navHref ? "nav-link active text-bold" : "nav-link"}>
        {props.headtitle}
      </Link>
    </li>
  );
}

export default Navbar;

