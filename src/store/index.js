import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './userReducer';
import discoverUsersReducer from './discoverUsersReducer';
import potentialMatchesReducer from './potentialMatchesReducer';
import messagesReducer from './messagesReducer';

const reducer = combineReducers({
  user: userReducer,
  discoverUsers: discoverUsersReducer,
  potentialMatches: potentialMatchesReducer,
  messages: messagesReducer,
});

export default createStore(reducer, applyMiddleware(thunk));
