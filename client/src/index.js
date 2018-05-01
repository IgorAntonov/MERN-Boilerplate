// Add polyfills here or to the entry point in webpack config, if they will be too much
import 'core-js/fn/promise';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import store from './store';
import './utils/reboot.css';

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
