import { FETCH_COMMENTS } from '../actions/types';

export default function commentsReducer(state = null, action) {
  switch (action.type) {
    case FETCH_COMMENTS: {
      console.log('commentsReducer.js: action payload is', action.payload);
      return action.payload || false;
    }
    default:
      return state;
  }
}
