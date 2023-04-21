const init = {
    products: [
        {
            image: '',
            title: 'nike',
            info: 'giay au then tics dungf 1 laanf',
            price: '500'
        },
        {
            image: '', 
            title: 'nike23',
            info: 'giay au then tics d',
            price: '5000'
        }
        
    ]
}

const actions = {

}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}