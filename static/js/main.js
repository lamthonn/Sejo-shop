import App from "./product/component/App.js";
import { attach } from "./product/store.js";

attach(App, document.getElementById('root'))




const hearts = document.querySelectorAll('.product-heart');
console.log(hearts);

hearts.forEach(function (heart) {
    console.log(heart);
    heart.addEventListener('click', function (e) {
        console.log(e.currentTarget.classList)
        const classes = e.currentTarget.classList;
        if(classes.contains('color--red'))
        {
            classes.remove('color--red');
        }
        else
        {
            classes.add('color--red');
        }
    })
})