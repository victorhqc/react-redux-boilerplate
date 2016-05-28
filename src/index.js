require('roboto-fontface/css/roboto-fontface.css');
require('./styles/style.css');

// React dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

// Redux dependencies
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';

import Root from './components/core/Root';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <Router history={history}>
            <Route path="/" component={ Root }>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
