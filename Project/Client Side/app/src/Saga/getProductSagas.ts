import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getProducts, getSlidesList } from '../API/api'
import { getSlideListActionCreator } from '../Redux/Actions/Actions';
import { ASYNC_GET_SLIDE_LIST } from '../Redux/Actions/asyncActions';

function* getSlidesWorker (action : {}) {
    try{
        const slideList =  yield call(getSlidesList, "/slides");
        yield put(getSlideListActionCreator(slideList))
    } catch (err) {
        yield put({type : "", })
    }
}

export function* watcher () {
        yield takeEvery('ASYNC_GET_SLIDE_LIST',  getSlidesWorker)
        
}