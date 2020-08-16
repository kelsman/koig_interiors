import { userActionTypes } from './userActionTypes';

const initState = {
    currentUser: null,
    hidden: true
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case userActionTypes.CURRENT_USER:
            return {
                ...state,

            }
        case userActionTypes.TOGGLE_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}

export default userReducer;