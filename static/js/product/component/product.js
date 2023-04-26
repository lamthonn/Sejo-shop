import html from "../core.js";
 

function Product({ product, index }) {
    return html`
        <div class="product">
            <img class="product-image" src="./static/image/product/${product.title}.jpg" alt="">
            <span class="product-title">${product.title}</span>
            <span class="product-type">${product.type}</span>
            <div class="product-price">
                <span class="product-price-sales">2,349,000đ</span>
                <span class="product-price-origin">${product.price}</span>
            </div>
            <div class="product-rate">
                <i class="bi bi-heart-fill color--red"></i>
                <div class="product-rate-right">
                    <i class="bi bi-star-fill color--yellow"></i>
                    <i class="bi bi-star-fill color--yellow"></i>
                    <i class="bi bi-star-fill color--yellow"></i>
                    <i class="bi bi-star-fill color--yellow"></i>
                    <i class="bi bi-star-fill color--yellow"></i>
                    <span class="product-sold">${product.sold} đã bán</span>
                </div>
            </div>
            <div class='product-favourite'>
                <i class="bi bi-check product-favourite-icon"></i>
                <span>Yêu thích</span>
            </div>
            <div class='product-sale-off'>
                <span class='product-sale-off-percent'>${product.sales}%</span>
                <span class='product-sale-off-label'>GIẢM</span>
            </div> 
        </div> 

    `
}

export default Product;