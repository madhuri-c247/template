import React from "react";
//constants
import { contact1, contact2 } from "../../utils/constants";
//react-icons
import { MdDone } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
//assets
import bgImage from "../../assets/Vector 18.png";
import man from "../../assets/man.png";
//CSS
import "./contact.scss";

function Contact() {
  const contact = [contact2, contact1];
  return (
    <div className="contact-container">
      <img className="bgImage" src={bgImage} alt="bgImage" />
      <div className="contact-content d-flex-r">
        <img src={man} alt="man showing content" />
        <div className="content">
          <h3>
            A 15 minute call to review your route efficiency before considering
            route optimization software
          </h3>
          <p>
            Municipal solid waste managers may just want to know if they are
            efficient compared to their peers. They are not ready to re-route,
            buy route optimization software, or have a pending system change.
            ROC can help in two ways:
          </p>
          <br />

          {contact ? (
            contact.map((item) => {
              return (
                <>
                  <span className="help" key={item}>
                    <MdDone className="done-icon" size={"4%"} /> {item}
                  </span>
                </>
              );
            })
          ) : (
            <h6>Not Available</h6>
          )}
          <button className="btn">
            <span>
              <FaPhoneAlt className="phone-icon" /> Give Us A Call (571)
              316-0676
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
