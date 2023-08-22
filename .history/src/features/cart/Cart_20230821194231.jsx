import { useSelector } from 'react-redux';

import {
    calculateTotal,
    getCurrencySymbol,
} from '../../utilities/utilities';

import { changeItemQuantity } from './cartSlice';

export const Cart = (props) => {
    const { cart, currencyFilter, dispatch } = props;

    const onInputChangeHandler = (name, input) => {
        // If the user enters a bad value...
        if(input === '') {
            return;
        }

        // Otherwise, convert the input into a number
        // and pass it along as the newQuantity.
        const newQuantity = Number(input);

        // Dispatch an action to change the quantity of
        // the given name and quantity.
        dispatch(changeItemQuantity(name, newQuantity));
    }

    // Use the cart and currencyFilter
    // slices to render their data.
    // const cartElements = 'REPLACE_ME';
    const total = 0;
}