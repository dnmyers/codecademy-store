// current way to create a redux stores
import {
    configureStore
} from '@reduxjs/toolkit';

import { cartReducer } from '../features/cart/cartSlice';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';
import { inventoryReducer } from '../features/inventory/inventorySlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        currencyFilter: currencyFilterReducer,
        inventory: inventoryReducer,
        searchTerm: searchTermReducer
    }
});


// outdated way to create a redux store
// import {
//     createStore,
//     combineReducers
// } from 'redux';

// import { cartReducer } from '../features/cart/cartSlice';
// import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';
// import { inventoryReducer } from '../features/inventory/inventorySlice';
// import { searchTermReducer } from '../features/searchTerm/searchTermSlice';

// export const store = createStore(
//     combineReducers({
//         cart: cartReducer,
//         currencyFilter: currencyFilterReducer,
//         inventory: inventoryReducer,
//         searchTerm: searchTermReducer
//     })
// );
