import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ProductListing from "./productsListing/ProductListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <ProductListing />,
  },
]);

function Navigate() {
  return <RouterProvider router={router} />;
}

export default Navigate;
