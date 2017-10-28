import React, { Component, PropTypes } from 'react';

export default class Menu extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  state = {};

  render() {
    const toolbar = <div className="menu-root">
      TOOL BAR!
    </div>;

    return <div>
      {toolbar}
    </div>;
  }
}
