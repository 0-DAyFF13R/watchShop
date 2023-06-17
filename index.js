const cart = new Cart();

function addToCart(goodName, price, img, imgWidth) {
    const item = {
        goodName: goodName,
        price: price,
        img: img,
        imgWidth: imgWidth
    }

    function saveCartToLocalStorage() {
        localStorage.setItem('cartItems', JSON.stringify(cart.items));
    }
      
    window.addEventListener('beforeunload', saveCartToLocalStorage);

    cart.addItem(item);
}