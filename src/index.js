import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigator from './layouts/Navigator';
import store from './store/store'
import { Provider } from 'react-redux'
//import MallasStore from './store/MallasStore';
import EleccionMalla from './EleccionMalla';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004600',
    },
    secondary: {
      main: '#26A69A',
    },
    positive: {
      main: '#21BA45',
    },
    negative: {
      main: '#C10015',
    }
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <EleccionMalla />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
