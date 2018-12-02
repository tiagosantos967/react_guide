import { createStore } from 'redux'
import reducer from './reducer'

const configureStore = (initialState = {}) => {
      return createStore(reducer, initialState)
}

export default configureStore