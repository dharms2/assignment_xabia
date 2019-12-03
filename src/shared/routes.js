import React from 'react';
import { Switch, Route } from 'react-router-dom'
import App from '../components/app';
import Login from '../components/login/login';
import ErrorComponent from '../components/sorryPages/404_page';

const Routes = () => (
  <div>
    <main>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={App} />
        <Route exact path="/dashboard" component={App} />
        <Route exact path="/error" component={ErrorComponent} />
        <Route path="*" component={ErrorComponent} />
      </Switch>
    </main>
  </div>
);

export default Routes;
