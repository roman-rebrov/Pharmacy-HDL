import {productsBlockType, ProductListType} from '../Types/types'

const addedToCart = {
    addedId : [],
    added : []
}

const Products : ProductListType | {list : []} = {
    list : []
}

let productsBlock : productsBlockType = {
    Products,
    addedToCart,
    viewPage: {  }
}
export default productsBlock;