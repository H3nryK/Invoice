let cart = [];

function addToCart(product) {
  // Check if the product is already in the cart
  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
    // If the product is already in the cart, increment the quantity
    existingProduct.quantity += 1;
  } else {
    // If the product is not in the cart, add it with a quantity of 1
    product.quantity = 1;
    cart.push(product);
  }

  // Update the cart UI
  renderCartItems();
}

function renderCartItems() {
  const cartContainer = document.querySelector('.cart-items');
  cartContainer.innerHTML = '';

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <span>${item.name} (${item.quantity})</span>
      <span>$${item.price * item.quantity}</span>
    `;
    cartContainer.appendChild(cartItem);
  });
}