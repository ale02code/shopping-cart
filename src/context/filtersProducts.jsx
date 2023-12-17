import React, { createContext, useState } from "react";

export const FilterProductsContext = createContext();

export function FilterProductsProvider({ children }) {
  const [filter, setFilter] = useState({
    category: "all",
    minPrice: "0",
    maxPrice: "2000",
    title: "",
  });
  return (
    <FilterProductsContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterProductsContext.Provider>
  );
}
