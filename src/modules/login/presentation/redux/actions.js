import { LOGIN, SUCCESS_LOGIN } from "./constants";

export function loginAction(username, password) {
    const action = {
        type: LOGIN,
        payload: { username, password }
    };
    return action;
}

export const successLogin = (payload) => ({
    type: SUCCESS_LOGIN,
    payload
})