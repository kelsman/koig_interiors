
import { burgerActionTypes } from './burgerActionTypes';

const initialState = {
    styles: {


    }


}

const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case burgerActionTypes.HAMBURGER_MENU:
            return {
                ...state,
                styles: action.payload
            };

        case burgerActionTypes.CLOSE_MENU:
            return {
                ...state,
                styles: action.payload
            }
        default:
            return state;
    }
}

export default burgerReducer;