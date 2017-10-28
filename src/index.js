import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory as history } from 'react-router';
import { IntlProvider } from 'react-intl';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore(history);
import { AppContainer } from 'react-hot-loader';
import { ReduxAsyncConnect } from 'redux-async-connect';

render(
  <AppContainer>
    <IntlProvider locale="en">
      <Provider store={store}>
        <Router
          render={(props) => <ReduxAsyncConnect {...props} />}
          onUpdate={() => window.scrollTo(0, 0)}
          history={history}
        >
          {routes}
        </Router>
      </Provider>
    </IntlProvider>
  </AppContainer>,
  document.getElementById('app')
);
if (module.hot) {
  module.hot.accept();
}
