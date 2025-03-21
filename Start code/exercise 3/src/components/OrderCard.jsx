import React from "react";

export default function OrderCard({ product, price, quantity, onQuantityChange }) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>{`$ ${price.toFixed(2)}`}</small>
      </div>

      <div className="order-quantity">
        <div
          className="order-button"
          onClick={() => quantity > 0 && onQuantityChange(-1)} // Decrease quantity
          style={{
            backgroundColor: quantity === 0 ? "#bfbfbf" : "", // Set gray when quantity is 0
            cursor: quantity === 0 ? "not-allowed" : "pointer", // Disable pointer on click when quantity is 0
          }}
        >
          -
        </div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={() => onQuantityChange(1)}>+</div> {/* Increase quantity */}
      </div>
    </div>
  );
}