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
    this.users = props.users || [];
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionCreators.fetchUsers());
  }

  componentWillReceiveProps(nextProps) {
    this.users = nextProps.users;
  }

  getFullName(user) {
    const firstName = user.getIn(['name', 'first']);
    const lastName = user.getIn(['name', 'last']);
    return `${firstName} ${lastName}`;
  }

  moreInfo() {
    this.props.history.push('/userinfo');
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={200}
          cols={2}
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
                  onTouchTap={() => this.moreInfo()}
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
  history: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    users: state.get('users'),
  };
}

export const GridListUserListContainer = connect(
  mapStateToProps
)(GridListUserList);
