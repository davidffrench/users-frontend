import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { CardUserInfoContainer } from './CardUserInfo';
import { AppBarUserInfoContainer } from './AppBarUserInfo';
import { DrawerMenuContainer } from './../DrawerMenu';
import { SnackBarMessageContainer } from './../SnackBarMessage';

// Main component to structure the user info screen
class MainUserInfo extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <DrawerMenuContainer {...this.props} />
          <AppBarUserInfoContainer {...this.props} />
          <CardUserInfoContainer {...this.props} />
          <SnackBarMessageContainer {...this.props} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MainUserInfo;
