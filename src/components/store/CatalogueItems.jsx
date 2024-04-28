import React from "react";
import Item from "./Item";
import "../../styles/catalogue.css";

function CatalogueItems() {
  return (
    <div>
      <div className="catalogue-container">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default CatalogueItems;
