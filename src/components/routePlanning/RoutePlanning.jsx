import React from "react";
import Content from "../../common/content/Content";
import {
  RoutePlanningHeading,
  RoutePlanningDescription,
} from "../../utils/constants";
import routeImage from "../../assets/Group 82.png";
import routeBgImage from "../../assets/Vector 20.png";
import './routePlanning.scss'

function RoutePlanning() {
  return (
    <div className="routePlanning-container d-flex-r">
      <img src={routeBgImage} alt="route background" />
    <Content
    className={'routePlanning-content section-container d-flex-r'}
    heading={RoutePlanningHeading}
    description={RoutePlanningDescription}
    btnName={"GET STARTED"}
    src={routeImage}
    headingClass = {'route-head'}
    alt="Route Optimization Consultants"
    />
    </div>
  );
}

export default RoutePlanning;
