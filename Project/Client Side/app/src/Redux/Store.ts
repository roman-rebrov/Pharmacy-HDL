import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleare from 'redux-saga'
import { rootReducer } from './rootReducer';
import { rootWatcher } from '../Saga'


const sagaMiddleware = createSagaMiddleare();
const Store = createStore(rootReducer,  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);
 
export default Store;


