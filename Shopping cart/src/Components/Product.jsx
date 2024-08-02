import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  const handleOnClick = () => {
    dispatch({
      type: "ADD",
      payload: {
        product,
      }
    })
  }

  return (
    <div className="col">
      <div class="card">
        <img
          class={product.thumbnail}
          className="card-img-top h-75"
          src="..."
          alt="Card image cap"
        />
        <div class="card-body">
          <h4 class="card-title">{product.title}</h4>
          <h5 class="">${product.price}</h5>

          <a href="#" class="btn btn-primary"
          onClick={handleOnClick}>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
