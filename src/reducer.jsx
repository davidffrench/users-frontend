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

export default function (state = Map(), action) {
	switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'RECEIVE_USERS':
    return setUsers(state, action.state);
  }
  return state;
}
