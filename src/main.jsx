import React from "react";
import ReactDOM from "react-dom/client";
import { FilterProductsProvider } from "./context/filtersProducts";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <FilterProductsProvider>
      <App></App>
    </FilterProductsProvider>
  </React.StrictMode>
);
