import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Button(props) {
  return (
    <button className={props.className}>
      <span>
        {props.btnName} <MdKeyboardArrowRight size={"20px"} />
      </span>
    </button>
  );
}

export default Button;
