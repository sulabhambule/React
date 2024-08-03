import React from 'react';
import { Link } from 'react-router-dom';
import amazonLogo from '../../images/amazon-logo-white.png'
import amazonMobileLogo from '../../images/amazon-mobile-logo-white.png';
import searchIcon from '../../images/icons/search-icon.png';
import cartIcon from '../../images/icons/cart-icon.png';
import './Header.css';

const Header = () => {
  return (
    <div className="amazon-header">
      <div className="amazon-header-left-section">
        <Link to="/" className="header-link">
          <img
            className="amazon-logo"
            src={amazonLogo}
            alt="Amazon Logo"
          />
          <img
            className="amazon-mobile-logo"
            src={amazonMobileLogo}
            alt="Amazon Mobile Logo"
          />
        </Link>
      </div>

      <div className="amazon-header-middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src={searchIcon} alt="Search" />
        </button>
      </div>

      <div className="amazon-header-right-section">
        <Link className="orders-link header-link" to="/orders">
          <span className="returns-text">Returns</span>
          <span className="orders-text">& Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={cartIcon} alt="Cart" />
          <div className="cart-quantity js-cart-quantity">0</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
