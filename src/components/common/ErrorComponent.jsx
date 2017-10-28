import React, { Component, PropTypes } from 'react';
import { LANDING_PAGE } from '../../constants/UrlPaths';

class ErrorComponent extends Component {
  static propTypes = {
    actions:                    PropTypes.object.isRequired,
    message:                    PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleHomePage        = this.handleHomePage.bind(this);
  }

  handleHomePage() {
    const { actions } = this.props;
    actions.pushState(LANDING_PAGE, { replace: true });
  }

  render() {
    const { message } = this.props;
    return (
      <div className="position-relative">
        <div id="error-page">
          <span>We’re sorry.
            <br />
            {message}
          </span>
          <button onClick={this.handleHomePage}>
            go back to homepage
          </button>
        </div>
      </div>
    );
  }
}

export default ErrorComponent;
