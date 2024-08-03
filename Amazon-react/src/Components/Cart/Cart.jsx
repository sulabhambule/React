import React from "react";
import "../../App.css";
import "./cart.css";

const Cart = ({ key, product }) => {
  
  const getStarsUrl = () => {
    return `images/ratings/rating-${product.rating.stars * 10}.png`;
  }

  const formatCurrency = (priceCents) => {
    return (Math.round(priceCents) / 100).toFixed(2);
  }

  const getPrice = () => {
    return `$${formatCurrency(product.priceCents)}`;
  }

  const extraInfoHTML = () => {
    return ''; // Customize this to return product-specific extra info if available
  }

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={product.image} alt={product.name} />
      </div>
      <div className="product-name limit-text-to-2-lines">{product.name}</div>
      <div className="product-rating-container">
        <img className="product-rating-stars" src={getStarsUrl()} alt="rating" />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>
      <div className="product-price">{getPrice()}</div>
      <div className="product-quantity-container">
        <select defaultValue="1">
          {[...Array(10)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="product-extra-info" dangerouslySetInnerHTML={{ __html: extraInfoHTML() }} />
      <div className="product-spacer"></div>
      <div className="added-to-cart">
        <img src="images/icons/checkmark.png" alt="Added to cart" />
        Added
      </div>
      <button
        className="add-to-cart-button button-primary js-add-to-cart"
        data-product-id={product.id}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;
