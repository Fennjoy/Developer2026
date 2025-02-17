let cartCount = 0;
let cartItems = [];

function addToCart(name, price) {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    cartItems.push({ name, price });
    alert(`${name} added to cart!`);
    alter("DONE")
    console.log(cartItems);
}