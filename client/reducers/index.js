// combine our reducers
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bugsReducer from './bugsReducer';

// export our reducers
export default combineReducers({
  auth: authReducer,
  bugs: bugsReducer,
});
