import React from "react";
import Button from "../button/Button";

function Content(props) {
  return (
    <div className={props.className}>
      <div className="section-content">
        <h1 className={props.headingClass}>{props.heading}</h1>
        <p>{props.description}</p>
        <Button className="btn" btnName={props.btnName} />
      </div>
      <img className="group-section-image" src={props.src} alt={props.alt} />
    </div>
  );
}

export default Content;
