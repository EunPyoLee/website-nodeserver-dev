import React from 'react';
import ReactDOM from 'react-dom';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import App from './scripts/App';
import './Styles/index.scss'

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
