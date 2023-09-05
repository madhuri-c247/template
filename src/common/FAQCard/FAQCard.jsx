import React, { useState } from "react";
//react-icons
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";

function FAQCard(props) {
  const [queryView, setQueryView] = useState(false);

  const viewQuery = () => {
    setQueryView(true);
  };

  const closeQuery = () => {
    setQueryView(false);
  };
  return (
    <div className={props.className}>
      <div className={props.innerClass}>
        <p
          className="question"
          style={{ color: queryView ? "#1c519d" : "black" }}
        >
          {props.question}
        </p>
        <p className="answer" style={{ display: queryView ? "block" : "none" }}>
          {props.answer}
        </p>
      </div>
      {queryView ? (
        <GrFormSubtract
          size={"5%"}
          className="close-query"
          onClick={() => closeQuery()}
        />
      ) : (
        <IoIosAdd
          size={"5%"}
          className="view-query"
          onClick={() => viewQuery()}
        />
      )}
    </div>
  );
}

export default FAQCard;
