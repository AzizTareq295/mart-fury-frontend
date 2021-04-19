import { all, call, put, takeEvery } from 'redux-saga/effects';
import {notification } from 'antd';
import UserRepository from '~/repositories/UserRepository'

import { actionTypes, loginSuccess, logOutSuccess, registerSuccess } from './action';
import Axios from 'axios';

const modalSuccess = type => {
    notification[type]({
        message: 'Wellcome back',
        description: 'You are login successful!',
    });
};

const modalWarning = type => {
    notification[type]({
        message: 'Good bye!',
        description: 'Your account has been logged out!',
    });
};


function* loginSaga (payload) {
    const data = payload.payload.data
    
    try {
        const res = yield call(UserRepository.loginInfo, data)

        yield put(loginSuccess(res))
        
    } catch (err) {
        console.log(err);
    }

    
}
function* registerSaga (payload) {
    const data = payload.payload.data
    
    try {
        const res = yield call(UserRepository.registerInfo, data)

        yield put(registerSuccess(res))
        
    } catch (err) {
        console.log(err);
    }

    
}

function* logOutSaga() {
    try {
        yield put(logOutSuccess());
        modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(actionTypes.REGISTER_REQUEST, registerSaga)]);
    yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
}
