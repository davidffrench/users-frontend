import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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

class GridListUsers extends Component {
  constructor(props) {
    super(props);
    this.users = props.users || [];
  }
  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={200}
          cols={3}
          style={styles.gridList}
        >
          <Subheader />
          {this.users.map((tile) => (
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
    );
  }
}
GridListUsers.propTypes = { users: React.PropTypes.array.isRequired };

export default GridListUsers;
