import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
//assets
import bgImage from "../../assets/Vector 13.png";
import headerImage from "../../assets/Mask group.png";
import logo from "../../assets/logo big.png";
import orangeBar from "../../assets/Vector 14.png";
// components
import Nav from "../navBar/Nav";
//css
import "./header.scss";
import Button from "../../common/button/Button";

function Header() {
  return (
    <div className="header-container">
      <div className="header-main d-flex-r">
        <img src={logo} alt="logo" />
        <Nav className="nav" />
      </div>
      <img className="header-bgImage" src={bgImage} alt="background vector" />
      <img className="mask-group-image" src={headerImage} alt="Mask Group " />
      <div className="header-content">
        <h1>
          Key Performance Indicators in Waste Collection Route Optimization
        </h1>
        <p>
          ROC shares metrics, best practices and standards based on decades of
          garbage truck routing experience.
        </p>
        <Button className='btn' btnName='READ MORE'/>
      </div>
      <img className="orange-bar-image" src={orangeBar} alt="vector bar" />
      <LiaLongArrowAltDownSolid className="scroll-down" size={"15%"} />
    </div>
  );
}
export default Header;
