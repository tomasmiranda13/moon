import React from "react";
import "/polo_shirt.jpg";
import "../styles/item.css";

function Item() {
  return (
    <div className="item-container">
      <img src="polo_shirt.jpg" alt="" />
      <div className="article-name-align">
        <h4>Articulo</h4>
        <span className="category-item">Categoria</span>
      </div>
    </div>
  );
}

export default Item;
