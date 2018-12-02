import { combineReducers } from 'redux'

const reducers = {}

const req = require.context('../components', true, /\.\/.+\/reducer\.js$/)

req.keys().forEach((key) => {
  const storeName = key.split('/').slice(-2, -1)[0]
  reducers[storeName] = req(key).default
})

export default combineReducers(reducers)