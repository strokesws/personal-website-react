import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'views/Home';
import HeaderMenu from 'components/HeaderMenu';

function App(): ReactElement {
  return (
    <>
      <HeaderMenu />

      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
