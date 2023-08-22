/* eslint-disable react/prop-types */
import { Inventory } from '../features/inventory/Inventory';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter';
import { Cart } from '../features/cart/Cart';

import './App.css'

export const App = (props) => {
    const { state, dispatch } = props;

    return (
        <div>
            <CurrencyFilter
                currencyFilter={state.currencyFilter}
                dispatch={dispatch}
            />

            <Inventory
                inventory={state.inventory}
                currencyFilter={state.currencyFilter}
                dispatch={dispatch}
            />

            <Cart
                cart={state.cart}
                dispatch={dispatch}
            />
        </div>
    );
};