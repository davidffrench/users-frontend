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

    this.canSubmit = typeof props.canSubmit !== undefined ? props.canSubmit : !props.isCreate;
    this.isCreate = props.isCreate;
  }

  componentWillReceiveProps(nextProps) {
    this.canSubmit = nextProps.canSubmit;
    this.isCreate = nextProps.isCreate;
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(actionCreators.removeState('isCreate'));
  }

  handleMenuBtnTouchTap() {
    const { dispatch } = this.props;
    dispatch(actionCreators.setState({ drawerOpen: true }));
  }

  handleOpen() {
    this.setState({ dialogOpen: true });
  }

  handleClose() {
    this.setState({ dialogOpen: false });
  }

  handleUserDelete() {
    const { dispatch } = this.props;
    dispatch(actionCreators.deleteUser(this.props.userId));
    this.handleClose();

    this.props.history.push('/');
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
              <MenuItem primaryText="Save" disabled={!this.canSubmit} />
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
};

function mapStateToProps(state) {
  return {
    canSubmit: state.get('canSubmit'),
    isCreate: state.get('isCreate'),
    userId: state.getIn(['user', '_id']),
  };
}

export const AppBarUserInfoContainer = connect(
  mapStateToProps
)(AppBarUserInfo);
