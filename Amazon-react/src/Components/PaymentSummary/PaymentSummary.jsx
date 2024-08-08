import React, { useContext } from "react";
import { CartContext } from "../../Features/ContextProvider";
import {
  getDeliveryOption,
  formatCurrency,
} from "../../utility/Utility.js";
import "../../App.css";

const PaymentSummary = () => {
  const { cart } = useContext(CartContext); // Access cart here

  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
    const cartProduct = cartItem.product;
    if (cartProduct) {
      productPriceCents += cartProduct.priceCents * cartItem.quantity;

      const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
      shippingPriceCents += deliveryOption.priceCents;
    }
  });

  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.18;
  const totalCents = totalBeforeTaxCents + taxCents;

  return (
    <div>
      <div className="payment-summary-title">Order Summary</div>

      <div className="payment-summary-row">
        <div>Items ({cart.length}):</div>
        <div className="payment-summary-money">
          {formatCurrency(productPriceCents)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div className="payment-summary-money">
          {formatCurrency(shippingPriceCents)}
        </div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="payment-summary-money">
          {formatCurrency(totalBeforeTaxCents)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (18%):</div>
        <div className="payment-summary-money">{formatCurrency(taxCents)}</div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money">
          {formatCurrency(totalCents)}
        </div>
      </div>

      <button
        className="place-order-button button-primary js-place-order"
      >
        Place your order
      </button>
    </div>
  );
};

export default PaymentSummary;
