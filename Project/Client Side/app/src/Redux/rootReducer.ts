import { combineReducers } from "redux";
import ProductListReducer from "./defaultReducer";
import sliderReducer from './sliderReducer'


export const rootReducer  = combineReducers({
    productsBlock : ProductListReducer,
    slider : sliderReducer,
});

