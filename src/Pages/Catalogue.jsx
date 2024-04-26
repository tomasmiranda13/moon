import React from "react";
import "../styles/catalogue.css";
import Nav from "../components/Nav";
import Item from "../components/Item";
import Footer from "../components/Footer";
import ButtonSize from "../components/ButtonSize";
import ButtonPrice from "../components/ButtonPrice.jsx";

function Catalogue() {
  return (
    <>
      <Nav />
      <div className="container-title-category">
        <h2>NOMBRE</h2>
      </div>
      <Item />
      <ButtonSize />
      <ButtonPrice />
      <Footer />
    </>
  );
}

export default Catalogue;
