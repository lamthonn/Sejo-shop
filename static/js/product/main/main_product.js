import App from "../component/App.js"
import { attach } from "../store.js";

attach(App, document.getElementById('root'));


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$('.navbar-right_sort').addEventListener('click', function () {
    $('.select-sort').classList.toggle('show')
    // $('.select-sort').classList.toggle('tran')
    $('.up1').classList.toggle('show-icon')
    $('.down1').classList.toggle('hide')
})


const allFilter = $$('.Filter-title');

allFilter.forEach((Filter,index) => {
    Filter.addEventListener('click', function() {
        $(`.index${index}`).classList.toggle('show');
    })
})

let clickFirst = true;

if(window.innerWidth <= 600)
{
    clickFirst = false
    $('.title-show').style.display = 'block';
    $('.title-hide').style.display = 'none';
    $('.notice-left').style.display = 'none';
}


$('.navbar-right_filter').addEventListener('click', function() {
    if(!clickFirst)
    {
        $('.title-show').style.display = 'none';
        $('.title-hide').removeAttribute('style');
        $('.notice-left').removeAttribute('style');
        clickFirst=true;
    }
    else {
        $('.title-show').classList.toggle('showBlock')
        $('.title-hide').classList.toggle('hide')
        $('.notice-left').classList.toggle('hide')
        $('.notice-right').classList.toggle('show-product-all');
        $$('.product-image').forEach(img => {
            img.classList.toggle('show-product-image');
        })
    }


})