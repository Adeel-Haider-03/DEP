// Slider functionality with thumbnail selection
const images = document.querySelectorAll('#productSlider img');
const thumbnails = document.querySelectorAll('.thumbnail');
let currentIndex = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
  updateSlider((currentIndex + 1) % images.length);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  updateSlider((currentIndex - 1 + images.length) % images.length);
});

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    updateSlider(index);
  });
});

function updateSlider(index) {
  images[currentIndex].classList.remove('active');
  thumbnails[currentIndex].classList.remove('active');
  currentIndex = index;
  images[currentIndex].classList.add('active');
  thumbnails[currentIndex].classList.add('active');
}

// Accordion functionality with smooth animation
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
  accordion.addEventListener('click', function() {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      // Panel is already open, close it
      panel.style.maxHeight = null;
    } else {
      // Panel is closed, open it
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});


// Modal functionality for cart
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeBtn = document.querySelector('.close');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
let cart = [];
let totalPrice = 0;

cartBtn.addEventListener('click', () => {
  cartModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == cartModal) {
    cartModal.style.display = 'none';
  }
});

// Add to cart functionality
document.getElementById('addToCartBtn').addEventListener('click', () => {
  const product = { name: "Product Name", price: 29.99 };
  cart.push(product);
  totalPrice += product.price;
  updateCart();
});

function updateCart() {
  cartItemsContainer.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsContainer.appendChild(div);
  });
  cartCount.textContent = cart.length;
  cartTotal.textContent = totalPrice.toFixed(2);
}
