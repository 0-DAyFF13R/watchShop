const cartItems = {
    tissot: {
        goodName: 'Tissot',
        price: 719,
        img: 'assets/tissot.png',
        imgWidth: 200
    },
    longines: {
        goodName: 'Longines',
        price: 2899,
        img: 'assets/longines.png',
        imgWidth: 172
    },
    iwc: {
        goodName: 'IWC',
        price: 1899,
        img: 'assets/iwc.png',
        imgWidth: 140
    },
    certina: {
        goodName: 'Certina',
        price: 659,
        img: 'assets/certina.png',
        imgWidth: 160
    },
    roamer: {
        goodName: 'Roamer',
        price: 429,
        img: 'assets/roamer.png',
        imgWidth: 140
    }
}

let out = '<div class="shop__inner">';

for (let key in cartItems) {
    out += `<div class="shop__block">`;
    out += `<img class="watch-img" src="${cartItems[key].img}" width="${cartItems[key].imgWidth}px" alt="">`;
    out += `<div class="shop__product-desctipton">`;
    out += `<h2>${cartItems[key].goodName}</h2>`;
    out += `<p><span>${cartItems[key].price}</span> $</p>`;
    out += `<button class="btn  shopButton">Добавить в корзину</button>`;
    out += `</div>`;
    out += `</div>`;
}

out += `</div>`;

document.querySelector('.shop__goods').innerHTML = out;


function buttonClicked() {
    this.style.background = '#64b151';
    this.style.color = '#FFF';
    this.style.border = 'none';
    this.style.padding = '3px 15px';
    this.textContent = 'Добавлено!';

    const shopItem = this.closest('.shop__block');
    const goodName = shopItem.querySelector('h2').textContent;
    const price = parseFloat(shopItem.querySelector('p span').textContent);
    const img = shopItem.querySelector('img').src;
    const imgWidth = parseInt(shopItem.querySelector('img').width);

    addToCart(goodName, price, img, imgWidth);
}

let shopButton = document.querySelectorAll('.shopButton')

shopButton.forEach(function (element) {
    element.addEventListener('click', buttonClicked);
});