const init = {
    products: [
        {
            title: "Air Jordan XXXVII PF",
            type: "Men's Basketball Shoes",
            price: "3600000",
            sold: "85",
            sales: "20",
        },
        {
            title: "Jordan ADG 4",
            type: "Men's Golf Shoes",
            price: "5600000",
            sold: "15",
            sales: "10",
        },
        {
            title: "Jordan Courtside 23",
            type: "Men's Shoes",
            price: "6900000",
            sold: "120",
            sales: "30",
        },
        {
            title: "Jordan Max Aura 4",
            type: "Men's Shoes",
            price: "6900000",
            sold: "120",
            sales: "30",
        },
        
        
    ]
}

const actions = {

}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}