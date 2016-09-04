import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducer from './reducer';
import MainUserList from './components/UserList/MainUserList';
import MainUserInfo from './components/UserInfo/MainUserInfo';
import Main from './Main';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// setup redux store with thunk for async actions
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
);

// React Routes with user grid list as the entry point
const routes = <Route component={Main}>
  <Route path="/userinfo" component={MainUserInfo} />
  <Route path="/" component={MainUserList} />
</Route>;

// Render the main app react component into the app div.
// Using router hash history
render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
