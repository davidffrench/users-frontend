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

  return state.set('filteredUsers', fromJS(filteredUsers));
}

export default function (state = Map(), action) {
	switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'RECEIVE_USERS':
    return setUsers(state, action.state);
  case 'FILTER_USERS':
    return setFilteredUsers(state, action.state);
  }
  return state;
}
