

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; 
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty!</h2>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p>Price: Rs. {item.price}</p>
              <p>Size: {item.size}</p>
              <p>Quantity: {item.quantity}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>Total Price: Rs. {totalPrice}</p>
        <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
