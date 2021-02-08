import { combineReducers } from "redux";
import addedToCart from "./addedReducer";
import ProductList from "./defaultReducer";
import selectedReducer from './selectedReducer'
import addedToCartReducer from './addedToCartReducer'
import selectedForViewing from './selectedForViewing'

export const rootReducer : {} = combineReducers({
    productsBlock : ProductList,
    // addedToCartReducer, 
    // selectedForViewing,
});
// addedToCart,
// selectedReducer,