import fetch from 'isomorphic-fetch';

const apiURL = 'http://192.168.0.12:8000';

export function setState(state) {
  return {
    type: 'SET_STATE',
    state,
  };
}

function receiveUser(user) {
  return {
    type: 'RECEIVE_USER',
    state: user,
  };
}

function receiveUsers(users) {
  return {
    type: 'RECEIVE_USERS',
    state: users,
  };
}

function userSaved(state) {
  return {
    type: 'SAVE_USER',
    state,
  };
}

function userDeleted(state) {
  return {
    type: 'USER_DELETED',
    state,
  };
}

export function fetchUser(user) {
  const userId = user.get('_id');
  return dispatch =>
    fetch(`${apiURL}/users/${userId}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)));
}


export function fetchUsers() {
  return dispatch =>
    fetch(`${apiURL}/users/`)
      .then(response => response.json())
      .then(json => dispatch(receiveUsers(json)));
}

export function deleteUser(userId) {
  return dispatch =>
    fetch(`${apiURL}/users/${userId}`, {
      method: 'GET',
    })
    .then(dispatch(userDeleted('Delete Successful')));
}

export function saveUser(userId, user) {
  return dispatch =>
    fetch(`${apiURL}/users/${userId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(dispatch(userSaved('Save Successful')));
}

export function createUser(user) {
  return dispatch =>
    fetch(`${apiURL}/users/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(dispatch(userSaved('Save Successful')));
}

export function filterUsers(filtertext) {
  return {
    type: 'FILTER_USERS',
    state: filtertext,
  };
}

export function removeState(nodeToRemove) {
  return {
    type: 'REMOVE_STATE',
    state: nodeToRemove,
  };
}

export function updateUser(state) {
  return {
    type: 'UPDATE_USER',
    state,
  };
}
