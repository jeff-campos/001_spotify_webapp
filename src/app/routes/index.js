import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Album from '../pages/Album';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} isPrivate />
      <Route path="/album/:id" component={Album} isPrivate />
    </Switch>
  );
}
