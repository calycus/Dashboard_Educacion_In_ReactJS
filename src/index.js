import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigator from './layouts/Navigator';
import store from './store/store'
import { Provider } from 'react-redux'
//import MallasStore from './store/MallasStore';

ReactDOM.render(
  <Provider store={store}>
    <Navigator />
  </Provider>,
  document.getElementById('root')
);
