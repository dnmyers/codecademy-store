import { useEffect } from 'react';

import {
    calculatePrice,
    getCurrencySymbol,
} from '../../utilities/utilities';
import { addItem } from '../cart/cartSlice';
import { loadData } from './inventorySlice';

export const Inventory = ({ inventory, currencyFilter, dispatch }) => {
    const onMount = () => {
        dispatch(loadData());
    };

    useEffect(onMount, [dispatch]);

    const onClickHandler = (inventoryItem) => {
        dispatch(addItem(inventoryItem));
    };

    if(inventory.length === 0) {
        return <p> Sorry, no products are currently available... </p>;
    }

    return {
        <ul id="inventory-container">
            {
                inventory.map(createInventoryItem)
            }
        </ul>
    }
}