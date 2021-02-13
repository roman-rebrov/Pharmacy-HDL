import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleare from 'redux-saga'
import { rootReducer } from './rootReducer';
import { rootWatcher } from '../Saga'

// import defaultReducer from './defaultReducer';
// import InitialState from './initialState'
// import {State} from '../Types/types'

const sagaMiddleware = createSagaMiddleare();
const Store = createStore(rootReducer as any,  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);

export default Store;



// let reducers : {} = combineReducers({
//     State : defaultReducer,
// }); 