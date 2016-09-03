import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const AppBarTop = () => (
  <MuiThemeProvider>
    <AppBar
      title={<span style={styles.title}>User List</span>}
      onTitleTouchTap={handleTouchTap}
      // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      // iconElementRight={<FlatButton label="Save" />}
    />
  </MuiThemeProvider>
);

export default AppBarTop;
