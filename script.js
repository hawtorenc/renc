let cart = [];

function showPage(pageId) {
  var pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.add("hidden");
  });
  document.getElementById(pageId).classList.remove("hidden");
  if (pageId === "cart") {
    displayCart();
  }
}

function addToCart(name, price) {
  cart.push({ name, price });
  alert(`${name} has been added to your cart.`);
}

function displayCart() {
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = "";
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is currently empty.</p>";
  } else {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
      cartContainer.innerHTML += `
                <div class="cart-item">
                    <span>${item.name}</span>
                    <span>$${item.price.toFixed(2)}</span>
                </div>
            `;
    });
    cartContainer.innerHTML += `
            <div class="cart-item">
                <strong>Total:</strong>
                <strong>$${total.toFixed(2)}</strong>
            </div>
        `;
  }
}
