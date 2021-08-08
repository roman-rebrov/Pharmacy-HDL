import { ProdObj, ProductListType, SliderType } from "../../Types/types"

export const ADD_REMOVE_PRODUCT_IN_CART : string = 'ADD_REMOVE_PRODUCT_IN_CART'
export const SELECTED_FOR_VIEWING : string = 'SELECTED_FOR_VIEWING'
export const REMOVE_SELECTED_FOR_VIEWING : string = 'REMOVE_SELECTED_FOR_VIEWING'
export const GET_PRODUCTS : string = 'GET_PRODUCTS'
export const GET_SLIDE_LIST : string = 'GET_SLIDE_LIST'
export const GET_RECOMMENDED_LIST : string = 'GET_RECOMMENDED_LIST'
export const PROCESSING : string = 'PROCESSING'
export const SET_TOPIC_LIST : string = 'SET_TOPIC_LIST'

export type Adding_Action_Type = {
    type : typeof ADD_REMOVE_PRODUCT_IN_CART, 
    payload : string
}
export type Action = {
    type : string,
    payload : any
}


interface ISetTopicList {
    type: string;
    payload: void | string[];
}
interface IProductListActionCreator {
    type: string;
    payload: void | ProductListType;
}

interface ISlideListActionCreator  {
    type: string;
    payload:  void | SliderType[];
}

interface IRecommendedListActionCreator  {
    type: string;
    payload:  void | ProdObj[];
}

interface IForViewingCreator {
    type: string;
    payload:  void | ProdObj;
}

export const selectForViewingCreator = ( obj : void | ProdObj ) : IForViewingCreator=> ({
    type : SELECTED_FOR_VIEWING,
    payload : obj
})

export const getSlideListActionCreator = (slides : any) : ISlideListActionCreator =>( {
    type : GET_SLIDE_LIST, 
    payload: slides.list
})

export const getProductListActionCreator = (products : void | ProductListType) : IProductListActionCreator => ( {
    type : GET_PRODUCTS, 
    payload: products
})

export const getRecommendedListActionCreator = (recommended : void |  ProdObj[]) : IRecommendedListActionCreator => ( {
    type: GET_RECOMMENDED_LIST,
    payload: recommended
} )

export const setTopicList = (list : void |  string[]) : ISetTopicList => ({
    type: SET_TOPIC_LIST,
    payload: list
})