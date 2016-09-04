import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridListUserListContainer } from './GridListUserList';
import AppBarUserList from './AppBarUserList';

class MainUserList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBarUserList />
          <GridListUserListContainer {...this.props} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MainUserList;
