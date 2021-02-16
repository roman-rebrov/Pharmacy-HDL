import {productsBlockType, ProductList} from '../Types/types'

const addedToCart = {
    addedId : [],
    added : []
}

const Products : ProductList | {list : []} = {
    list : []
}

let productsBlock : productsBlockType = {
    Products,
    addedToCart,
    viewPage: {}
}
export default productsBlock;