import React, { Component } from 'react';

import DevTools from './DevTools';

/* eslint-disable react/prefer-stateless-function */
export default class Root extends Component {

    render() {
        return (
            <div>
                <DevTools />
            </div>
        );
    }
}
