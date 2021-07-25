import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getProductsAPI, getSlidesListAPI, getRecommendedListAPI, getProductForViewAPI, newOrderAPI } from '../API/api'
import { 
    getSlideListActionCreator ,
    getProductListActionCreator,
    getRecommendedListActionCreator,
    selectForViewingCreator,
    Action,
    PROCESSING
} from '../Redux/Actions/Actions';
import {
     ASYNC_GET_SLIDE_LIST ,
     ASYNC_GET_PRODUCT_LIST,
     ASYNC_GET_RECOMMENDED_LIST,
     ASYNC_GET_PRODUCT_FOR_VIEW,
     ASYNC_POST_NEW_ORDER
} from '../Redux/Actions/asyncActions';

function* getSlidesWorker () : any  {
    try{
        const slideList =  yield call(getSlidesListAPI, "/slides");
        yield put(getSlideListActionCreator(slideList));
    } catch (err) {
        yield put({type : err, });
    }
}

function* getProductListWorker () : any {
    try{
        const productList   =  yield call(getProductsAPI, "/");
        yield put(getProductListActionCreator(productList));
    } catch (err) {
        yield put({type : err, });
    }
}
function*  getRecommendedListWorker() : any{
    try{
        const list  =  yield call(getRecommendedListAPI, "/recommendedlist");
        yield put( getRecommendedListActionCreator(list));
    } catch (err) {
        yield put({type : err, });
    }
}
function*  getProductForViewWorker(props : Action) : any{
    try{
        const obj  =  yield call(getProductForViewAPI, "/product" + "/" + props.payload);
        yield put( selectForViewingCreator(obj));
        yield put( {type: PROCESSING, payload : false} );
    } catch (err) {
        yield put({type : err, });
    }
}

function* newOrderWorker(props : Action) : any {
    try {
        console.log(props);
        
        const obj = yield call( newOrderAPI, [ '/newOrder',  props.payload]);
    } catch (err) {
        yield put({type : err, });
        
    }
}

export function* watcher () {
        yield takeEvery(ASYNC_GET_SLIDE_LIST,  getSlidesWorker);
        yield takeEvery(ASYNC_GET_PRODUCT_LIST,  getProductListWorker);
        yield takeEvery(ASYNC_GET_RECOMMENDED_LIST,  getRecommendedListWorker);
        yield takeEvery(ASYNC_GET_PRODUCT_FOR_VIEW,  getProductForViewWorker);
        yield takeEvery(ASYNC_POST_NEW_ORDER,  newOrderWorker);
}