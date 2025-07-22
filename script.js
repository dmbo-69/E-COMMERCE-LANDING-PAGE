// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Select the cart counter element
const cartCountEl = document.getElementById("cart-count");

let cartCount = 0;

// Loop over all buttons
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountEl.textContent = cartCount;

    // Optional: Temporary button text change for feedback
    const originalText = button.textContent;
    button.textContent = "✔️ Added!";
    setTimeout(() => {
      button.textContent = originalText;
    }, 1000);
  });
});
