

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; 
import './Navbar.css';
import logo from '../images/logo.png';

function Navbar() {
  const navigate = useNavigate();
  const { cartItems } = useCart(); 

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const explore = () => {
    navigate('/');
  };

  return (
    <div className="Navbar">
      <div className="logo" onClick={explore}>
        <img src={logo} alt="logo" />
        <h5>Dromkart</h5>
      </div>

      <div className="functions">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
        </ul>
      </div>

      
      <Link to="/cart" className="cart-icon-wrapper">
        <button className="button">
          <Link to="/login">Login</Link>
        </button>

        <div className="cart-icon-wrapper">
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="nav-cart-count">{totalItems}</div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
