// src/context/CartContext.jsx

import React, { createContext, useState, useContext } from "react";

// Create CartContext
export const CartContext = createContext();

// CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Initialized as an empty array

  // Add to cart function
  const addToCart = (product, size, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.size === size
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, size, quantity }];
      }
    });
  };

  // Remove from cart function
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Clear cart function
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// useCart custom hook
export const useCart = () => useContext(CartContext);
