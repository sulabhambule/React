import React, { useState, useEffect, useContext } from "react";
import "../../App.css";
import "./cart.css";
import { CartContext } from "../../Features/ContextProvider";

const Cart = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const [imageSrc, setImageSrc] = useState("");
  const [starsSrc, setStarsSrc] = useState("");
  const [checkmarkSrc, setCheckmarkSrc] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`../../${product.image}`);
        setImageSrc(image.default);
      } catch (error) {
        console.error("Error loading image: ", error);
      }
    };

    const loadStarsImage = async () => {
      try {
        const starsImage = await import(
          `../../images/ratings/rating-${product.rating.stars * 10}.png`
        );
        setStarsSrc(starsImage.default);
      } catch (error) {
        console.error("Error loading stars image: ", error);
      }
    };

    const loadCheckmarkImage = async () => {
      try {
        const checkmarkImage = await import(`../../images/icons/checkmark.png`);
        setCheckmarkSrc(checkmarkImage.default);
      } catch (error) {
        console.error("Error loading checkmark image: ", error);
      }
    };

    loadImage();
    loadStarsImage();
    loadCheckmarkImage();
  }, [product.image, product.rating.stars]);

  const formatCurrency = (priceCents) => {
    return (Math.round(priceCents) / 100).toFixed(2);
  };

  const getPrice = () => {
    return `$${formatCurrency(product.priceCents)}`;
  };

  const extraInfoHTML = () => {
    return "";
  };

  const handleOnClick = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product,
        quantity,
      },
    });
  };

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={imageSrc} alt={product.name} />
      </div>
      <div className="product-name limit-text-to-2-lines">{product.name}</div>
      <div className="product-rating-container">
        <img className="product-rating-stars" src={starsSrc} alt="rating" />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>
      <div className="product-price">{getPrice()}</div>
      <div className="product-quantity-container">
        <select
          defaultValue="1"
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        >
          {[...Array(10)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
      <div
        className="product-extra-info"
        dangerouslySetInnerHTML={{ __html: extraInfoHTML() }}
      />
      <div className="product-spacer"></div>
      <div className="added-to-cart">
        <img src={checkmarkSrc} alt="Added to cart" />
        Added
      </div>
      <button
        className="add-to-cart-button button-primary js-add-to-cart"
        data-product-id={product.id}
        onClick={handleOnClick}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;
