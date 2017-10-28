import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as UrlPaths from './constants/UrlPaths';
import App from './components/App';
import LandingPage from './components/landingPage/Overview';
import ErrorPage from './components/ErrorPage';

require('./styles/app.styl');

// Include 3rd part css here if necessary

export default (
  <Route path={UrlPaths.LANDING_PAGE} component={App}>
    {/* Public access pagess */}
    <IndexRoute component={LandingPage} />

    {/* 404 page */}
    <Route path="*" component={ErrorPage} status={404} />
  </Route>
);
