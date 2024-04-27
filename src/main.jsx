import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Catalogue from "./Pages/Catalogue.jsx";
import ItemDetail from "./Pages/ItemDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/categories",
    element: <Catalogue />,
    children: [
      {
        path: "/categories/item/",
        element: <ItemDetail />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
