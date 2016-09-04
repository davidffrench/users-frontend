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
import { DrawerMenu } from '../../src/components/DrawerMenu';
import { expect } from 'chai';

injectTapEventPlugin();

describe('DrawerMenu', () => {
  it('renders a pair of menu items', () => {
    const component = renderIntoDocument(
      <MuiThemeProvider>
        <DrawerMenu />
      </MuiThemeProvider>
    );
    const spans = scryRenderedDOMComponentsWithTag(component, 'span');

    expect(spans.length).to.equal(2);
  });
});
