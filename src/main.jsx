import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Pages/HomePage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./Pages/Store.jsx";
import CatalogueItems from "./components/store/CatalogueItems.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/store",
    element: <Store />,
    children: [
      {
        path: "/store/category/",
        element: <CatalogueItems />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
