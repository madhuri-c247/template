import React from "react";
import sectionImage from "../assests/Group 75.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import '../styles/section.css'

function Section() {
  return (
    <div className="section-container">
      <div className="section-content">
        <h1>Waste Route Optimization Software Consultants</h1>
        <p>
          Route Optimization Consultants evaluates municipal solid waste
          collection systems, proposes scenarios to maximize efficiency, and
          implements with new routes and crew buy-in. Our experience covers all
          types of routing: high density routing (waste collection, postal
          deliveries, snow plow routing, newspaper deliveries, meter reading),
          point-to-point routing (collections, deliveries and sales forces with
          less than 200 stops per route per day), and paired routing
          (para-transit, armored car and similar). We take pride in our
          innovations in waste collections and routing. We recently pioneered
          the development of key performance indicators for waste collection
          operations. See our new training presentation, <a href=""> Key Performance
          Indicators in Waste Collections Routing </a>, conducted for the Solid Waste
          Association of North America, June 23, 2021.
        </p>
        <button className='btn'><span>READ MORE <MdKeyboardArrowRight size={'20px'}/></span></button>
  
      </div>
      <img className="section-image" src={sectionImage} alt="section" />
    </div>
  );
}

export default Section;
