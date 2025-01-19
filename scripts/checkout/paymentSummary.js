import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';

export function renderPaymentSummary() {
  let productPrice = 0;
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPrice += product.price * cartItem.quantity;
  }); 

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
        Order Summary
    </div>

    
    <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">
            UgShs${productPrice}
        </div>
    </div>

    <button class="place-order-button button-primary">
        Place your order
    </button>
    `;

    document.querySelector('.js-payment-summary')
      .innerHTML = paymentSummaryHTML;
}