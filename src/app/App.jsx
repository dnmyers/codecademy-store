/* eslint-disable react/prop-types */
import { Inventory } from '../features/inventory/Inventory';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter';
import { Cart } from '../features/cart/Cart';
import { SearchTerm } from '../features/searchTerm/SearchTerm';

import './App.css'

export const App = (props) => {
    const { state, dispatch } = props;

    const filteredItems = getFilteredItems(state.inventory, state.searchTerm);

    return (
        <div>
            <SearchTerm
                searchTerm={state.searchTerm}
                dispatch={dispatch}
            />

            <CurrencyFilter
                currencyFilter={state.currencyFilter}
                dispatch={dispatch}
            />

            <Inventory
                inventory={filteredItems}
                currencyFilter={state.currencyFilter}
                dispatch={dispatch}
            />

            <Cart
                cart={state.cart}
                currencyFilter={state.currencyFilter}
                dispatch={dispatch}
            />
        </div>
    );
};

/* Utility Helpers */
function getFilteredItems(items, searchTerm) {
    return items.filter((item) => {
        if(searchTerm === '') {
            return true;
        }

        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
}