import React, { Component, PropTypes } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
// For example purpose only.
// import { load as loadData, isLoaded as isDataLoaded } from '../reducers/someReducer';


class MainApp extends Component {
  static propTypes = {
    children:                   PropTypes.element.isRequired,
    params:                     PropTypes.object
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
  render() {
    return (
      <div>
        <Header />
        <div className="app-body-container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        pushState: push
      },
      dispatch
    )
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
