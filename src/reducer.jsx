import { Map, fromJS } from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
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

function removeState(state, nodeToRemove) {
  return state.remove(nodeToRemove);
}

export default function (state = Map(), action) {
	switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'RECEIVE_USERS':
    return setUsers(state, action.state);
  case 'FILTER_USERS':
    return setFilteredUsers(state, action.state);
  case 'RECEIVE_USER':
    return setUser(state, action.state);
  case 'REMOVE_STATE':
    return removeState(state, action.state);
  }
  return state;
}
