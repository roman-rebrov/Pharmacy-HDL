import {createStore, applyMiddleware} from 'redux'
import createSagaMiddlewear from 'redux-saga'
import { rootReducer } from './rootReducer';
import { rootWatcher } from '../Saga'


const sagaMiddleware = createSagaMiddlewear();
const Store = createStore(rootReducer,  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);
 
export default Store;


