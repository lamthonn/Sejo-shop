import html from "../core.js";

function Product_cart({ products, index }) {
    return html`
    <a href='product_detail.html' class="slider-product" onclick="dispatch('ABC', ${index})">
        <img src="./static/image/product/${products[index].title}.jpg" alt="" class="slider-product-img">
        <span class="slider-product-title">${products[index].title}</span>
        <span class="slider-product-type">${products[index].type}</span>
        <span class="slider-product-price">đ${products[index].price}</span>
    </a>
    `
}

export default Product_cart;