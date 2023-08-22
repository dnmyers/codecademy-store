/* eslint-disable no-unused-vars */
import { inventoryData } from '../../data';

export const loadData = (_data) => {
    return {
        type: 'inventory/loadData',
        payload: inventoryData
    };
};

export const searchTerm = (term) => {
    return {
        type: 'inventory/searchTerm',
        payload: term
    };
}

const initialInventory = [];
export const inventoryReducer = (inventory = initialInventory, action) => {
    switch(action.type) {
        case 'inventory/loadData':
            return action.payload;
        default:
            return inventory;
    }
};