import React from 'react';
import SingleProject from './Projects/SingleProject'
import Landing from './Landing'
import { Router, Switch, Route } from "react-router-dom";
//import { Router } from "@reach/router"
import { createBrowserHistory } from "history";

function App() {

  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/:id" component={SingleProject} />
      </Switch>
    </Router>
    // {/* <Router>
    //   <Landing path="/"/>
    //   <SingleProject path="project"/>
    //   <Test path="test" />
    // </Router> */}
  );
}

export default App;
