import React, { Component } from 'react';
import GridListUserList from './GridListUserList';
import AppBarUserList from './AppBarUserList';

class MainUserList extends Component {
  render() {
    return (
      <div>
        <AppBarUserList />
        <GridListUserList {...this.props} />
      </div>
    );
  }
}

export default MainUserList;
