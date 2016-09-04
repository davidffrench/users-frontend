import { Map, fromJS } from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function setUsers(state, users) {
  const statea = state.set('users', fromJS(users));
  return state.set('users', fromJS(users));
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
