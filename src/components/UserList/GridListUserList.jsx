import React, { Component } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import InfoBorder from 'material-ui/svg-icons/action/info';
import * as actionCreators from './../../actions';

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
    this.users = props.filteredUsers || props.users || [];
    this.colNumber = 2;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionCreators.clearUser());
    dispatch(actionCreators.fetchUsers());
  }

  componentWillReceiveProps(nextProps) {
    this.users = nextProps.filteredUsers || nextProps.users;
    if (this.users.size === 1) this.colNumber = 1;
  }

  getFullName(user) {
    const firstName = user.getIn(['name', 'first']);
    const lastName = user.getIn(['name', 'last']);
    return `${firstName} ${lastName}`;
  }

  moreInfo(user) {
    const { dispatch } = this.props;
    dispatch(actionCreators.fetchUser(user));
    this.props.history.push('/userinfo');
  }

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
                  onTouchTap={() => this.moreInfo(user)}
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
