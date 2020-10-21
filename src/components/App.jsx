import React from 'react';
import SingleProject from './Projects/Project'
import Landing from './Landing'
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

function App() {

  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/:id" component={SingleProject} />
      </Switch>
    </Router>
    
  );
}

export default App;
