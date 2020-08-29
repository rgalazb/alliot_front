import React from 'react';
import {  Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createBrowserHistory } from "history";
import store from './store';
import './App.css';

import "bulma/css/bulma.css";
import 'react-quill/dist/quill.snow.css';

import { Login, RequestList } from './views'

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/requests" component={RequestList} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
