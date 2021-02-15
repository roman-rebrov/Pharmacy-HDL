import { combineReducers } from "redux";
import ProductListReducer from "./defaultReducer";
import sliderReducer from './slider'


export const rootReducer  = combineReducers({
    productsBlock : ProductListReducer,
    slider : sliderReducer,
});

