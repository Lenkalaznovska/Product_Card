import React from "react";
import "./Cart.css";

// Cart component displays items in the cart and allows it to be closed
const Cart = ({ cartItems, onClose, onRemove }) => {
  return (
    // Main container for the cart overlay
    <div className="cart-overlay">
      {/* Container for the cart content */}
      <div className="cart-container">
        {/* Button to close the cart */}
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        {/* Cart section heading */}
        <h2>Košík</h2>
        {/* Conditional rendering based on whether the cart is empty or not */}
        {cartItems.length === 0 ? (
          // Message when the cart is empty
          <p>Košík je prázdný</p>
        ) : (
          // List of items in the cart
          <ul className="cart-item-list">
            {cartItems.map((item, index) => (
              // Each item in the cart
              <li key={index} className="cart-item">
                {/* Item image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                {/* Item information */}
                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {/* Item price */}
                  <span>Cena: {item.price} Kč</span>
                  {/* Button to remove item from the cart */}
                  <button
                    className="remove-button"
                    onClick={() => onRemove(item)}
                  >
                    Odebrat
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
