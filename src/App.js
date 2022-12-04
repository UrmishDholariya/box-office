import React from 'react'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (

    <Switch>
      <Route exact path="/">
        urmish
      </Route>
      <Route exact path="/one">
        rushi
      </Route>
      <Route>404 Error</Route>
    </Switch>



  );
}

export default App;
