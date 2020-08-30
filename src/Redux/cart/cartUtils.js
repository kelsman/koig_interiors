
export const addItem = (cartItems, itemsToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === itemsToAdd.id
    });



    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === itemsToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...itemsToAdd, quantity: 1 }]

}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    /* return cartItems.map(cartItem =>
         cartItem.id === cartItemToRemove.id
             ? { ...cartItem, quantity: cartItem.quantity - 1 }
             : cartItem
     );*/
};

export const reduceCartQuantity = (cartItems, cartItemQuantityToDecrease) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemQuantityToDecrease.id
    );

    if (existingCartItem.quantity <= 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemQuantityToDecrease.id);


    }


    /*if (cartItemQuantityToDecrease <= 1) {
        return cartItems.filter((cartItem) => {
            return cartItem.id !== cartItemQuantityToDecrease.id
        });
    }*/


    return cartItems.map((cartItem) => {
        return cartItem.id === cartItemQuantityToDecrease.id ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    });


};

export const increaseCartQuantity = (cartItems, cartItemQuantityToIncrease) => {

    return cartItems.map(cartItem => {
        return cartItem.id === cartItemQuantityToIncrease.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem;
    });


}

/*export const reduceItemCount = (count, cartItems)=> {


}*/

