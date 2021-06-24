import { FETCH_BUGS } from '../actions/types';

export default function bugsReducer(state = null, action) {
  switch (action.type) {
    case FETCH_BUGS: {
      console.log('bugsReducer.js: action payload is', action.payload);
      return action.payload || false;
    }
    default:
      return state;
  }
}
