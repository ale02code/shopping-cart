import React, { useContext } from "react";
import { CatalogVisibilityContext } from "../context/catalogVisibility";
import Close from "../assets/Close.svg";
import Filters from "./Filters.jsx";
import Products from "./Products-view.jsx";
import { products as initialProducts } from "../mocks/products.json";
import { useFilters } from "../hooks/useFilters.js";

function Catalog() {
  const { CatalogNotVisibility, catalogVisibility } = useContext(
    CatalogVisibilityContext
  );

  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return catalogVisibility ? (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black p-2 bg-opacity-70 mb:p-0">
      <section className="h-[500px] w-[90%] max-w-[950px] flex justify-center items-center bg-black rounded-lg relative overflow-hidden mb:w-full mb:h-full">
        <div
          className="absolute top-4 right-1 hover:cursor-pointer z-50"
          onClick={CatalogNotVisibility}
        >
          <img
            src={Close}
            alt="Close Icon"
            draggable="false"
            className="h-10"
          />
        </div>

        <Filters />
        <div className="relative w-3/4 h-full mb:w-full">
          <Products products={filteredProducts} />
        </div>
      </section>
    </div>
  ) : null;
}

export default Catalog;
