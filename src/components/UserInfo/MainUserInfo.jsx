import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridListUserListContainer } from './CardUserInfo';
import { AppBarUserInfoContainer } from './AppBarUserInfo';
import { DrawerMenuContainer } from './../DrawerMenu';
import { SnackBarMessageContainer } from './../SnackBarMessage';

class MainUserList extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <DrawerMenuContainer {...this.props} />
          <AppBarUserInfoContainer {...this.props} />
          <GridListUserListContainer {...this.props} />
          <SnackBarMessageContainer {...this.props} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MainUserList;
