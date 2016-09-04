import React, { Component } from 'react';

// Root route component to render markup that is common across all routes
class Main extends Component {
  render() {
    return React.cloneElement(
      this.props.children
    );
  }
}
Main.propTypes = {
  children: React.PropTypes.object,
};

export default Main;
