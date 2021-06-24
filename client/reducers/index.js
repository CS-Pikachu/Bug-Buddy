// combine our reducers
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bugsReducer from './bugsReducer';
import commentsReducer from './commentsReducer';
import usersReducer from './usersReducer';
import updateReducer from './usersReducer';

// export our reducers
export default combineReducers({
  auth: authReducer,
  bugs: bugsReducer,
  comments: commentsReducer,
  users: usersReducer,
  update: updateReducer,
});
