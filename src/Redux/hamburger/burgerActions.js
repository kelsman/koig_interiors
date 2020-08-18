
import { burgerActionTypes } from './burgerActionTypes'
export const openMenu = () => ({
    type: burgerActionTypes.HAMBURGER_MENU,
    payload: {

        transform: "translateX(0%)"


    }
});

export const closeMenu = () => ({
    type: "CLOSE_MENU",
    payload: {
        transform: "translateX(-100%)",

    }
})