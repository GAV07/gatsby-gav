import React from 'react';
import Project from './Projects/Project'
import Landing from './Landing'
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

function App() {

  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/projects/:id" component={Project} />
      </Switch>
    </Router>
    
  );
}

export default App;
