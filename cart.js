class CartPage {
  constructor() {
      this.cartItemsDiv = document.querySelector('.cart__inner');
      this.totalPriceSpan = document.querySelector('.shop__price span');
  }

  displayCartItems() {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      let totalPrice = 0;

      cartItems.forEach(item => {
          const itemDiv = document.createElement('div');
          itemDiv.classList.add('shop__block');

          const img = document.createElement('img');
          img.classList.add('watch-img');
          img.src = item.img;
          img.width = item.imgWidth;
          itemDiv.appendChild(img);

          const productDescriptionDiv = document.createElement('div');
          productDescriptionDiv.classList.add('shop__product-desctipton');

          const h2 = document.createElement('h2');
          h2.textContent = item.goodName;
          productDescriptionDiv.appendChild(h2);

          const p = document.createElement('p');
          p.innerHTML = `<span>${item.price}</span> $`;
          productDescriptionDiv.appendChild(p);

          const cleanButton = document.createElement('button');
          cleanButton.classList.add('btn', 'removeButton');
          cleanButton.textContent = 'Удалить';
          cleanButton.setAttribute('data-index', 'index');
          cleanButton.addEventListener('click', this.removeFromCart.bind(this));
          productDescriptionDiv.appendChild(cleanButton);

          itemDiv.appendChild(productDescriptionDiv);
          this.cartItemsDiv.appendChild(itemDiv);

          totalPrice += item.price;
      });

      this.totalPriceSpan.textContent = totalPrice;
  }
  
  getCartItems() {
      return JSON.parse(localStorage.getItem('cartItems')) || [];
  }

  removeFromCart(item) {
      const cartItems = this.getCartItems();
      const updatedCartItems = cartItems.filter(i => i !== item);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      this.cartItemsDiv.innerHTML = '';
      this.displayCartItems();
  }
}

const cartPage = new CartPage();
cartPage.displayCartItems();

const cart = new Cart();
const cartCleanerBtn = document.querySelector('.shop__cart-cleaner');
cartCleanerBtn.addEventListener('click', cart.cartCleaner.bind(cart));
