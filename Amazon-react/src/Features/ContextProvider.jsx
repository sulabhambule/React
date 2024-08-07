import React, { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext();

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const ContextProvider = ({ children }) => {
  const initialState = getCartFromLocalStorage();
  const [cart, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
