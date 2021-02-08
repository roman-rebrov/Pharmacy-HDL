import Products from './Products'
import {State} from '../Types/types'

const addedToCart = {
    addedId : [],
    added : []
}
// const viewPage : {} = {};

let InitialState : State = {
    Products,
    addedToCart,
    viewPage: {}
}
export default InitialState;