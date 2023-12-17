import React, { useContext, useEffect } from "react";
import { useFilters } from "../hooks/useFilters";
import { CatalogVisibilityContext } from "../context/catalogVisibility";

function SearchProducts() {
  const { cartVisibility } = useContext(CatalogVisibilityContext);
  const { setFilter } = useFilters();

  const handleSearch = (event) => {
    setFilter((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  useEffect(() => {
    setFilter((prevState) => ({
      ...prevState,
      title: "",
    }));
  }, [cartVisibility]);

  return (
    <div className="absolute z-40 -top-12 w-full flex justify-center items-center">
      <input
        type="text"
        placeholder="Search..."
        className="py-1 px-2 rounded-md bg-transparent text-white placeholder:text-gray-300 border-2 border-white outline-none w-1/2 mb:w-44"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchProducts;
