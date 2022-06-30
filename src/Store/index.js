import {createStore, combineReducers} from 'redux';
import ProductsReducerM from './Reducers/ProductsReducerM';
import CartReducer from './Reducers/CartReducer';

const root = combineReducers({
    ProductsReducerM,
    CartReducer
});

const store = createStore(root);

export default store;