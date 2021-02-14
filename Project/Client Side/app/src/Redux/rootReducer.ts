import { combineReducers } from "redux";
import ProductList from "./defaultReducer";
import slider from './slider'


export const rootReducer : {} = combineReducers({
    productsBlock : ProductList,
    slider,
});


// import addedToCart from "./addedReducer";
// import selectedReducer from './selectedReducer'
// import addedToCartReducer from './addedToCartReducer'
// import selectedForViewing from './selectedForViewing'


// addedToCartReducer, 
// selectedForViewing,
// addedToCart,
// selectedReducer,