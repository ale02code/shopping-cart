import React, { useContext } from "react";
import Close from "../assets/Close-black.svg";
import { CartVisibilityContext } from "../context/cartVisibility";
import { useCart } from "../hooks/useCart";

function CartItem({
  thumbnail,
  title,
  price,
  quantity,
  addToCart,
  removeFromCart,
  id,
}) {
  return (
    <div
      className="w-[260px] h-[200px] min-h-[200px] overflow-hidden rounded-md p-2 bg-zinc-700 text-white"
      key={id}
    >
      <div className="flex justify-between items-center">
        <strong className="overflow-hidden">{title}</strong>
        <p>{`Price: ${price}$`}</p>
      </div>
      <img
        src={thumbnail}
        className="w-full h-32 object-cover overflow-hidden"
      />
      <div className="flex justify-between items-center mt-2">
        <div className="flex">
          <p>Qty: {quantity}</p>
          <button
            className="bg-white text-black px-2 rounded-md mx-1"
            onClick={addToCart}
          >
            +
          </button>
        </div>
        <button
          className="bg-white px-3 text-black rounded-md font-semibold"
          onClick={removeFromCart}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

function Cart() {
  const { removeFromCart, addToCart, cart, cleanCart } = useCart();

  const { cartVisibility, handleCartIsNotVisible } = useContext(
    CartVisibilityContext
  );

  return (
    <div
      className={
        cartVisibility
          ? "h-full w-full fixed bg-black/95 left-0 top-0 z-50 flex justify-end items-center"
          : "hidden"
      }
    >
      <section className="bg-white h-screen w-80 max-w-[950px] flex justify-center items-center relative rounded-l-lg overflow-auto">
        <div className="w-full h-14 px-2 absolute top-0 flex justify-between items-center z-[75]">
          <button
            className="bg-zinc-700 py-1 px-3 h-10 rounded-md text-white font-semibold hover:cursor-pointer"
            onClick={cleanCart}
          >
            Reset Cart
          </button>
          <img
            src={Close}
            alt="Close Icon"
            className="h-10 hover:cursor-pointer z-50 block"
            onClick={handleCartIsNotVisible}
          />
        </div>
        <div className="h-full w-full flex justify-center items-center relative">
          <section className="flex flex-col justify-center items-center gap-2 overflow-hidden absolute top-14">
            {cart.map((product) => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                removeFromCart={() => removeFromCart(product)}
                {...product}
              />
            ))}
          </section>
        </div>
      </section>
    </div>
  );
}

export default Cart;
