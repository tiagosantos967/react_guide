import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import sagas from './sagas'

const configureStore = (initialState = {}, services = {}) => {
    const sagaMiddleware = createSagaMiddleware();

    const enhancers = [
        applyMiddleware(
          sagaMiddleware
        )
      ]

    const store = createStore(reducer, initialState, compose(...enhancers))
    let sagaTask = sagaMiddleware.run(sagas, services)

    return store;
}

export default configureStore