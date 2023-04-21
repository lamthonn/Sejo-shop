import App from "./product/component/App.js";
import { attach } from "./product/store.js";

attach(App, document.getElementById('root'))