import App_product_cart from '../component/App_product_cart.js';
import { attach } from '../store.js';

attach(App_product_cart, document.getElementById('root'));


document.querySelector('.bi-x-lg').addEventListener('click', function() {
    document.querySelector('.free-delivery').style.display = 'none';
})

const products = document.querySelectorAll('.product');
// console.log(products[1]);

document.querySelectorAll('.bi-trash').forEach((trash, index) => {
    trash.addEventListener('click', function() {
        products[index].style.display = 'none';
    })
})


const slider = document.querySelector('.slider');
const firstProduct = document.querySelectorAll('.slider-product')[0]
const arrowIcons = document.querySelectorAll('.icon-slide i')

const firstProductWidth = firstProduct.clientWidth;
console.log(firstProductWidth);
console.log(slider.scrollLeft)


arrowIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        slider.scrollLeft += icon.id === 'left' ? -firstProductWidth : firstProductWidth;
        console.log(slider.scrollLeft);
    })
})

