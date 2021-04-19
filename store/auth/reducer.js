import { actionTypes } from './action';

export const initState = {
    isLoggedIn: false,
    user: '',
    token: ''
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: true, user: action.payload.items.data.user, token: action.payload.items.data.token },
            };
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: true, user: action.payload.items.data.user, token: action.payload.items.data.token },
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: false, user: '', token: '' },
            };
        default:
            return state;
    }
}

export default reducer;
