import { cartActionTypes } from './cartActionTypes';

export const addToCart = (item) => ({

    type: cartActionTypes.ADD_TO_CART,
    payload: item
});

export const removeItem = (item) => ({
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: item
});

export const decreaseQuantity = (item) => {
    return {
        type: cartActionTypes.REDUCE_QUANTITY,
        payload: item
    };
};
export const increaseQuantity = item => ({
    type: cartActionTypes.INCREASE_QUANTITY,
    payload: item
});
