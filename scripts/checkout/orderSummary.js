import {cart, removeFromCart} from '../../data/cart.js';
import {products, getProduct} from '../../data/products.js';
import {renderPaymentSummary} from './paymentSummary.js';

export function renderOrderSummary() {
    
    let cartSummaryHTML = '';

    cart.forEach((cartItem) => {
        const productId = cartItem.productId;

        const matchingProduct = getProduct(productId);

        cartSummaryHTML += `
            <div class="cart-item-container 
            js-cart-item-container-${matchingProduct.id}">
                
                <div class="cart-item-details-grid">
                    <img class="product-image"
                    src="${matchingProduct.image}">

                    <div class="cart-item-details">
                    <div class="product-name">
                        ${matchingProduct.name}
                    </div>
                    <div class="product-price">
                        UgShs${matchingProduct.price}
                    </div>
                    <div class="product-quantity">
                        <span>
                        Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                        </span>
                        <span class="delete-quantity-link link-primary js-delete-link" data-product-id = "${matchingProduct.id}">
                        Delete
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        `;
        });

    document.querySelector('.js-order-summary')
        .innerHTML = cartSummaryHTML;

    document.querySelectorAll('.js-delete-link')
        .forEach((link) => {
            link.addEventListener('click', () => {
                const productId = link.dataset.productId;
                removeFromCart(productId);

                const itemContainer = document.querySelector(
                    `.js-cart-item-container-${productId}`
                );
                itemContainer.remove();

                renderPaymentSummary();
            });
            
        });
}


    
