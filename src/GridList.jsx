import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = [
  {
    img: 'https://randomuser.me/api/portraits/women/19.jpg',
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
    img: 'https://randomuser.me/api/portraits/women/15.jpg',
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

const GridListUsers = () => (
  <MuiThemeProvider>
    <div style={styles.root}>
      <GridList
        cellHeight={200}
        cols={3}
        style={styles.gridList}
      >
        <Subheader>December</Subheader>
        {tilesData.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            subtitle={<span>by <b>{tile.author}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
  </MuiThemeProvider>
);

export default GridListUsers;
