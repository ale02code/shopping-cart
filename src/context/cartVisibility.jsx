import React, { createContext, useState } from "react";

export const CartVisibilityContext = createContext();

export function CartVisibilityProvider({ children }) {
  const [cartVisibility, setCartVisibility] = useState(false);
  const handleCartIsNotVisible = () => {
    setCartVisibility(false);
  };

  const handleCartIsVisible = () => {
    setCartVisibility(true);
  };

  return (
    <CartVisibilityContext.Provider
      value={{ handleCartIsVisible, handleCartIsNotVisible, cartVisibility }}
    >
      {children}
    </CartVisibilityContext.Provider>
  );
}
