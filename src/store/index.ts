import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { dogRuns } from './reducers'
import { sagas } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const storeWithMiddleware = createStore(
  combineReducers({ dogRuns }),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

export const store = storeWithMiddleware
