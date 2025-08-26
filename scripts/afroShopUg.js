import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";

// Function to generate star rating HTML (Amazon style)
function generateStarRating(rating) {
  const fullStars = Math.floor(rating.stars);
  const hasHalfStar = rating.stars % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  let starsHTML = "";

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<span class="star star-full">★</span>';
  }

  // Half star
  if (hasHalfStar) {
    starsHTML += '<span class="star star-half">★</span>';
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<span class="star star-empty">☆</span>';
  }

  return starsHTML;
}

// Format price for better display
function formatPrice(price) {
  return price.toLocaleString();
}

// Amazon-style search functionality
function searchProducts(searchTerm) {
  if (!searchTerm.trim()) {
    return products; // Return all products if search is empty
  }

  const searchTermLower = searchTerm.toLowerCase();
  
  return products.filter(product => {
    // Search in product name
    const nameMatch = product.name.toLowerCase().includes(searchTermLower);
    
    // Search in keywords
    const keywordMatch = product.keywords && product.keywords.some(keyword => 
      keyword.toLowerCase().includes(searchTermLower)
    );
    
    return nameMatch || keywordMatch;
  });
}

// Generate HTML for products
function generateProductsHTML(productsToShow) {
  let productsHTML = "";

  if (productsToShow.length === 0) {
    productsHTML = `
      <div class="no-results">
        <h3>No products found</h3>
        <p>Try searching for something else or browse all products.</p>
      </div>
    `;
    return productsHTML;
  }

  productsToShow.forEach((product) => {
    const starsHTML = generateStarRating(product.rating);
    const formattedPrice = formatPrice(product.price);

    productsHTML += `
    <div class="product-container">
        <div class="product-image-container">
            <img class="product-image"
                src="${product.image}"
                alt="${product.name}">
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${product.name}
        </div>
        
        <div class="product-rating">
            <div class="rating-stars">
                ${starsHTML}
            </div>
            <div class="rating-count">(${product.rating.count})</div>
        </div>

        <div class="product-price">
            UgShs ${formattedPrice}
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
            <img src="images/icons/checkmark.png" alt="Added">
            Added to Cart
        </div>

        <button class="add-to-cart-button button-primary 
        js-add-to-cart-button" 
        data-product-id="${product.id}">
            Add to Cart
        </button>
    </div>`;
  });

  return productsHTML;
}

// Render products to the page
function renderProducts(productsToShow = products) {
  const productsHTML = generateProductsHTML(productsToShow);
  document.querySelector('.js-products-grid').innerHTML = productsHTML;
  
  // Re-attach event listeners to new buttons
  attachAddToCartListeners();
}

// Initial render
renderProducts();

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartitem) => {
    cartQuantity += cartitem.quantity;
  });

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}

// Show "Added to Cart" message with animation
function showAddedMessage(productId) {
  const productContainer = document
    .querySelector(`[data-product-id="${productId}"]`)
    .closest(".product-container");
  const addedMessage = productContainer.querySelector(".added-to-cart");
  const addButton = productContainer.querySelector(".js-add-to-cart-button");

  // Show the "Added" message
  addedMessage.style.opacity = "1";
  addButton.innerHTML = "Added!";
  addButton.style.background = "#007600";
  addButton.style.borderColor = "#007600";
  addButton.style.color = "white";

  // Reset after 2 seconds
  setTimeout(() => {
    addedMessage.style.opacity = "0";
    addButton.innerHTML = "Add to Cart";
    addButton.style.background = "#6b46c1"; // New purple color
    addButton.style.borderColor = "#6b46c1";
    addButton.style.color = "white";
  }, 2000);
}

// Attach event listeners to add to cart buttons
function attachAddToCartListeners() {
  document.querySelectorAll(".js-add-to-cart-button").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;

      addToCart(productId);
      updateCartQuantity();
      showAddedMessage(productId);
    });
  });
}

// Search functionality
function setupSearch() {
  const searchBar = document.querySelector('.search-bar');
  const searchButton = document.querySelector('.search-button');
  
  // Search on button click
  searchButton.addEventListener('click', () => {
    const searchTerm = searchBar.value;
    const filteredProducts = searchProducts(searchTerm);
    renderProducts(filteredProducts);
  });
  
  // Search on Enter key press
  searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const searchTerm = searchBar.value;
      const filteredProducts = searchProducts(searchTerm);
      renderProducts(filteredProducts);
    }
  });
  
  // Real-time search as user types (debounced)
  let searchTimeout;
  searchBar.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      const searchTerm = e.target.value;
      const filteredProducts = searchProducts(searchTerm);
      renderProducts(filteredProducts);
    }, 300); // 300ms delay for better performance
  });
}

// Initialize everything
updateCartQuantity();
setupSearch();
