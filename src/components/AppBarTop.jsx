import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
            <Paper style={styles.searchPaper} zDepth={1}>
              <AutoComplete
                hintText="Search by Name"
                dataSource={this.state.dataSource}
                textFieldStyle={styles.searchTextField}
              />
            </Paper>
          }
        />
      </MuiThemeProvider>
    );
  }
}

export default AppBarTop;
