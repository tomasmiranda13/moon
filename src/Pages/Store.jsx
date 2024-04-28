import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/store.css";
import Nav from "../components/Nav.jsx";
import Item from "../components/store/Item.jsx";
import Footer from "../components/Footer.jsx";
import ButtonSize from "../components/store/ButtonSize.jsx";
import ButtonPrice from "../components/store/ButtonPrice.jsx";
import CategoriesAside from "../components/store/CategoriesAside.jsx";

function Store() {
  return (
    <>
      <Nav />
      <div className="container-title-category">
        <h2>NOMBRE</h2>
      </div>
      <div className="container-list-items">
        <CategoriesAside />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Store;
