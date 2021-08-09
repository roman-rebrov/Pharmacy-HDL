import { combineReducers } from "redux";
import ProductListReducer from "./Reducers/defaultReducer";
import recommendedListReducer from "./Reducers/recommendedListReducer";
import sliderReducer from './Reducers/sliderReducer'
import selectedObjects from './Reducers/selectedObjectsReducer'
import processReducer from "./Reducers/processReducer";
import newOrder from "./Reducers/newOrderReducer";


export const rootReducer  = combineReducers({
    productsBlock : ProductListReducer,
    slider : sliderReducer,
    recommendedList: recommendedListReducer,
    selectedObjects,
    process: processReducer,
    newOrder: newOrder
});

