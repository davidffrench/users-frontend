import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardUserInfo from './CardUserInfo';
import AppBarUserInfo from './AppBarUserInfo';

class MainUserList extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBarUserInfo />
          <CardUserInfo {...this.props} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MainUserList;
