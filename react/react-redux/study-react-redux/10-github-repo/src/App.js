import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import User from './containers/User';
import Nav from './containers/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (<Redirect to="/user/apple" />)}
          />
          <Route
            path="/user/:id"
            render={({ match }) => <User user={match.params.id} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
