import React from "react";
import keyBgImage from "../../assets/Vector 19.png";
//CSS
import "./keySuccess.scss";
//component
import Card from "../../common/card/Card";
//data
import { keys } from "../../utils/keySuccess";

function KeySuccess() {
  const key = keys;
  return (
    <div className="key-container">
      <img
        className="bg-image"
        src={keyBgImage}
        alt="background yellow vector"
      />
      <div className="key-content">
        <h2>
          Keys to Routing and Mobile Workforce Management Systems Implementation
          Success
        </h2>
        <p>
          Easily more than 50% of software projects never get used after the
          initial implementation. ROC's refined methodology ensures project
          success by addressing the critical needs.
        </p>

        <div className="keycard-container d-flex-r">
          {key
            ? key.map((items) => {
                return (
                  <>
                    <Card
                      className='keyCard card'
                      alt='Logo of keys'
                      key={items.id}
                      logo={items.logo}
                      title={items.title}
                      description={items.description}
                    />
                  </>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default KeySuccess;
