import InitialState from './initialState'
import {State} from '../Types/types'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleare from 'redux-saga'
import { rootReducer } from './rootReducer';
import defaultReducer from './defaultReducer';
import { rootWatcher } from '../Saga'

const sagaMiddleware = createSagaMiddleare();
const Store = createStore(rootReducer as any,  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);

export default Store;



// let reducers : {} = combineReducers({
//     State : defaultReducer,
// }); 