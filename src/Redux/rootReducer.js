import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import burgerReducer from './hamburger/burgerReducer'


export const rootReducer = combineReducers({
    user: userReducer,
    hamMenu: burgerReducer
});