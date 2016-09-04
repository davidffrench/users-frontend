import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridListUserListContainer } from './GridListUserList';
import { AppBarUserListContainer } from './AppBarUserList';
import { DrawerMenuContainer } from './../DrawerMenu';
import { SnackBarMessageContainer } from './../SnackBarMessage';

class MainUserList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <DrawerMenuContainer {...this.props}  />
          <AppBarUserListContainer {...this.props} />
          <GridListUserListContainer {...this.props} />
          <SnackBarMessageContainer {...this.props} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MainUserList;
