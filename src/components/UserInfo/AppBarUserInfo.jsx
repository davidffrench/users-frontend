import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

class AppBarUserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false,
    };
  }

  handleOpen() {
    this.setState({ dialogOpen: true });
  }

  handleClose() {
    this.setState({ dialogOpen: false });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={() => this.handleClose()}
      />,
      <FlatButton
        label="Delete User"
        primary={false}
        onTouchTap={() => this.handleClose()}
      />,
    ];

    return (
      <div>
        <AppBar
          title={<span>User Information</span>}
          onLeftIconButtonTouchTap={handleTouchTap}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <MenuItem primaryText="Save" />
              <MenuItem primaryText="Delete" onTouchTap={() => this.handleOpen()} />
            </IconMenu>
          }
        />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={() => this.handleClose()}
        >
          Are you sure you want to delete this user?
        </Dialog>
      </div>
    );
  }
}

export default AppBarUserInfo;
