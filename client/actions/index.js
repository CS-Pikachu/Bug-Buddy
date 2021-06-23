import { FETCH_USER } from './types';

export const fetchUser = () => {
  return function (dispatch) {
    console.log('inside of fetch User Action');
    fetch('/api/current_user').then((res) => {
      // this res is req.user
      console.log('got a current user of ', res);
      dispatch({ type: FETCH_USER, payload: res.data });
    });
  };
};
