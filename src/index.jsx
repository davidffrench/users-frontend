import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainUserList from './components/UserList/MainUserList';
import MainUserInfo from './components/UserInfo/MainUserInfo';
import Main from './Main';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    users: [{
      id: 1,
      name: {
        title: 'mr',
        first: 'Joe',
        last: 'Bloggs',
      },
      img: 'https://randomuser.me/api/portraits/men/75.jpg',
      email: 'Joe.Bloggs@example.com',
    }, {
      id: 2,
      name: {
        title: 'ms',
        first: 'Jane',
        last: 'Doe',
      },
      img: 'https://randomuser.me/api/portraits/men/72.jpg',
      email: 'Jane.Doe@example.com',
    }],
  },
});

const routes = <Route component={Main}>
  <Route path="/userinfo" component={MainUserInfo} />
  <Route path="/" component={MainUserList} />
</Route>;

// Render the main app react component into the app div.
render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
