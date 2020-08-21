import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import burgerReducer from './hamburger/burgerReducer'
import cartReducer from './cart/cartReducer';







const rootReducer = combineReducers({
    user: userReducer,
    hamMenu: burgerReducer,
    cart: cartReducer
});

export default rootReducer