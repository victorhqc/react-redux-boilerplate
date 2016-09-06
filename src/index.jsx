// React dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import throttle from 'lodash/throttle';

// Redux dependencies
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

// Material UI dependencies
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './store/configureStore';

import Root from './components/core/Root';

import { loadState, saveState } from './helpers/localStorage';

require('roboto-fontface/css/roboto-fontface.css');

const store = configureStore(loadState());

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 500));

injectTapEventPlugin();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

/* global document:true */
/* eslint no-undef: "error" */

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Root} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
