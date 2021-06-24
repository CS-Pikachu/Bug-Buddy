import { FETCH_USER } from './types';
import { FETCH_BUGS } from './types';
import { FETCH_COMMENTS } from './types';
import { FETCH_ALL_USERS } from './types';
import { UPDATE_BUG } from './types';

export const fetchUser = () => {
  return function (dispatch) {
    console.log('fetchUser Action: inside of fetch User Action');
    fetch('/api/current_user')
      .then((res) => res.json())
      .then((res) => {
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
        console.log('fetchBugs Action: got bugs of ', res);
        dispatch({ type: FETCH_BUGS, payload: res });
      });
  };
};

export const fetchComments = () => {
  return function (dispatch) {
    console.log('fetchComments Action: inside of fetch comments Action');
    fetch('/api/comments')
      .then((res) => res.json())
      .then((res) => {
        console.log('fetchComments Action: got comments of ', res);
        dispatch({ type: FETCH_COMMENTS, payload: res });
      });
  };
};

export const fetchAllUsers = () => {
  return function (dispatch) {
    console.log('fetchAllUsers Action: inside of fetch all users Action');
    fetch('/api/users')
      .then((res) => res.json())
      .then((res) => {
        console.log('fetchAllUsers Action: got users of ', res);
        dispatch({ type: FETCH_ALL_USERS, payload: res });
      });
  };
};

export const updateBug = (bug) => {
  const body = { status: bug.status };
  return function (dispatch) {
    console.log('updateBug Action: inside of update Bug Action');
    fetch(`/api/bugs/${bug.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('updateBug Action: got updated bug of ', res);
        dispatch({ type: UPDATE_BUG, payload: res });
      });
  };
};
