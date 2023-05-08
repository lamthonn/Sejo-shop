import storage from "../util/storage.js";

const init = {
    products: [
        {
            title: "Air Jordan XXXVII PF",
            type: "Men's Basketball Shoes",
            price: 3600000,
            sold: "85",
            sales: 20,
        },
        {
            title: "Jordan ADG 4",
            type: "Men's Golf Shoes",
            price: 5600000,
            sold: "15",
            sales: 10,
        },
        {
            title: "Jordan Courtside 23",
            type: "Men's Shoes",
            price: 6900000,
            sold: "120",
            sales: 30,
        },
        {
            title: "Jordan Max Aura 4",
            type: "Men's Shoes",
            price: 5500000,
            sold: "120",
            sales: 30,
        },
        {
            title: "Jordan Stay Loyal 2",
            type: "Men's Shoes",
            price: 4800000,
            sold: "120",
            sales: 30,
        },
        {
            title: "Jordan Why Not .6 PF",
            type: "Men's Shoes",
            price: 2400000,
            sold: "120",
            sales: 30,
        },
        {
            title: "Jordan Stay Loyal 2",
            type: "Women's Shoes",
            price: 3700000,
            sold: "170",
            sales: 20,
        },
        {
            title: "Jordan Why Not .6 PF",
            type: "Men's Shoes",
            price: 7900000,
            sold: "200",
            sales: 50,
        },
        {
            title: "Nike Air Force 1 '07 LV8",
            type: "Women's Shoes",
            price: 2900000,
            sold: "120",
            sales: 10,
        },
        {
            title: "Nike Air Max 90",
            type: "Men's Goft Shoes",
            price: 10000000,
            sold: "420",
            sales: 70,
        },
        {
            title: "Jordan Stadium 90",
            type: "Men's Shoes",
            price: 3700000,
            sold: "20",
            sales: 80,
        },
        {
            title: "Tatum 1 St. Louis PF",
            type: "Women's Shoes",
            price: 2600000,
            sold: "40",
            sales: 10,
        },
        {
            title: "Zion 2 PF",
            type: "Men's Shoes",
            price: 6900000,
            sold: "820",
            sales: 30,
        },
        {
            title: "Air Jordan 1 Zoom CMFT 2",
            type: "Women's Shoes",
            price: 8900000,
            sold: "70",
            sales: 10,
        },
       
    ],
    isdetail: storage.get(),
}

const actions = {
    ABC({ isdetail }, index) {
        isdetail = index;
        storage.set(isdetail);

    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}