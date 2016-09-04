import React from 'react';
import { Map, fromJS } from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function removeState(state, nodeToRemove) {
  return state.remove(nodeToRemove);
}

function setUsers(state, users) {
  const userNames = users.map(user => {
    const firstName = user.name.first;
    const lastName = user.name.last;
    return `${firstName} ${lastName}`;
  });
  return state.merge({
    users: fromJS(users),
    userNames,
  });
}

function setFilteredUsers(state, filterText) {
  let filteredUsers = [];

  for (const user of state.get('users')) {
    const firstName = user.getIn(['name', 'first']);
    const lastName = user.getIn(['name', 'last']);
    const fullName = `${firstName} ${lastName}`;

    if (fullName.includes(filterText)) {
      filteredUsers.push(user);
    }
  }
  if (filteredUsers) {
    return state.set('filteredUsers', fromJS(filteredUsers));
  } else {
    return state.remove('filteredUsers');
  }
}

function setUser(state, user) {
  return state.set('user', fromJS(user));
}

function updateUser(state, newState) {
  console.log(state.toJS());
  const userMutable = state.get('user') ? state.get('user').toJS() : {};

  Object.assign(userMutable, newState.user);

  return state.set('user', fromJS(userMutable));
}

function setSnackBarMessage(state, message) {
  return state.set('snackBarMessage', message);
}

export default function (state = Map(), action) {
	switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'REMOVE_STATE':
    return removeState(state, action.state);
  case 'RECEIVE_USERS':
    return setUsers(state, action.state);
  case 'FILTER_USERS':
    return setFilteredUsers(state, action.state);
  case 'RECEIVE_USER':
    return setUser(state, action.state);
  case 'USER_DELETED':
    return setSnackBarMessage(state, action.state);
  case 'UPDATE_USER':
    return updateUser(state, action.state);
  case 'SAVE_USER':
    return setSnackBarMessage(state, action.state);
  }
  return state;
}
