import { combineReducers } from "redux";
import ProductListReducer from "./Reducers/defaultReducer";
import sliderReducer from './Reducers/sliderReducer'


export const rootReducer  = combineReducers({
    productsBlock : ProductListReducer,
    slider : sliderReducer,
});

