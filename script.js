let slideIndex = 0;
const slides = [
  "images/Jordan-1-low-sky-j-purple.png",
  "images/Jordan-1-low-sky-j-purple1.png",
  "images/Jordan-1-low-sky-j-purple2.png",
  "images/Jordan-1-low-sky-j-purple3.png",
];
const cartItems = [];
let showCart = false;

function showSlides() {
  const slidesElem = document.querySelectorAll(".slide");
  slidesElem.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });
}

function moveSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlides();
}

function addToCart() {
  const product = {
    title: "Jordan 1 Low Sky J Purple",
    description:
      "Jordan 1 Low is a silhouette based on the original Jordan 1 High version, designed by Peter Moore. The main idea was to create a lightweight version for casual wear outside basketball courts. It is still produced in many colorways and is one of the most popular models among sneaker enthusiasts.",
    price: "4 800 000",
    image: "images/Jordan-1-low-sky-j-purple1.png",
  };
  cartItems.push(product);
  updateCart();
  toggleCart();
}

function updateCart() {
  const cartItemList = document.getElementById("cartItemList");
  cartItemList.innerHTML = "";
  if (cartItems.length === 0) {
    cartItemList.innerHTML = "<p>Košík je prázdný</p>";
  } else {
    cartItems.forEach((item) => {
      const li = document.createElement("li");
      li.className = "cart-item";
      li.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <span>Cena: ${item.price} Kč</span>
                    <button class="remove-button" onclick="removeFromCart('${item.title}')">Odebrat</button>
                </div>
            `;
      cartItemList.appendChild(li);
    });
  }
}

function removeFromCart(title) {
  const index = cartItems.findIndex((item) => item.title === title);
  if (index > -1) {
    cartItems.splice(index, 1);
  }
  updateCart();
}

function toggleCart() {
  const cartOverlay = document.getElementById("cartOverlay");
  showCart = !showCart;
  cartOverlay.style.display = showCart ? "flex" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(); // Show the initial slide
  setInterval(() => moveSlide(1), 2500); // Change slide every 2.5 seconds
});
