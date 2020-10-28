import React from 'react';
import SingleProject from '../components/Projects/SingleProject'
import Landing from '../components/Landing'
import { Router } from "@reach/router"


function App() {

  return (
    <Router>
      <Landing path="/"/>
      <SingleProject path="/app/:id"/>
    </Router> 
  );
}

export default App;
