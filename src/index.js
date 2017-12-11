import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import {BrowserRouter as Router} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const App = () => (
  <MuiThemeProvider >
    <Main />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,        
  document.getElementById('app')
);
