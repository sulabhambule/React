import React, { useContext } from "react";
import amazonLogo from "../../images/amazon-logo-white.png";
import amazonMobileLogo from "../../images/amazon-mobile-logo-white.png";
import checkoutLockIcon from "../../images/icons/checkout-lock-icon.png";
import { Link } from "react-router-dom";
import "../../App.css";
import "./checkout.css";
import "./checkOutPage.css";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import PaymentSummary from "../../Components/PaymentSummary/PaymentSummary";

import { CartContext } from "../../Features/ContextProvider";

const CheckOutPage = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="amazon-logo" src={amazonLogo} alt="Amazon Logo" />
              <img
                className="amazon-mobile-logo"
                src={amazonMobileLogo}
                alt="Amazon Mobile Logo"
              />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              {cart.length} items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src={checkoutLockIcon} alt="Checkout Lock Icon" />
          </div>
        </div>
      </div>

      <div className="main">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary js-order-summary">
            {cart.map((cartProduct) => (
              <OrderSummary cartProduct={cartProduct} />
            ))}
          </div>

          <div className="payment-summary js-payment-summary">
            <PaymentSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
