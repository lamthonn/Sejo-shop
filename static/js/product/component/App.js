import html from "../core.js";
import { connect } from "../store.js";


function App({ products }) {
    return html`
    <h1>${products[0].title}</h1>
    `
}

export default connect()(App);