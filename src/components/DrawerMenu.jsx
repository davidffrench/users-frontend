import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ActionHome from 'material-ui/svg-icons/action/home';
import ContentCreate from 'material-ui/svg-icons/content/create';
import * as actionCreators from './../actions';

export class DrawerMenu extends Component {

  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onHomeItemTapped = this.onHomeItemTapped.bind(this);
    this.onCreateUserItemTapped = this.onCreateUserItemTapped.bind(this);

    this.open = props.open || false;
  }

  componentWillReceiveProps(nextProps) {
    this.open = nextProps.open;
  }

  onHomeItemTapped() {
    this.handleClose();

    this.props.history.push('/');
  }

  onCreateUserItemTapped() {
    this.handleClose();

    this.props.history.push('/userInfo');
  }

  handleClose() {
    const { dispatch } = this.props;
    dispatch(actionCreators.setState({ drawerOpen: false }));
  }

  handleToggle() {
    const { dispatch } = this.props;
    dispatch(actionCreators.setState({ drawerOpen: !this.open }));
  }

  render() {
    return (
      <Drawer
        docked={false}
        width={200}
        open={this.open}
        onRequestChange={this.handleToggle}
      >
        <MenuItem onTouchTap={this.onHomeItemTapped} leftIcon={<ActionHome />} >User List</MenuItem>

        <Divider />
        <MenuItem onTouchTap={this.onCreateUserItemTapped} leftIcon={<ContentCreate />} >Create User</MenuItem>
        <Divider />
      </Drawer>
    );
  }
}
DrawerMenu.propTypes = {
  open: React.PropTypes.bool,
  history: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    open: state.get('drawerOpen'),
  };
}

export const DrawerMenuContainer = connect(
  mapStateToProps
)(DrawerMenu);
