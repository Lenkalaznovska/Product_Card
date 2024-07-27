import React, { useState, useEffect } from "react";
import "./App.css";
import Cart from "./Cart";

// Component for the cart icon that triggers cart visibility on click
const CartIcon = ({ onClick }) => {
  return (
    <div className="cart-icon" onClick={onClick}>
      <img src="images/icon-cart.png" alt="Košík" />
    </div>
  );
};

const App = () => {
  // State for the current slide index in the carousel
  const [slideIndex, setSlideIndex] = useState(0);

  // State for items in the cart
  const [cartItems, setCartItems] = useState([]);

  // State for showing or hiding the cart
  const [showCart, setShowCart] = useState(false);

  // List of images for the carousel
  const slides = [
    "images/Jordan-1-low-sky-j-purple.png",
    "images/Jordan-1-low-sky-j-purple1.png",
    "images/Jordan-1-low-sky-j-purple2.png",
    "images/Jordan-1-low-sky-j-purple3.png",
  ];

  // Automatically change the slide every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2500);
    // Clear the timer on component unmount
    return () => clearInterval(timer);
  }, [slides.length]);

  // Function to move the slide in the carousel
  const moveSlide = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex < 0) newIndex = slides.length - 1;
      if (newIndex >= slides.length) newIndex = 0;
      return newIndex;
    });
  };

  // Function to add a product to the cart
  const addToCart = () => {
    // Definition of the product being added to the cart
    const product = {
      title: "Jordan 1 Low Sky J Purple",
      description:
        "Jordan 1 Low is a silhouette based on the original Jordan 1 High version, designed by Peter Moore. The main idea was to create a lightweight version for casual wear outside basketball courts. It is still produced in many colorways and is one of the most popular models among sneaker enthusiasts.",
      price: "4 800 000",
      image: "images/Jordan-1-low-sky-j-purple1.png", // Always use the specific image
    };
    // Update the cart state with the new product
    setCartItems([...cartItems, product]);
    // Show the cart
    setShowCart(true);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter((item) => item !== productToRemove));
  };

  // Function to toggle the cart visibility
  const toggleCart = () => setShowCart(!showCart);

  return (
    <>
      {/* Cart icon that triggers the function to show/hide the cart */}
      <CartIcon onClick={toggleCart} />

      {/* Product card */}
      <div className="product-card">
        {/* Badges for marking the iconic model and discount */}
        <div className="badge iconic-badge">Ikonický model</div>
        <div className="badge discount-badge">-20%</div>

        {/* Container for product images */}
        <div className="product-image-container">
          {/* Carousel to display different product slides */}
          <div className="slider">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt="Produkt"
                className={`slide ${index === slideIndex ? "active" : ""}`}
                style={{ display: index === slideIndex ? "block" : "none" }}
              />
            ))}
          </div>
          {/* Controls for moving slides */}
          <div className="controls">
            <div className="prev" onClick={() => moveSlide(-1)}>
              &#10094;
            </div>
            <div className="next" onClick={() => moveSlide(1)}>
              &#10095;
            </div>
          </div>
        </div>

        {/* Product information */}
        <div className="product-info-container">
          <h1 className="product-title">Jordan 1 Low Sky J Purple</h1>
          <p className="product-description">
            Jordan 1 Low is a silhouette based on the original Jordan 1 High,
            designed by Peter Moore. The main idea was to create a lightweight
            version for casual wear outside basketball courts. It is still
            produced in many colorways and is one of the most popular models
            among sneaker enthusiasts.
          </p>
        </div>

        {/* Product details */}
        <div className="product-details-container">
          <span className="label product-shipping-label">Doprava zdarma</span>
          <span className="label product-stock-label">
            Poslední 4 kusy skladem
          </span>
        </div>

        {/* Price information */}
        <div className="price-label-container">
          <span className="label product-price-label">Cena produktu</span>
        </div>
        <div className="price-container">
          <span className="product-price">6 000 000 Kč</span>
          <span className="product-discount-price">4 800 000 Kč</span>
        </div>

        {/* Button to add the product to the cart */}
        <div className="button add-to-cart-button" onClick={addToCart}>
          Koupit hned
        </div>
      </div>

      {/* Conditionally render the cart if showCart is true */}
      {showCart && (
        <Cart
          cartItems={cartItems}
          onClose={toggleCart}
          onRemove={removeFromCart}
        />
      )}
    </>
  );
};

export default App;
