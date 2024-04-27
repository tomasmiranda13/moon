import React from "react";
import ButtonSize from "../components/ButtonSize";
import ButtonPrice from "../components/ButtonPrice";
import "/polo_shirt.jpg";

function ItemDetail() {
  return (
    <div>
      <div>
        <div className="article-pictures">
          <img src="polo_shirt_jpg" alt="" />
        </div>
        <div className="article-description">
          <ButtonSize />
          <ButtonPrice />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
