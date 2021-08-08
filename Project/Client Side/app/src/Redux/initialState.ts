import {productsBlockType, ProductListType} from '../Types/types'

const addedToCart = {
    addedId : [],
    added : []
}

const Products : ProductListType = {  
    list : [],
    arrLength: 0,
    limit: 0,
    page: 0,
    topic: ""
}

let productsBlock : productsBlockType = {
    Products,
    addedToCart,
    topics: [],
    viewPage: {  }
}
export default productsBlock;