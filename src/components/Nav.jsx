import React from "react";
import "../styles/nav.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Nav() {
  return (
    
      <ul className="nav-container">
        <li>
          <span>
            Routing Software and Services
            <MdOutlineKeyboardArrowDown className="down-arrow" size={"20px"} />
          </span>
        </li>
        <li>Snow Plow Routing</li>
        <li>
          <span>
            Waste collection Routing Software
            <MdOutlineKeyboardArrowDown className="down-arrow" size={"20px"} />
          </span>
        </li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    
  );
}
