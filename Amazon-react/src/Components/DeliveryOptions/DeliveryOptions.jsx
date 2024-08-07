import React, { useContext } from "react";
import dayjs from "dayjs";
import { formatCurrency } from "../../utility/Utility.js";
import { CartContext } from "../../Features/ContextProvider";

const DeliveryOptions = ({ product, cartItem, deliveryOptions, handleDeliveryOptionChange }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="delivery-options">
      {deliveryOptions.map((deliveryOption) => {
        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
        const dateString = deliveryDate.format("dddd, MMMM D");

        const priceString =
          deliveryOption.priceCents === 0
            ? "FREE"
            : `$${formatCurrency(deliveryOption.priceCents)} -`;

        const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

        return (
          <div
            key={deliveryOption.id}
            className="delivery-option js-delivery-option"
            data-product-id={product.id}
            data-delivery-option-id={deliveryOption.id}
            onClick={() => handleDeliveryOptionChange(deliveryOption.id)}
            role="radio"
            aria-checked={isChecked}
          >
            <input
              type="radio"
              checked={isChecked}
              className="delivery-option-input"
              name={`delivery-option-${product.id}`}
              readOnly
            />
            <div>
              <div className="delivery-option-date">{dateString}</div>
              <div className="delivery-option-price">
                {priceString} Shipping
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DeliveryOptions;
