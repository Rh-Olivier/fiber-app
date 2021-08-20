import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from "./components/UpperCamelCase"
import {HashRouter as Router} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <AppContainer />
    </Router>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

