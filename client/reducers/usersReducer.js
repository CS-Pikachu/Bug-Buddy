import { FETCH_ALL_USERS } from '../actions/types';

export default function usersReducer(state = null, action) {
  switch (action.type) {
    case FETCH_ALL_USERS: {
      console.log('usersReducer.js: action payload is', action.payload);
      return action.payload || false;
    }
    default:
      return state;
  }
}
