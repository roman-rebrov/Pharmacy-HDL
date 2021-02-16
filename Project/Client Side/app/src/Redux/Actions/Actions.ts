export const ADD_REMOVE_PRODUCT_IN_CART : string = 'ADD_REMOVE_PRODUCT_IN_CART'
export const SELECTED_FOR_VIEWING : string = 'SELECTED_FOR_VIEWING'
export const GET_PRODUCTS : string = 'GET_PRODUCTS'
export const GET_SLIDE_LIST : string = 'GET_SLIDE_LIST'


export type Adding_Action_Type = {
    type : typeof ADD_REMOVE_PRODUCT_IN_CART, 
    payload : string
};

export type Action = {
    type : string,
    payload : any
}

export const getSlideListActionCreator = (slides : {list : []}) : Action =>( {
    type : GET_SLIDE_LIST, 
    payload: [...slides.list]
})

export const getProductListActionCreator = (products : {}) : Action =>( {
    type : GET_PRODUCTS, 
    payload: {...products}
})