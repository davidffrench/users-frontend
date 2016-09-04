import React, { Component } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import InfoBorder from 'material-ui/svg-icons/action/info';
import * as actionCreators from './../../actions';

// Styles for the grid
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

export class GridListUserList extends Component {
  constructor(props) {
    super(props);

    // If filteredusers exist, use them. if not then use users
    this.users = props.filteredUsers || props.users || [];
    this.colNumber = 2;
  }

  // Called on initial render, used to fetch users
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionCreators.fetchUsers());
  }

  componentWillReceiveProps(nextProps) {
    this.users = nextProps.filteredUsers || nextProps.users;
    // reduce number of columns if only 1 user exists, for when filtering
    if (this.users.size === 1)
      this.colNumber = 1;
  }

  // Called before the view is destroyed
  componentWillUnmount() {
    const { dispatch } = this.props;
    // remove the filtered users state
    dispatch(actionCreators.removeState('filteredUsers'));
  }

  // Convience function to get users full name
  getFullName(user) {
    const firstName = user.getIn(['name', 'first']);
    const lastName = user.getIn(['name', 'last']);
    return `${firstName} ${lastName}`;
  }

  // Fetches the select users and switches to user info screen
  handleMoreInfoTap(user) {
    const { dispatch } = this.props;

    dispatch(actionCreators.fetchUser(user));

    this.props.history.push('/userinfo');
  }

  // Grid list loops over users list to create individual tiles
  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={200}
          cols={this.colNumber}
          style={styles.gridList}
        >
          <Subheader />
          {this.users.map(user =>
            <GridTile
              key={user.get('_id')}
              title={this.getFullName(user)}
              subtitle={<span><b>{user.get('email')}</b></span>}
              actionIcon={
                <IconButton
                  onTouchTap={() => this.handleMoreInfoTap(user)}
                >
                  <InfoBorder color="white" />
                </IconButton>}
            >
              <img role="presentation" src={user.getIn(['picture', 'large'])} />
            </GridTile>
          )}
        </GridList>
      </div>
    );
  }
}
GridListUserList.propTypes = {
  users: React.PropTypes.instanceOf(Immutable.List),
  filteredUsers: React.PropTypes.instanceOf(Immutable.List),
  history: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    users: state.get('users'),
    filteredUsers: state.get('filteredUsers'),
  };
}

export const GridListUserListContainer = connect(
  mapStateToProps
)(GridListUserList);
