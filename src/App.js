import React from 'react';
import { Router as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.css';

import "bulma/css/bulma.css";
import 'react-quill/dist/quill.snow.css';

import { Login, RequestList } from './views'

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/requests" component={RequestList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
