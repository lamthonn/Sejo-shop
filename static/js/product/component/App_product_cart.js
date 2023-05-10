import html from "../core.js";
import { connect } from "../store.js"
import Product_cart from "./Product_cart.js";

function App_product_cart({ products }) {
    return html`
        <div class="slider">
            ${[...Array(8).keys()].map(index => Product_cart({ products, index }))}
        </div>
    `
}


export default connect()(App_product_cart);