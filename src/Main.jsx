/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridListUsers from './components/GridListUsers';
import AppBarTop from './components/AppBarTop';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBarTop />
          <GridListUsers />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;