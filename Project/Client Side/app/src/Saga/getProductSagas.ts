import { call, put, takeEvery , SagaReturnType, StrictEffect} from 'redux-saga/effects'
import { getProductsAPI, getSlidesListAPI, getRecommendedListAPI, getProductForViewAPI, newOrderAPI, getTopicListAPI } from '../API/api'
import { 
    getSlideListActionCreator ,
    getProductListActionCreator,
    getRecommendedListActionCreator,
    selectForViewingCreator,
    Action,
    PROCESSING,
    setTopicList
} from '../Redux/Actions/Actions';
import {
     ASYNC_GET_SLIDE_LIST ,
     ASYNC_GET_PRODUCT_LIST,
     ASYNC_GET_RECOMMENDED_LIST,
     ASYNC_GET_PRODUCT_FOR_VIEW,
     ASYNC_POST_NEW_ORDER,
     ASYNC_GET_TOPIC_LIST
} from '../Redux/Actions/asyncActions';



function* getSlidesWorker ()  {
    try{
        const slideList : SagaReturnType<typeof getSlidesListAPI>=  yield call(getSlidesListAPI, "/slides");
        yield put(getSlideListActionCreator(slideList));
    } catch (err) {
        yield put({type : err, });
    }
}


function* getTopicListWorker ()  {   
    try{
        const topicList : SagaReturnType<typeof getTopicListAPI> =  yield call(getTopicListAPI, "/topics");
        yield put(setTopicList(topicList));
    } catch (err) {
        yield put({type : err, });
    }
}

function* getProductListWorker ( props : Action ){         
    try{
        yield put( {type: PROCESSING, payload : true} );
        const productList : SagaReturnType<typeof getProductsAPI>  =  yield call(getProductsAPI, "/catalog" + "/" + props.payload);
        yield put( {type: PROCESSING, payload : false} );
        yield put(getProductListActionCreator(productList));
    } catch (err) {
        yield put({type : err, });
    }
} 
function*  getRecommendedListWorker() {
    try{
        const list : SagaReturnType<typeof getRecommendedListAPI>  =  yield call(getRecommendedListAPI, "/recommendedlist");
        yield put( getRecommendedListActionCreator(list));
    } catch (err) {
        yield put({type : err, });
    }
}
function*  getProductForViewWorker( props : Action ){
    try{
        // yield put( {type: PROCESSING, payload : true} );
        const obj : SagaReturnType<typeof getProductForViewAPI> =  yield call(getProductForViewAPI, "/product" + "/" + props.payload);
        yield put( selectForViewingCreator(obj));
        // yield put( {type: PROCESSING, payload : false} );
    } catch (err) {
        yield put({type : err, });
    }
}

function* newOrderWorker(props : Action) : any  {
    try {
        const obj : SagaReturnType<typeof newOrderAPI > = yield call( newOrderAPI, [ '/newOrder',  props.payload]);
    } catch (err) {
        yield put({type : err, });
        
    }
}

export function* watcher () : Generator<StrictEffect> {
        yield takeEvery(ASYNC_GET_SLIDE_LIST,  getSlidesWorker);
        yield takeEvery(ASYNC_GET_PRODUCT_LIST,  getProductListWorker);
        yield takeEvery(ASYNC_GET_RECOMMENDED_LIST,  getRecommendedListWorker);
        yield takeEvery(ASYNC_GET_PRODUCT_FOR_VIEW,  getProductForViewWorker);
        yield takeEvery(ASYNC_POST_NEW_ORDER,  newOrderWorker);
        yield takeEvery(ASYNC_GET_TOPIC_LIST, getTopicListWorker)
}