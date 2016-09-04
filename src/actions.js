import fetch from 'isomorphic-fetch';

export function setState(state) {
  return {
    type: 'SET_STATE',
    state,
  };
}

export function selectUser(user) {
  return {
    type: 'SELECT_USER',
    state: user,
  };
}

function receiveUser(json) {
  return {
    type: 'RECEIVE_USER',
    state: json,
  };
}

function receiveUsers(users) {
  return {
    type: 'RECEIVE_USERS',
    state: users,
  };
}

export function fetchUser(user) {
  return dispatch =>
    fetch('http://localhost:8000/users/${user}')
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)));
}

export function fetchUsers() {
  return dispatch =>
    fetch('http://localhost:8000/users/')
      .then(response => response.json())
      .then(json => dispatch(receiveUsers(json)));
}

