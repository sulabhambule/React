import React, { createContext } from "react";
import { useReducer } from "react";
import CartReducer from "./CartReducer";

const initialState = [];

// Load initial state from localStorage if it exists
const savedCart = localStorage.getItem("cart");
const initialCartState = savedCart ? JSON.parse(savedCart) : initialState;

export const CartContext = createContext();

const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
