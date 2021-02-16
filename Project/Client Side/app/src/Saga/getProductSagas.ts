import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getProducts, getSlidesList } from '../API/api'
import { 
    getSlideListActionCreator ,
    getProductListActionCreator
} from '../Redux/Actions/Actions';
import {
     ASYNC_GET_SLIDE_LIST ,
     ASYNC_GET_PRODUCT_LIST
} from '../Redux/Actions/asyncActions';

function* getSlidesWorker () {
    try{
        const slideList =  yield call(getSlidesList, "/slides");
        yield put(getSlideListActionCreator(slideList));
    } catch (err) {
        yield put({type : err, });
    }
}

function* getProductListWorker () {
    try{
        const productList =  yield call(getProducts, "/");
        yield put(getProductListActionCreator(productList));
    } catch (err) {
        yield put({type : err, });
    }
}


export function* watcher () {
        yield takeEvery(ASYNC_GET_SLIDE_LIST,  getSlidesWorker);
        yield takeEvery(ASYNC_GET_PRODUCT_LIST,  getProductListWorker);
        
}