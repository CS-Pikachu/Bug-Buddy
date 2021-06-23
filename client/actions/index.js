import { FETCH_USER } from './types';
import { FETCH_BUGS } from './types';

export const fetchUser = () => {
  return function (dispatch) {
    console.log('fetchUser Action: inside of fetch User Action');
    fetch('/api/current_user')
      .then((res) => res.json())
      .then((res) => {
        // this res is req.user
        console.log('fetchUser Action: got a current user of ', res);
        dispatch({ type: FETCH_USER, payload: res.userid });
      });
  };
};

export const fetchBugs = () => {
  return function (dispatch) {
    console.log('fetchBugs Action: inside of fetch bugs Action');
    fetch('/api/bugs')
      .then((res) => res.json())
      .then((res) => {
        // this res is req.user
        console.log('fetchBugs Action: got bugs of ', res);
        dispatch({ type: FETCH_BUGS, payload: res });
      });
  };
};
