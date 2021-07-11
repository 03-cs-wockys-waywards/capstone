import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './userReducer'
import usersReducer from './usersReducer'

const reducer = combineReducers({
  user: userReducer,
  users: usersReducer,
})

export default createStore(reducer, applyMiddleware(thunk))
