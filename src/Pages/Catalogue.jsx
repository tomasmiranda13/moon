import React from "react";
import "../styles/catalogue.css";
import Nav from "../components/Nav";
import Item from "../components/Item";
import Footer from "../components/Footer";

function Catalogue() {
  return (
    <>
      <Nav />
      <div className="container-title-category">
        <h2>NOMBRE</h2>
      </div>
      <Item />
      <Footer />
    </>
  );
}

export default Catalogue;
