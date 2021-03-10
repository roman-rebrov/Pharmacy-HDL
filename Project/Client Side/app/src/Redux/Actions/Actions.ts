export const ADD_REMOVE_PRODUCT_IN_CART : string = 'ADD_REMOVE_PRODUCT_IN_CART'
export const SELECTED_FOR_VIEWING : string = 'SELECTED_FOR_VIEWING'
export const REMOVE_SELECTED_FOR_VIEWING : string = 'REMOVE_SELECTED_FOR_VIEWING'
export const GET_PRODUCTS : string = 'GET_PRODUCTS'
export const GET_SLIDE_LIST : string = 'GET_SLIDE_LIST'
export const GET_RECOMMENDED_LIST : string = 'GET_RECOMMENDED_LIST'
export const PROCESSING : string = 'PROCESSING'

export type Adding_Action_Type = {
    type : typeof ADD_REMOVE_PRODUCT_IN_CART, 
    payload : string
};

export type Action = {
    type : string,
    payload : any
}

export const selectForViewingCreator = ( id : string) => ({
    type : SELECTED_FOR_VIEWING,
    payload : id
})

export const getSlideListActionCreator = (slides : {list : []}) : Action =>( {
    type : GET_SLIDE_LIST, 
    payload: [...slides.list]
})

export const getProductListActionCreator = (products : {}) : Action =>( {
    type : GET_PRODUCTS, 
    payload: {...products}
})

export const getRecommendedListActionCreator = (recommended : []) : Action => ( {
    type: GET_RECOMMENDED_LIST,
    payload: [...recommended]
} )