import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridListUserListContainer } from './GridListUserList';
import { AppBarUserListContainer } from './AppBarUserList';
import { DrawerMenuContainer } from './../DrawerMenu';
import { SnackBarMessageContainer } from './../SnackBarMessage';

// Main component to structure the user list screen
class MainUserList extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <DrawerMenuContainer {...this.props} />
          <AppBarUserListContainer {...this.props} />
          <GridListUserListContainer {...this.props} />
          <SnackBarMessageContainer {...this.props} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MainUserList;
