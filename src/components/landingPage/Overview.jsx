import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

function setState(props, currentState) {
  return {};
}

class OverviewPage extends Component {
  static propTypes = {
    actions:                    PropTypes.object.isRequired,
  }

  static reduxAsyncConnect = [{
    promise: ({ store: { dispatch, getState }, params }) => {
      const promises = [];
      // Dispatch actions here which needs to be pre loaded in page
      // Example
      // if (!isDataLoaded(getState() || params.dataId)) {
      //   promises.push(dispatch(loadData(params.dataId)));
      // }
      return Promise.all(promises);
    }
  }];

  constructor(props) {
    super(props);
    this.state = setState(props);
  }
  componentWillReceiveProps(newProps) {
    // if you have to change state here.
    this.setState(setState(newProps, this.state));
  }

  render() {
    return (
      <div>
        <center>
          <h1>landing > Overview-page</h1>
        </center>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        pushState: push,
      },
      dispatch
    )
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
