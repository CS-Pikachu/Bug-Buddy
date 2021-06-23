// combine our reducers
import { combineReducers } from 'redux';
import authReducer from './authReducer';

// export our reducers
export default combineReducers({
  auth: authReducer,
});
