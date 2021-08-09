import { INewOrder } from "../../Components/PayComponent/PayComponent";

export const ASYNC_GET_SLIDE_LIST : string = 'ASYNC_GET_SLIDE_LIST';
export const ASYNC_GET_PRODUCT_LIST : string = 'ASYNC_GET_PRODUCT_LIST';
export const ASYNC_GET_RECOMMENDED_LIST : string = 'ASYNC_GET_RECOMMENDED_LIST';
export const ASYNC_GET_PRODUCT_FOR_VIEW : string = 'ASYNC_GET_PRODUCT_FOR_VIEW';
export const ASYNC_POST_NEW_ORDER : string = 'ASYNC_POST_NEW_ORDER';
export const ASYNC_GET_TOPIC_LIST : string = 'ASYNC_GET_TOPIC_LIST';

export const asyncPostNewOrderCreater = (data : INewOrder) => ({
    type: ASYNC_POST_NEW_ORDER,
    payload: data
})
export const asyncGetProductForViewActionCreator = (id : string) : {type: string, payload : string} => ( {
    type: ASYNC_GET_PRODUCT_FOR_VIEW,
    payload: id
} )