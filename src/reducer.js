import React from 'react';
import { Map, fromJS } from 'immutable';

// generic set state function
function setState(state, newState) {
  return state.merge(newState);
}

// generic remove state function
function removeState(state, nodeToRemove) {
  return state.remove(nodeToRemove);
}

// sets the users state
// maps the users names for the auocomplete search field datasource
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

// Saves a filtered subset of users in the state
function setFilteredUsers(state, filterText) {
  const filteredUsers = [];

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

// sets the selected user, the user state is used on theuserinfo screen
function setUser(state, user) {
  return state.set('user', fromJS(user));
}

// merges the old and new user state when updating from the userinfo screen
function updateUser(state, newState) {
  const userMutable = state.get('user') ? state.get('user').toJS() : {};

  Object.assign(userMutable, newState.user);

  return state.set('user', fromJS(userMutable));
}

//generic function for setting the snack bar message
function setSnackBarMessage(state, message) {
  return state.set('snackBarMessage', message);
}

// generic function that takes any kind action - along with the current state
// invokes the core function that matches the action
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
  case 'SAVE_USER':
  case 'USER_DELETED':
    return setSnackBarMessage(state, action.state);
  case 'UPDATE_USER':
    return updateUser(state, action.state);
  default:
    return state;
  }
}
