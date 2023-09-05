import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo big.png";
import "./Footer.scss";
import sendIcon from "../../assets/bi_send-check-fill.png";
//utils
import { footerList, contactUs } from "../../utils/footer";
//react-icons
import { BsTwitter, BsLinkedin } from "react-icons/bs";

function Footer() {
  const [email, setEmail] = useState("");
  return (
    <div className="footer-container">
      <div className="footer-div d-flex-r">
        <h1>Subscribe To The Newsletter</h1>
        <input
          className="input-footer"
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
      <div className="footer-div div3 d-flex-r">
        {contactUs
          ? contactUs.map((item) => {
              return (
                <div className="contact-div">
                  <div className="contact-logo">
                    <img src={item.logo} alt="contact logo" />
                  </div>
                  <p>{item.title}</p>
                  <p>{item.contact}</p>
                </div>
              );
            })
          : ""}
      </div>
      <div className="d-flex-r footer-copyright">
        <p>
          © 2023, Route Optimization Consultants LLC. All Rights Reserved |
          Purposed High Fidelity File{" "}
        </p>
        <div className="social d-flex-r">
          <BsTwitter className="tweet logo" />
          <BsLinkedin className="linkedin logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
