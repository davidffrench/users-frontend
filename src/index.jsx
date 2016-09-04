import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducer from './reducer';
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
    user: {
      _id: '57b330de848a005e48f5de94',
      gender: 'female',
      name: {
        title: 'ms',
        first: 'olivia',
        last: 'young',
      },
      location: {
        street: '1119 grove road',
        city: 'Mountmellick',
        state: 'rhode island',
        zip: 88061,
      },
      email: 'olivia.young@example.com',
      username: 'crazykoala938',
      password: 'malibu',
      salt: '78TEnNQ1',
      md5: '9bebcc9d890f8c9e04c9e40fc1f41476',
      sha1: '36d6a69cabff0ad780a3dcceb4e94d44edb62fc6',
      sha256: '9e39c873967f52d67e8d052aad87daf4b63d5464a27de982b64abfe9b208efc8',
      registered: 1411100094,
      dob: 818810543,
      phone: '011-475-1126',
      cell: '081-725-2254',
      PPS: '4335321T',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/20.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/20.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/20.jpg',
      },
      __v: 0,
    },
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
