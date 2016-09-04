import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';

export class SnackBarMessage extends Component {

  constructor(props) {
    super(props);

    this.handleRequestClose = this.handleRequestClose.bind(this);

    this.state = {
      open: this.props.snackBarMessage ? true : false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.snackBarMessage ? true : false,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <Snackbar
        open={this.state.open}
        message={this.props.snackBarMessage}
        autoHideDuration={4000}
        onRequestClose={this.handleRequestClose}
      />
    );
  }
}
SnackBarMessage.propTypes = {
  snackBarMessage: React.PropTypes.string,
};

function mapStateToProps(state) {
  return {
    snackBarMessage: state.get('snackBarMessage'),
  };
}

export const SnackBarMessageContainer = connect(
  mapStateToProps
)(SnackBarMessage);
