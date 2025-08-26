export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = []; // Start with empty cart instead of pre-filled items
}

// Clear cart if it has old test data (optional - remove this in production)
if (cart.length > 0 && cart[0].productId === "e43638ce-6aa0-4b85-b27f-e1d07eb678c6") {
    cart = [];
    localStorage.removeItem('cart');
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    let matchingItem;

       cart.forEach((cartitem) => {
        if (productId === cartitem.productId){
            matchingItem = cartitem;
        }
       });

       if (matchingItem) {
        matchingItem.quantity += 1;
       } else {
        cart.push({
            productId: productId,
            quantity: 1
           }); 
       }
       saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}

