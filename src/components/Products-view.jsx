import React from "react";
import SearchProducts from "./Search-products.jsx";
import { useCart } from "../hooks/useCart";

function productsView({ products }) {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <div className="text-white h-full w-full bg-black relative">
      <SearchProducts />
      <section className="mt-16 mb-3 grid-cols-2 grid overflow-x-hidden overflow-y-auto gap-5 place-items-center h-[420px] mb:p-0 mb:w-full mb:gap-4 mb:h-full">
        {products.map((item) => {
          const isProductInCart = checkProductInCart(item);

          return (
            <div
              key={item.id}
              className="w-[250px] h-[200px] overflow-hidden rounded-md p-2 bg-zinc-70 mb:w-[90%] mb:h-[240px] mb:bg-gray-500 mb:flex mb:justify-center mb:items-center mb:flex-col mb:p-2 mb:px-1"
            >
              <strong className="overflow-hidden mb:h-[10%]">
                {item.title}
              </strong>
              <img
                src={item.thumbnail}
                className="w-full h-32 object-cover overflow-hidden mb:h-[70%]"
              />
              <div className="flex justify-between items-center mt-2 mb:h-[20%]">
                <p>{`Price: $${item.price}`}</p>
                <button
                  className={
                    isProductInCart
                      ? "bg-red-600 text-white px-3 rounded-md font-semibold"
                      : "bg-blue-600 text-white px-3 rounded-md font-semibold"
                  }
                  onClick={() => {
                    isProductInCart ? removeFromCart(item) : addToCart(item);
                  }}
                >
                  {isProductInCart ? "Remove To Cart" : "Add To Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default productsView;
