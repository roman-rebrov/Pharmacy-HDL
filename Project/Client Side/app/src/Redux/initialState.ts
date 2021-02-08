import Products from './Products'
import {State} from '../Types/types'

const addedToCart = {
    addedId : [],
    added : []
}


let InitialState : State = {
    Products,
    addedToCart,
    viewPage: {}
}
export default InitialState;