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
import UserInfo from './components/UserInfo';


const tilesData = [
  {
    img: 'https://randomuser.me/api/portraits/women/20.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/18.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/17.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/16.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/19.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/14.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/13.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const moreInfo = function(user) {
  alert("hello");
}

class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBarTop />
          <UserInfo users={tilesData} moreInfo={moreInfo}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;