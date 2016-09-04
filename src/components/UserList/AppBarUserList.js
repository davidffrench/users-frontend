import React, { Component } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';
import * as actionCreators from './../../actions';

// Styles for the app bar and search field
const styles = {
  title: {
    cursor: 'pointer',
  },
  searchTextField: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  searchPaper: {
    paddingLeft: 5,
    paddingRight: 5,
  },
};

export class AppBarUserList extends Component {
  constructor(props) {
    super(props);

    this.filterUsers = this.filterUsers.bind(this);
    this.handleMenuBtnTouchTap = this.handleMenuBtnTouchTap.bind(this);

    // usernames is the mapped names of the fetched users
    this.userNames = props.userNames || [];
  }

  componentWillReceiveProps(nextProps) {
    this.userNames = nextProps.userNames.toJS();
  }

  // Opens the drawer menu
  handleMenuBtnTouchTap() {
    const { dispatch } = this.props;
    dispatch(actionCreators.setState({ drawerOpen: true }));
  }

  // Called when enter is pressed or a selection is made
  // Calls the action to create the filteredUsers state based on the search text
  filterUsers(fieldText) {
    const { dispatch } = this.props;
    dispatch(actionCreators.filterUsers(fieldText));
  }

  // Using auto complete component
  render() {
    return (
      <AppBar
        title={<span style={styles.title}>User List</span>}
        onLeftIconButtonTouchTap={this.handleMenuBtnTouchTap}
        iconElementRight={
          <Paper style={styles.searchPaper} zDepth={1}>
            <AutoComplete
              hintText="Search by Name"
              filter={AutoComplete.caseInsensitiveFilter}
              dataSource={this.userNames}
              textFieldStyle={styles.searchTextField}
              maxSearchResults={5}
              onNewRequest={this.filterUsers}
            />
          </Paper>
        }
      />
    );
  }
}
AppBarUserList.propTypes = {
  userNames: React.PropTypes.instanceOf(Immutable.List),
};

function mapStateToProps(state) {
  return {
    userNames: state.get('userNames'),
  };
}

export const AppBarUserListContainer = connect(
  mapStateToProps
)(AppBarUserList);
