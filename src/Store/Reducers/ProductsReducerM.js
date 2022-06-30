const initState = {
    products:[
        {
            id: 1,
            name: 'My Running Shoe 1',
            image: 'running1.jpg',
            price: 20,
            discount: 2,
            discountPrice: 20 - 2 / 100 * 20,
            quantity: 1,
            description: 'Speed up your turnover. These men running shoes have cushioning that pads your heel strikes and propels you forward.'
        },

        {
            id: 2,
            name: 'My Running Shoe 2',
            image: 'running2.jpg',
            price: 10,
            discount: 2,
            discountPrice: 10 - 2 / 100 * 10,
            quantity: 1,
            description: 'Speed up your turnover. These men running shoes have cushioning that pads your heel strikes and propels you forward.'
        },

        {
            id: 3,
            name: 'My Running Shoe 3',
            image: 'running3.jpg',
            price: 60,
            discount: 2,
            discountPrice: 60 - 2 / 100 * 60,
            quantity: 1,
            description: 'Speed up your turnover. These men running shoes have cushioning that pads your heel strikes and propels you forward.'
        },

        {
            id: 4,
            name: 'My Running Shoe 4',
            image: 'running4.jpg',
            price: 30,
            discount: 2,
            discountPrice: 30 - 2 / 100 * 30,
            quantity: 1,
            description: 'Speed up your turnover. These men running shoes have cushioning that pads your heel strikes and propels you forward.'
        },

        {
            id: 5,
            name: 'My Running Shoe 5',
            image: 'running5.jpg',
            price: 80,
            discount: 2,
            discountPrice: 80 - 2 / 100 * 80,
            quantity: 1,
            description: 'Speed up your turnover. These men running shoes have cushioning that pads your heel strikes and propels you forward.'
        },

        {
            id: 6,
            name: 'My Running Shoe 6',
            image: 'running6.jpg',
            price: 70,
            discount: 2,
            discountPrice: 70 - 2 / 100 * 70,
            quantity: 1,
            description: 'Speed up your turnover. These men running shoes have cushioning that pads your heel strikes and propels you forward.'
        },

        {
            id: 7,
            name: 'My Running Shoe 7',
            image: 'running7.jpg',
            price: 50,
            discount: 2,
            discountPrice: 50 - 2 / 100 * 50,
            quantity: 1,
            description: 'Speed up your turnover. These men running shoes have cushioning that pads your heel strikes and propels you forward.'
        },

        {
            id: 8,
            name: 'My Running Shoe 8',
            image: 'running8.jpg',
            price: 30,
            discount: 2,
            discountPrice: 30 - 2 / 100 * 30,
            quantity: 1,
            description: 'Speed up your turnover. These men running shoes have cushioning that pads your heel strikes and propels you forward.'
        },

    ],
    product:{}
}

const ProductsReducerM = (state = initState, action) =>{
    switch(action.type){

        case "PRODUCT":
            return{...state, product: state.products.find(
                    product => product.id === parseInt (action.id))}


        default:
            return state;
    }
}


export default ProductsReducerM