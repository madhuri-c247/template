import React from "react";
import { NavLink } from "react-router-dom";
//react-icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
//CSS
import "./nav.scss";

export default function Nav() {
  return (
    <ul className="nav-container d-flex-r">
      <NavLink to={"/"}>
        <span>
          Routing Software and Services
          <MdOutlineKeyboardArrowDown className="down-arrow" size={"20px"} />
        </span>
      </NavLink>
      <NavLink to={"/"}>Snow Plow Routing</NavLink>
      <NavLink to={"/"}>
        <span>
          Waste collection Routing Software
          <MdOutlineKeyboardArrowDown className="down-arrow" size={"20px"} />
        </span>
      </NavLink>
      <NavLink to={"/"}>Blog</NavLink>
      <NavLink to={"/"}>Contact</NavLink>
    </ul>
  );
}
