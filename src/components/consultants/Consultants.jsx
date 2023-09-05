import React from "react";
//assets
import groupImage from "../../assets/Group 75.png";
//CSS
import "./consultants.scss";
import Content from "../../common/content/Content";
//constants
import { consultantHeading, consultantDescription } from "../../utils/constants";

function Consultants() {
  return (
    <Content
    className={'section-container d-flex-r'}
      heading={consultantHeading}
      description={consultantDescription}
      btnClass={"btn"}
      btnName={"READ MORE"}
      headingClass={"consultants-head"}
      src={groupImage}
      alt={"GROUP OF PEOPLE"}
    />
  );
}

export default Consultants;
