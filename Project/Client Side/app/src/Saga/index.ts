import { all } from 'redux-saga/effects'
import { watcher } from './getProductSagas'

export function* rootWatcher(){
    yield all([
        watcher()
    ])
}