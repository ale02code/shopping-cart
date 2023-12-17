import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';

export function useCart() {
  const cart = useContext(CartContext);

  if (cart === undefined) {
    throw new Error('Cart need a Provider to work');
  }

  return cart
}