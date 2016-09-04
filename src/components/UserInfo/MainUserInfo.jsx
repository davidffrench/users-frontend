import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridListUserListContainer } from './CardUserInfo';
import AppBarUserInfo from './AppBarUserInfo';

class MainUserList extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBarUserInfo />
          <GridListUserListContainer {...this.props} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MainUserList;
