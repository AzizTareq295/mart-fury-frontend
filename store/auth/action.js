export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    REGISTER_REQUEST: 'REGISTER_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
};

export function login(payload) {
    return { type: actionTypes.LOGIN_REQUEST, payload};
}

export function register(payload) {
    return { type: actionTypes.REGISTER_REQUEST, payload};
}

export function loginSuccess(data) {
    console.log(data);
    return { type: actionTypes.LOGIN_SUCCESS, payload: data };
}
export function registerSuccess(data) {
    console.log(data);
    return { type: actionTypes.REGISTER_SUCCESS, payload: data };
}

export function logOut() {
    return { type: actionTypes.LOGOUT };
}

export function logOutSuccess() {
    return { type: actionTypes.LOGOUT_SUCCESS };
}
