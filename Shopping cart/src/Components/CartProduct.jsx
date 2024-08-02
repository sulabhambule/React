import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);

  const Increase = (productId) => {
    const Index = cart.findIndex((p) => p.id === productId);
    if (cart[Index].quantity < 10) {
      dispatch({
        type: "INCREASE",
        payload: { id: productId },
      });
    }
  };

  const Decrease = (productId) => {
    const Index = cart.findIndex((p) => p.id === productId);
    if (cart[Index].quantity > 1) {   
      dispatch({
        type: "DECREASE",
        payload: { id: productId },
      });
    }
  };

  const Remove = (productId) => {
    dispatch({
      type: "DELETE",
      payload: { id: productId },
    });
  };

  return (
    <div className="d-flex border mb-3">
      <img src={product.thumbnail} className="w-25 h-25" alt="" />
      <div className="detail ms-4">
        <h4>{product.title}</h4>
        <h4>${product.price}</h4>
        <div className="buttons">
          <button
            className="rounded-circle px-2"
            onClick={() => Decrease(product.id)}
          >
            -
          </button>
          <button className="rounded-circle">{product.quantity}</button>
          <button
            className="rounded-circle px-2"
            onClick={() => Increase(product.id)}
          >
            +
          </button>
        </div>
        <button className="btn btn-sm btn-warning" onClick={() => Remove(product.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
