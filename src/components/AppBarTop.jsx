import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
    'input > color': 'white',
  },
};

class AppBarTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ['david', 'Samantha'],
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <AppBar
          title={<span style={styles.title}>User List</span>}
          onTitleTouchTap={handleTouchTap}
          // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={
            <AutoComplete
              hintText="Search by Name"
              dataSource={this.state.dataSource}
              textFieldStyle={styles.searchTextField}
            />
          }
        />
      </MuiThemeProvider>
    );
  }
}

export default AppBarTop;
