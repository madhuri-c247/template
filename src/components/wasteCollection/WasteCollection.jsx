import React from "react";
//assets
import wasteCollectionImage from "../../assets/Group 86.png";
//utils
import { wasteCollection } from "../../utils/wasteCollection";
//common
import CollectionCard from "../../common/collectionCard/CollectionCard";
//CSS
import "./wasteCollection.scss";

function WasteCollection() {
  return (
    <div className="wasteCollection-container section-container d-flex-r">
      <div className="content">
        <h1>Optimizing Waste Collection Routing Since 2000</h1>
        <div className="wasteCard-container d-flex-r">
          {wasteCollection ? (
            wasteCollection.map((item) => {
              return (
                <CollectionCard
                  className="wasteCard"
                  numberOfCollection={item.numberOfCollection}
                  title={item.title}
                />
              );
            })
          ) : (
            <h1>No Updates</h1>
          )}
        </div>
      </div>
      <img
        className="group-section-image"
        src={wasteCollectionImage}
        alt="waste collecting person"
      />
    </div>
  );
}

export default WasteCollection;
