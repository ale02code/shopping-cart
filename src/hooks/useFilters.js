import { useContext } from "react";
import { FilterProductsContext } from "../context/filtersProducts";

export function useFilters() {
  const { filter, setFilter } = useContext(FilterProductsContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filter.minPrice &&
        product.price <= filter.maxPrice &&
        (filter.title === "" || product.title.toLowerCase() === filter.title.toLowerCase()) &&
        (filter.category === "all" || product.category === filter.category)
      );
    });
  };

  return { filter, setFilter, filterProducts };
}
