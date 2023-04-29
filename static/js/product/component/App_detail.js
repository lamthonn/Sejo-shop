import html from "../core.js";
import { connect } from "../store.js";
// import productDetail from "./product_detail.js";

function App_detail({products,isdetail}) {
    return html`
    <div class="product">
        <div class="product_img">
            <img src="./static/image/product/${products[isdetail].title}.jpg" alt="">
        </div>
        <div class="product-information">
            <h1>Air Jordan XXXVII PF</h1>
            <p>Men's Basketball Shoes</p>
            <div class="price">
                <h2><span>Price :</span> <span style="font-family: 'Times New Roman', Times, serif;">3.600.000 VND</span></h2>
                <p><span>sale: </span> 20%</p>
            </div>
            <hr>

            <h2>Size:</h2>
            <div class="size">
                <button>36</button>
                <button>38</button>
                <button>39</button>
                <button>40</button>
                <button>41</button>
                <button>42</button>
                <button>43</button>
            </div>

            <div class="quantity">
                <h3>Quantity: </h3>
                <button onclick="tru()" style="margin-left: 1rem;">-</button>
                <div id="so_luong" style="margin: 0 1rem;">1</div>
                <button onclick="cong()">+</button>
            </div>

            <div class="payment">
                <button>Buy</button>
                <button>Add to cart</button>
            </div>
        </div>
    </div>
    
    `
}
export default connect()(App_detail);