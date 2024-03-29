const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 24.99,
      image: 'https://via.placeholder.com/150'
    },
    // Add more products as needed
];
  
  // Render product cards
const productGrid = document.querySelector('.product-grid');
products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button>Add to Cart</button>
    `;
    productGrid.appendChild(card);
});

const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');

searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);
priceFilter.addEventListener('input', filterProducts);

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const maxPrice = priceFilter.value;

  const filteredProducts = products.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(searchTerm);
    const matchCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchPrice = product.price <= maxPrice;

    return matchSearch && matchCategory && matchPrice;
  });

  renderProducts(filteredProducts);
}

const registrationModal = document.getElementById('registration-modal');
const loginModal = document.getElementById('login-modal');

// Event listeners for modal open/close
document.querySelector('#registration-link').addEventListener('click', openModal.bind(null, registrationModal));
document.querySelector('#login-link').addEventListener('click', openModal.bind(null, loginModal));

// Event listeners for form submission
document.getElementById('registration-form').addEventListener('submit', registerUser);
document.getElementById('login-form').addEventListener('submit', loginUser);

function openModal(modal) {
  modal.style.display = 'block';
}

function closeModal(modal) {
  modal.style.display = 'none';
}

function registerUser(event) {
  event.preventDefault();
  // Implement user registration logic here
}

function loginUser(event) {
  event.preventDefault();
  // Implement user login logic here
}

function renderOrderSummary() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const subtotalElement = document.querySelector('.subtotal');
    const taxElement = document.querySelector('.tax');
    const shippingElement = document.querySelector('.shipping');
    const totalElement = document.querySelector('.total');
  
    cartItemsContainer.innerHTML = '';
    let subtotal = 0;
  
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <span>${item.name} (${item.quantity})</span>
        <span>$${item.price * item.quantity}</span>
      `;
      cartItemsContainer.appendChild(cartItem);
  
      subtotal += item.price * item.quantity;
    });
  
    const tax = subtotal * 0.08; // Assuming an 8% tax rate
    const shipping = subtotal > 50 ? 0 : 5.99; // Free shipping for orders over $50
    const total = subtotal + tax + shipping;
  
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    shippingElement.textContent = `$${shipping.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

const checkoutForm = document.getElementById('checkout-form');

checkoutForm.addEventListener('submit', processPayment);

function processPayment(event) {
  event.preventDefault();

  // Collect form data
  const formData = {
    // Collect shipping, billing, and payment information from form inputs
  };

  // Implement payment processing logic here
  // You'll need to integrate with a payment gateway or service
  // and handle the payment process accordingly
  
  // If payment is successful, complete the order
  completeOrder(formData);
}

function completeOrder(orderData) {
  // Send order data to the server
  // Clear the cart
  cart = [];

  // Redirect to a success/confirmation page
  window.location.href = 'order-confirmation.html';
}