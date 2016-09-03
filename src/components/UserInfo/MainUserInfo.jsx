import React, { Component } from 'react';
import CardUserInfo from './CardUserInfo';
import AppBarUserInfo from './AppBarUserInfo';

class MainUserList extends Component {
  render() {
    return (
      <div>
        <AppBarUserInfo />
        <CardUserInfo {...this.props} />
      </div>
    );
  }
}

export default MainUserList;
