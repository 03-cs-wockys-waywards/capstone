import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './userReducer';
import discoverUsersReducer from './discoverUsersReducer';
import potentialMatchesReducer from './potentialMatchesReducer';

const reducer = combineReducers({
  user: userReducer,
  discoverUsers: discoverUsersReducer,
  potentialMatches: potentialMatchesReducer,
});

export default createStore(reducer, applyMiddleware(thunk));
