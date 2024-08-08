import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { CartContext } from "../../Features/ContextProvider";
import { getPrice } from "../../utility/Utility.js";
import { deliveryOptions, getDeliveryOption } from "../../utility/Utility.js";

import "../../App.css";
import "../../Pages/CheckOutPage/CheckOutPage.jsx";
import DeliveryOptions from "../DeliveryOptions/DeliveryOptions";

const OrderSummary = ({ cartProduct }) => {
  const { dispatch } = useContext(CartContext);
  const { product, quantity } = cartProduct;
  const [imageSrc, setImageSrc] = useState("");
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(
    cartProduct.deliveryOptionId || 1
  );
  const [editMode, setEditMode] = useState(false);

  const today = dayjs();
  const deliveryOptionId = cartProduct.deliveryOptionId;
  const deliveryOption = getDeliveryOption(deliveryOptionId);
  const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
  const dateString = deliveryDate.format("dddd, MMMM D");

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`../../${product.image}`);
        setImageSrc(image.default);
      } catch (error) {
        console.error("Error loading image: ", error);
      }
    };

    loadImage();
  }, [product.image]);

  const handleDeliveryOptionChange = (deliveryOptionId) => {
    setSelectedDeliveryOption(deliveryOptionId);
    dispatch({
      type: "UPDATE_DELIVERY_OPTION",
      payload: {
        productId: product.id,
        deliveryOptionId,
      },
    });
  };

  const handleOnDelete = () => {
    dispatch({
      type: "DELETE_FROM_CART",
      payload: {
        productId: product.id,
      },
    });
  };

  const handleUpdateClick = () => {
    setEditMode(true);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { productId: product.id, quantity: newQuantity },
    });
    setEditMode(false);
  };

  return (
    <div
      className={`cart-item-container js-cart-item-container js-cart-item-container-${product.id}`}
    >
      <div className="delivery-date">Delivery date: {dateString}</div>
      <div className="cart-item-details-grid">
        <img className="product-image" src={imageSrc} alt={product.name} />
        <div className="cart-item-details">
          <div className="product-name">{product.name}</div>
          <div className="product-price">{getPrice(product)}</div>
          <div className={`product-quantity js-product-quantity-${product.id}`}>
            <span>
              Quantity:{" "}
              {editMode ? (
                <select value={quantity} onChange={handleQuantityChange}>
                  {[...Array(10).keys()].map((i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              ) : (
                <span className="quantity-label">{quantity}</span>
              )}
            </span>
            {!editMode && (
              <span
                className="update-quantity-link link-primary"
                onClick={handleUpdateClick}
              >
                Update
              </span>
            )}
            <span
              className={`delete-quantity-link link-primary js-delete-link js-delete-link-${product.id}`}
              data-product-id={product.id}
              onClick={handleOnDelete}
            >
              Delete
            </span>
          </div>
        </div>
        <div className="delivery-options">
          <div className="delivery-options-title">
            Choose a delivery option:
          </div>
          <DeliveryOptions
            product={product}
            cartItem={cartProduct}
            deliveryOptions={deliveryOptions}
            handleDeliveryOptionChange={handleDeliveryOptionChange}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
