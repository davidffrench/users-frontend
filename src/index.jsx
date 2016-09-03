import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainUserList from './components/UserList/MainUserList';
import MainUserInfo from './components/UserInfo/MainUserInfo';
import Main from './Main';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const routes = <Route component={Main}>
  <Route path="/userinfo" component={MainUserInfo} />
  <Route path="/" component={MainUserList} />
</Route>;

// Render the main app react component into the app div.
render(
  <Router history={hashHistory}>
    {routes}
  </Router>,
  document.getElementById('app')
);
