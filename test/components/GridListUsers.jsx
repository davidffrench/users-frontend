import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate,
} from 'react-addons-test-utils';
import GridListUsers from '../../src/components/GridListUsers';
import { expect } from 'chai';

injectTapEventPlugin();

const tilesData = [
  {
    img: 'https://randomuser.me/api/portraits/women/20.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/18.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
];

describe('GridListUsers', () => {
  it('renders a pair grid tiles', () => {
    const component = renderIntoDocument(
      <MuiThemeProvider>
        <GridListUsers users={tilesData} />
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
        <GridListUsers users={tilesData} moreInfo={moreInfo} />
      </MuiThemeProvider>
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.touchTap(buttons[1]);

    expect(userAfter.title).to.equal('Tasty burger');
  });
});
