import React from "react";

function CollectionCard(props) {
  return (
    <div className={props.className}>
      <h1 className={props.headingClass}>{props.numberOfCollection}</h1>
      <p className={props.titleClass}>{props.title}</p>
    </div>
  );
}
export default CollectionCard;
