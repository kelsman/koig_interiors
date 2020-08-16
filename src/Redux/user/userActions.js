import { userActionTypes } from './userActionTypes'
export const setCurrentUser = user => ({
    type: userActionTypes.CURRENT_USER,
    payload: user
});

export const toggle = () => ({
    type: userActionTypes.TOGGLE_DROPDOWN
});