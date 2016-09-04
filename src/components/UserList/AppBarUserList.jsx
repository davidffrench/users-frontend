import React, { Component } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

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

    this.userNames = props.userNames || [];
  }

  componentWillReceiveProps(nextProps) {
    this.userNames = nextProps.userNames.toJS();
  }

  render() {
    return (
      <AppBar
        title={<span style={styles.title}>User List</span>}
        onTitleTouchTap={handleTouchTap}
        // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={
          <Paper style={styles.searchPaper} zDepth={1}>
            <AutoComplete
              hintText="Search by Name"
              filter={AutoComplete.caseInsensitiveFilter}
              dataSource={this.userNames}
              textFieldStyle={styles.searchTextField}
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
