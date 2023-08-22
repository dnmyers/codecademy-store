export const addItem = (itemToAdd) => {
    return {
        type: 'cart/addItem',
        payload: itemToAdd,
    };
};

export const changeItemQuantity = (item, newQuantity) => {
    return {
        type: 'cart/changeItemQuantity',
        payload: {
            name: item.name,
            quantity: newQuantity,
        },
    };
};

const initialCart = {};
export const cartReducer = ( cart = initialCart, action ) => {
    switch(action.type) {
        case 'cart/addItem': {
            const { name, price } = action.payload;

            // if item already exists, increase the quantity by 1,
            // otherwise add the item to the cart with a quantity of 1
            const quantity = cart[name] ? cart[name].quantity + 1 : 1;
            const newItem = { price, quantity };

            // Add the new item to the cart (or replace it if it existed already)
            return {
                ...cart,
                [name]: newItem
            };
        }
        case 'cart/changeItemQuantity': {
            const { name, newQuantity } = action.payload;
            const itemToUpdate = cart[name];

            const updatedItem = {
                ...itemToUpdate,
                quantity: newQuantity
            };

            return {
                ...cart,
                [name]: updatedItem
            }
        }
        default:
            return cart;
    }
};