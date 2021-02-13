import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import { getProducts, getSlidesList } from '../API/api'

function* worker (action : {}) {
    try{

    } catch (err) {
        yield put({type : "", })
    }
}

export function* watcher () {
        yield takeEvery("", worker)
}