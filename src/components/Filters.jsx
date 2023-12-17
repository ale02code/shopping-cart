import React, { useEffect, useState } from "react";
import { useFilters } from "../hooks/useFilters";

function Filters() {
  const [filterVisibility, setFilterVisibility] = useState("false");
  const [categorySelected, setCategorySelected] = useState("all");
  const { filter, setFilter } = useFilters();

  const handleChangeMinPrice = (event) => {
    setFilter((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeMaxPrice = (event) => {
    setFilter((prevState) => ({
      ...prevState,
      maxPrice: event.target.value,
    }));
  };

  const handleChangeCategoryProducts = (category) => {
    setCategorySelected(category);
    setFilter((prevState) => ({
      ...prevState,
      category,
    }));
  };

  return (
    <aside
      className={
        filterVisibility
          ? "h-full w-1/3 bg-zinc-700 p-2 mb:absolute mb:z-50 mb:-bottom-[350px] mb:h-auto mb:w-full mb:transition-position-bottom mb:duration-300 mb:rounded-t-lg"
          : "h-full w-1/3 bg-zinc-700 p-2 mb:absolute mb:z-50 mb:bottom-0 mb:h-auto mb:w-full mb:transition-position-bottom mb:duration-300 mb:rounded-t-lg"
      }
    >
      <div className="flex justify-center flex-col w-[90%] mx-auto h-full gap-2 mb:w-full mb:flex mb:justify-center mb:items-center">
        <h4
          className="text-center mb-2 text-5xl font-caveat block text-white"
          onClick={() => setFilterVisibility(!filterVisibility)}
        >
          Filters
        </h4>

        <div className="flex flex-col gap-1 mb:w-full mb:flex mb:justify-center mb:items-center">
          <strong className="text-xl text-gray-200">Price Range</strong>
          <div className="flex-col flex justify-center mb:w-full mb:flex mb:justify-center mb:items-center">
            <label htmlFor="min-price" className="text-gray-200 text-lg">
              {`Min Price: ${filter.minPrice}`}
            </label>
            <input
              type="range"
              id="min-price"
              name="min-price"
              className="w-[60%]"
              max={2000}
              onChange={handleChangeMinPrice}
            />
          </div>
          <div className="flex-col flex justify-center mb:w-full mb:flex mb:justify-center mb:items-center">
            <label htmlFor="max-price" className="text-gray-200 text-lg">
              {`Max Price: ${filter.maxPrice}`}
            </label>
            <input
              type="range"
              id="max-price"
              name="max-price"
              className="w-[60%]"
              max={2000}
              value={filter.maxPrice}
              onChange={handleChangeMaxPrice}
            />
          </div>

          <strong className="text-xl text-gray-200">Category</strong>
          <div>
            {[
              { name: "All", id: "all" },
              { name: "Smartphones", id: "smartphones" },
              { name: "Laptops", id: "laptops" },
              { name: "Home Decoration", id: "home-decoration" },
              { name: "Skincare", id: "skincare" },
              { name: "Fragrances", id: "fragrances" },
            ].map(({ name, id }) => (
              <div key={id} className="flex gap-2">
                <input
                  type="checkbox"
                  name={id}
                  id={id}
                  checked={categorySelected === id}
                  onChange={() => handleChangeCategoryProducts(id)}
                />
                <label htmlFor={id} className="text-gray-200 text-lg">
                  {name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Filters;
