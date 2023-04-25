import html from "../core.js";
import { connect } from "../store.js";
import Product from "./product.js";

function App({ products }) {
    return html`
    <div class="list-product">   
        ${products.map((product, index) =>Product({product, index}))}
    </div>

    `
}

export default connect()(App);