import { all } from 'redux-saga/effects'
import { watcher } from './sagas'

export function* rootWatcher(){
    yield all([
        watcher
    ])
}