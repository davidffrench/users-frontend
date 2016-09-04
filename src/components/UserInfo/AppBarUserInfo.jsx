import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import * as actionCreators from './../../actions';

export class AppBarUserInfo extends Component {
  constructor(props) {
    super(props);

    this.handleMenuBtnTouchTap = this.handleMenuBtnTouchTap.bind(this);

    this.state = {
      dialogOpen: false,
    };

    // if canSubmit is not defined, base it off isCreate
    this.canSubmit = typeof props.canSubmit !== undefined ? props.canSubmit : !props.isCreate;
    this.isCreate = props.isCreate;
  }

  componentWillReceiveProps(nextProps) {
    this.canSubmit = nextProps.canSubmit;
    this.isCreate = nextProps.isCreate;
  }

  // Remove isCreate state when component is getting destroyed
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(actionCreators.removeState('isCreate'));
  }

  // Open drawer menu
  handleMenuBtnTouchTap() {
    const { dispatch } = this.props;
    dispatch(actionCreators.setState({ drawerOpen: true }));
  }

  // Handles open for the sub menu with save & delete options
  handleOpen() {
    this.setState({ dialogOpen: true });
  }

  // Handle close for sub menu
  handleClose() {
    this.setState({ dialogOpen: false });
  }

  // Handle user delete, send action to delete user and switch to user list
  handleUserDelete() {
    const { dispatch } = this.props;
    dispatch(actionCreators.deleteUser(this.props.userId));
    this.handleClose();

    this.props.history.push('/');
  }

  // Handle saving of user
  handleUserSave() {
    const { dispatch } = this.props;

    // Dispatch different actions if it is a new or existing user
    if (this.props.isCreate) {
      dispatch(actionCreators.createUser(this.props.user.toJS()));
    } else {
      dispatch(actionCreators.saveUser(this.props.userId, this.props.user.toJS()));
    }

    this.handleClose();
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
        onTouchTap={() => this.handleUserDelete()}
      />,
    ];

    // Almost all for the right hand sub menu
    return (
      <div>
        <AppBar
          title={<span>User Information</span>}
          onLeftIconButtonTouchTap={this.handleMenuBtnTouchTap}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <MenuItem 
                primaryText="Save"
                disabled={!this.canSubmit}
                onTouchTap={() => this.handleUserSave()}
              />
              {!this.isCreate ?
                <MenuItem primaryText="Delete" onTouchTap={() => this.handleOpen()} />
                : null
              }
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
AppBarUserInfo.propTypes = {
  canSubmit: React.PropTypes.bool,
  isCreate: React.PropTypes.bool,
  userId: React.PropTypes.string,
  user: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    canSubmit: state.get('canSubmit'),
    isCreate: state.get('isCreate'),
    userId: state.getIn(['user', '_id']),
    user: state.get('user'),
  };
}

export const AppBarUserInfoContainer = connect(
  mapStateToProps
)(AppBarUserInfo);
