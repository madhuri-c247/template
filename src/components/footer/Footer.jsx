import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo big.png";
import "./Footer.scss";
import sendIcon from '../../assets/bi_send-check-fill.png'
//utils
import { footerList, contactUs } from "../../utils/footer";

function Footer() {
  const [email, setEmail] = useState("");
  return (
    <div className="footer-container">
      <div className="footer-div d-flex-r">
        <h1>Subscribe To The Newsletter</h1>
        <input
          type="email"
          placeholder="Enter Email Address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <img className="sendIcon" src={sendIcon} alt="send email" />
      </div>
      <div className="footer-div div2">
        <img src={logo} alt="" />
        <ul className="footer-menu d-flex-r">
          {footerList
            ? footerList.map((items) => {
                return <NavLink>{items}</NavLink>;
              })
            : ""}
        </ul>
      </div>
      <div className="footer-div div3">
        <div>
          *3
          <img src="" alt="" />
          <h4></h4>
          <p></p>
        </div>
      </div>
      <div>
        <p></p>
        icons icon
      </div>
    </div>
  );
}

export default Footer;
