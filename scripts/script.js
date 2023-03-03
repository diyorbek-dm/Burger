const product = {
    crazy: {
        name: 'Crazy',
        price: 31000,
        img: 'img/crazy.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    light: {
        name: 'Light',
        price: 26000,
        img: 'img/light.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    cheeseburger: {
        name: 'CheeseBurger',
        price: 29000,
        img: 'img/cheseeBurger.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    dburger: {
        name: 'dBurger',
        price: 24000,
        img: 'img/dBurger.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
}

const productBtns = document.querySelectorAll('.card__item_btn'),
    productMenu = document.querySelector('.basket__inner'),
    basketBtn = document.querySelector('.basket'),
    basketClose = document.querySelector('.close'),
    menuList = document.querySelector('.basket__list'),
    totalPriceMenu = document.querySelector('.basket__down_price'),
    productCount = document.querySelector('.basket__span');


productBtns.forEach(item => {
    item.addEventListener('click', function () {
        plusOrMinus(this)
    })
})


function plusOrMinus(item) {

    let parent = item.closest('.card'),
        parentId = parent.getAttribute('id')

    product[parentId].amount++;

    basket()
}

function basket() {

    let productArr = [],
        totalCount = 0;


    for (const key in product) {
        let pk = product[key];

        const ProductCard = document.querySelector(`#${pk.name.toLowerCase()}`),
            productIndicator = ProductCard.querySelector('.card__span');


        if (pk.amount) {
            productArr.push(pk)
            productCount.classList.add('active')
            productIndicator.classList.add('active')
            // totalCount = totalCount + pk.amount
            totalCount += pk.amount
            productIndicator.innerHTML = pk.amount;
        } else {
            productIndicator.classList.remove('active')
            productIndicator.innerHTML = 0;
        }

        productCount.innerHTML = totalCount;

    }
}


document.addEventListener('click', event => {
    const clickBur = event.composedPath().includes(basketClose)
    const productProMenu = event.composedPath().includes(productMenu)
    const clickCon = event.composedPath().includes(basketBtn)

    if (clickCon) {
        productMenu.classList.toggle('active')
    } else if (clickBur) {
        productMenu.classList.remove('active')
    } else if (productProMenu) {
        productMenu.classList.add('active')
    } else {
        productMenu.classList.remove('active')
    }
})

// basketBtn.addEventListener('click', event => {
//     if (basketBtn) {
//         productMenu.classList.toggle('active')
//     } else {
//         productMenu.classList.remove('active')
//     }
// })

// basketClose.addEventListener('click', () => {
//     productMenu.classList.remove('active')
// })