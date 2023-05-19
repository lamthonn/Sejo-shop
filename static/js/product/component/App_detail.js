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
				<h1>${products[isdetail].title}</h1>
				<p>${products[isdetail].type}</p>
				<div class="rating">
					<div class="star">
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
					</div>
					<div class="buyer">
						<p><i class="fa-regular fa-face-smile"></i> 9.523 Reviews</p>
					</div>
				</div>
				<div class="price">
					<h2><span>Price :</span> <span>${products[isdetail].price}VND</span></h2>
					<h3><span>sale: </span >${products[isdetail].sales}%</h3>
				</div>

				<div class="description">
					<h2>Description:</h2>
					<p>${products[isdetail].description}</p>
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
					<h2>Quantity: </h2>
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