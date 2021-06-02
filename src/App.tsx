import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'views/Home';
import HeaderMenu from 'components/HeaderMenu';

import 'App.css';

function App(): ReactElement {
  return (
    <div className="h-screen overflow-y-auto flex flex-col bg-gray-100">
      <Router>
        <HeaderMenu />

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
