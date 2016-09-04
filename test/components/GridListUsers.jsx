import React from 'react';
import ReactDOM from 'react-dom';
import { List, Map, fromJS } from 'immutable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate,
} from 'react-addons-test-utils';
import { GridListUserList } from '../../src/components/UserList/GridListUserList';
import { expect } from 'chai';

//injectTapEventPlugin();

const users = List.of(
  Map({
    _id: '1',
    name: {
      title: 'ms',
      first: 'olivia',
      last: 'young',
    },
    email: 'olivia.young@example.com',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/20.jpg',
    },
  }),
  Map({
    _id: '2',
    name: {
      title: 'ms',
      first: 'olivia',
      last: 'young',
    },
    email: 'olivia.young@example.com',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/18.jpg',
    },
  })
);


// After including redux, there is an issue with running tests on components that use the componentDidMount method with dispatch


/*
describe('GridListUserList', () => {
  it('renders a pair grid tiles', () => {
    const component = renderIntoDocument(
      <MuiThemeProvider>
        <GridListUserList users={users} />
      </MuiThemeProvider>
    );
    const imgs = scryRenderedDOMComponentsWithTag(component, 'img');

    expect(imgs.length).to.equal(2);
    expect(imgs[0].src).to.equal('https://randomuser.me/api/portraits/women/20.jpg');
    expect(imgs[1].src).to.equal('https://randomuser.me/api/portraits/women/18.jpg');
  });

  it('invokes callback when a button is clicked', () => {
    let userAfter;
    const moreInfo = function(user) {
      userAfter = user;
    };

    const component = renderIntoDocument(
      <MuiThemeProvider>
        <GridListUserList users={users} moreInfo={moreInfo} />
      </MuiThemeProvider>
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.touchTap(buttons[1]);

    expect(userAfter.title).to.equal('Tasty burger');
  });
});
*/
