import Product_detail from "./product/component/product_detail.js";
import { attach } from "./product/store.js";

attach(Product_detail, document.getElementById('root'))