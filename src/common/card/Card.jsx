import React from "react";

function Card(props) {
  return (
    <div className={props.className}>
      <img src={props.logo} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
export default Card;
