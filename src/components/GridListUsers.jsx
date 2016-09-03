import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import InfoBorder from 'material-ui/svg-icons/action/info';

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
    this.moreInfo = props.moreInfo;
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
          {this.users.map((user) => (
            <GridTile
              key={user.img}
              title={user.title}
              subtitle={<span>by <b>{user.author}</b></span>}
              actionIcon={
                <IconButton
                  onTouchTap={() => this.moreInfo(user)}
                >
                  <InfoBorder color="white" />
                </IconButton>}
            >
              <img role="presentation" src={user.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}
GridListUsers.propTypes = {
  users: React.PropTypes.array.isRequired,
  moreInfo: React.PropTypes.func,
};

export default GridListUsers;
