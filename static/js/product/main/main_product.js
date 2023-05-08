import App from "../component/App.js"
import { attach } from "../store.js";

attach(App, document.getElementById('root'));


document.querySelector('.navbar-right_sort').addEventListener('click', function () {
    document.querySelector('.select-sort').classList.toggle('show')
    // document.querySelector('.select-sort').classList.toggle('tran')
    document.querySelector('.up1').classList.toggle('show-icon')
    document.querySelector('.down1').classList.toggle('hide')
})


const allFilter = document.querySelectorAll('.Filter-title');

allFilter.forEach((Filter,index) => {
    Filter.addEventListener('click', function() {
        document.querySelector(`.index${index}`).classList.toggle('show');
    })
})

document.querySelector('.navbar-right_filter').addEventListener('click', function() {
    document.querySelector('.title-show').classList.toggle('showBlock')
    document.querySelector('.title-hide').classList.toggle('hide')
    document.querySelector('.notice-left').classList.toggle('hide')
    document.querySelector('.notice-right').classList.toggle('show-product-all');
    document.querySelectorAll('.product-image').forEach(img => {
        img.classList.toggle('show-product-image');
    })
})