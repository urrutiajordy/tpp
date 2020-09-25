import { LOGIN, SUCCESS_LOGIN } from "./constants";

export const loginReducer = (state = { status: false }, action) => {
    switch (action.type) {
        case LOGIN:
            //cambio de estado
            return { ...state }
        case SUCCESS_LOGIN:
            //cambio de estado
            return { ...state, ...action.payload }

        default:
            return state;
    }
}
export const selectLoginData = (state) => {
    return state.login
}