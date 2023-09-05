import React from "react";
//assets
import FAQimage from "../../assets/image 23.png";
//CSS
import "./FAQ.scss";
//utils
import { FAQs } from "../../utils/FAQ";
//common
import FAQCard from "../../common/FAQCard/FAQCard";

function FAQ() {
  return (
    <div className="faq-container d-flex-r">
      <div className="faq-content">
        <h1>Answers to Popular Questions</h1>
        <div className="faqCard-container">
          {FAQs ? (
            FAQs.map((item) => {
              return (
                <FAQCard
                  className={"faqCard d-flex-r"}
                  innerClass={"query"}
                  question={item.question}
                  answer={item.answer}
                />
              );
            })
          ) : (
            <h1>No FAQ'S</h1>
          )}
        </div>
      </div>
      <img src={FAQimage} alt="man handing a laptop" />
    </div>
  );
}

export default FAQ;
