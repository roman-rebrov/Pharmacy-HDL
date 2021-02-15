import Products from './Products'
import {productsBlockType} from '../Types/types'

const addedToCart = {
    addedId : [],
    added : []
}


let productsBlock : productsBlockType = {
    Products,
    addedToCart,
    viewPage: {}
}
export default productsBlock;