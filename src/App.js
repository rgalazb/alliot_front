import React from 'react';
import {  Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createBrowserHistory } from "history";
import store from './store';
import './App.css';

import "bulma/css/bulma.css";
import 'react-quill/dist/quill.snow.css';

import { Login, RequestList, SignUp } from './views'
import { Nav } from './components'
const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/requests" component={RequestList} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
