import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import ErrorComponent from './common/ErrorComponent';


class ErrorPage extends Component {
  static propTypes = {
    actions:                    PropTypes.object.isRequired
  }

  render() {
    const errorMessage = 'we can’t seem to find the page you’re looking for. :(';
    const { actions } = this.props;
    return (
      <ErrorComponent message={errorMessage} actions={actions} />
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        pushState: push,
      }, dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
