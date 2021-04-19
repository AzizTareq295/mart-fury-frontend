import { all, put, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';

import {
    actionTypes,
    getCartError,
    getCartSuccess,
    updateCartSuccess,
    updateCartError,
} from './action';

const modalSuccess = (type) => {
    notification[type]({
        message: 'Success',
        description: 'This product has been added to your cart!',
        duration: 1,
    });
};
const modalWarning = (type) => {
    notification[type]({
        message: 'Remove A Item',
        description: 'This product has been removed from your cart!',
        duration: 1,
    });
};

export const calculateAmount = (obj) =>
    Object.values(obj)
        .reduce((acc, product) => acc + product.quantity * product.price, 0)
        .toFixed(2);

function* getCartSaga() {
    try {
        yield put(getCartSuccess());
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* addItemSaga(payload) {
    try {
        const { product } = payload;
        const item = {
            id: product.id,
            name: product.name,
            slug: product.slug,
            sku: product.sku[0].sku,
            sku_id: product.sku[0].id,
            regular_price: product.sku[0].regular_price,
            sell_price: product.sku[0].sell_price,
            price: product.sku[0].sell_price > 0 ? product.sku[0].sell_price : product.sku[0].regular_price,
            product_stock: product.sku[0].stock,
            thumbnail: product.product_media.feature_img,
            quantity: 1,
        }
        const localCart = JSON.parse(localStorage.getItem('persist:martfury'))
            .cart;
        let currentCart = JSON.parse(localCart);
        let existItem = currentCart.cartItems.find(
            (p) => parseInt(p.id) === parseInt(item.id)
        );
        
        if (existItem) {
            existItem.quantity += item.quantity;
        } else {
            if (!item.quantity) {
                item.quantity = 1;
            }
            currentCart.cartItems.push(item);
        }
        currentCart.amount = calculateAmount(currentCart.cartItems);
        currentCart.cartTotal++;
        yield put(updateCartSuccess(currentCart));
        modalSuccess('success');
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* removeItemSaga(payload) {
    try {
        const { product } = payload;

        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).cart
        );
        let index = localCart.cartItems.findIndex(
            (p) => parseInt(p.id) === parseInt(product.id)
        );
        
        localCart.cartTotal = localCart.cartTotal - product.quantity;
        localCart.cartItems.splice(index, 1);
        localCart.amount = calculateAmount(localCart.cartItems);
        if (localCart.cartItems.length === 0) {
            localCart.cartItems = [];
            localCart.amount = 0;
            localCart.cartTotal = 0;
        }
        yield put(updateCartSuccess(localCart));
        modalWarning('warning');
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* increaseQtySaga(payload) {
    try {
        const { product } = payload;

        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).cart
        );
        let selectedItem = localCart.cartItems.find(
            (p) => parseInt(p.id) === parseInt(product.id)
        );
        console.log(selectedItem);
        if (selectedItem) {
            selectedItem.quantity++;
            localCart.cartTotal++;
            localCart.amount = calculateAmount(localCart.cartItems);
        }
        yield put(updateCartSuccess(localCart));
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* decreaseItemQtySaga(payload) {
    try {
        const { product } = payload;

        const localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).cart
        );
        let selectedItem = localCart.cartItems.find(
            (p) => parseInt(p.id) === parseInt(product.id)
        );

        if (selectedItem) {
            selectedItem.quantity--;
            localCart.cartTotal--;
            localCart.amount = calculateAmount(localCart.cartItems);
        }
        yield put(updateCartSuccess(localCart));
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* clearCartSaga() {
    try {
        const emptyCart = {
            cartItems: [],
            amount: 0,
            cartTotal: 0,
        };
        yield put(updateCartSuccess(emptyCart));
    } catch (err) {
        yield put(updateCartError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_CART, getCartSaga)]);
    yield all([takeEvery(actionTypes.ADD_ITEM, addItemSaga)]);
    yield all([takeEvery(actionTypes.REMOVE_ITEM, removeItemSaga)]);
    yield all([takeEvery(actionTypes.INCREASE_QTY, increaseQtySaga)]);
    yield all([takeEvery(actionTypes.DECREASE_QTY, decreaseItemQtySaga)]);
}