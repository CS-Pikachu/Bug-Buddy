import { UPDATE_BUG } from '../actions/types';

export default function updateReducer(state = null, action) {
  switch (action.type) {
    case UPDATE_BUG: {
      console.log('updateRedcuer.js: action payload is', action.payload);
      return action.payload || false;
    }
    default:
      return state;
  }
}
