// src/pages/ProductDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/product"; 
import { useCart } from "../context/CartContext"; 
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart(); 
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("s");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const selectedProduct = products.find(p => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, size, quantity);
      alert("Item added to cart!");
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details">
      <div className="product-info">
        <h1>{product.title}</h1>
        <img className="product-image" src={product.image} alt={product.title} />
        <p className="product-price">Price: ₹{product.price}</p>
        <p>Brand: {product.Powered}</p>

        <div className="size-options">
          <h3>Select Size</h3>
          <div className="size-buttons">
            {["s", "m", "l"].map((s) => (
              <button
                key={s}
                className={`size-btn ${size === s ? "selected" : ""}`}
                onClick={() => setSize(s)}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="quantity-section">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
