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
        
    
    ],
    isdetail: storage.get(),
}

const actions = {
    click({isdetail},index) {
        isdetail = index;
        storage.set(isdetail);

    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}