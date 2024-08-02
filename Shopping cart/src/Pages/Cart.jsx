import React, { useContext } from "react";
import CartProduct from "../Components/CartProduct";
import { CartContext } from "../Features/ContextProvider";
import { totalItems, totalPrice } from "../Features/CartReducer";

const Cart = () => {
  const {cart} = useContext(CartContext);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-8">
          {cart.map((product) => (
            <CartProduct product={product}> </CartProduct>
          ))}
        </div>
        <div className="col-4 ">
          <div className="bg-secondary p-2 text-white">
            <h5>Total Items: {totalItems(cart)}</h5>
            <h5>Total Price: ${totalPrice(cart)}</h5>
            <button className="btn btn-warning">CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
