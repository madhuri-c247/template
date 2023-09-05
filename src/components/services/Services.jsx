import React from "react";
//CSS
import "./services.scss";
//utils
import { servicesData } from "../../utils/services";
//react-icons
import { MdDone } from "react-icons/md";
//components
import Card from "../../common/card/Card";
import Button from "../../common/button/Button";

function Services() {
  return (
    <div className="service-container">
      <h1>Route Optimization Services</h1>
      <div className="serviceCard-container d-flex-r">
        {servicesData ? (
          servicesData.map((items) => {
            return (
              <>
                <Card
                  className={"serviceCard card"}
                  alt={"Services provided"}
                  logo={items.logo}
                  title={items.title}
                  description={
                    items.description
                      ? items.description.map((items) => {
                          return (
                            <>
                              <li>
                                <MdDone /> {items}
                              </li>
                            </>
                          );
                        })
                      : "No Description"
                  }
                />
              </>
            );
          })
        ) : (
          <h3>No Services Available</h3>
        )}
      </div>
      <Button className="service-btn btn" btnName="Get Started" />
    </div>
  );
}

export default Services;
