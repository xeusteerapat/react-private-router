import React from 'react';
import configRoutes from '../../config/role';
import { Switch, Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ role }) => {
  const allowRouted = configRoutes[role].routes;
  const redirect = configRoutes[role].redirect;

  return (
    <div>
      <h1>Private route</h1>
      <Switch>
        {allowRouted.map((route) => {
          return (
            <Route
              key={route.url}
              exact
              path={route.url}
              component={route.component}
            />
          );
        })}
        <Redirect to={redirect} />
      </Switch>
    </div>
  );
};

export default PrivateRoutes;
