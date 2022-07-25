import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getCurrentUserFromLocalStorage } from '../../services/authService';

export default function ProtectedRoute({
  routePath,
  component: Component,
  render,
  ...rest
}) {
  return (
    <Route
      path={routePath}
      {...rest}
      render={(props) => {
        if (!getCurrentUserFromLocalStorage()) {
          alert(
            'Please login/register before CREATE, UPDATE and DELETE content'
          );
          return <Redirect to='/login' />;
        } else {
          return Component ? <Component {...props} /> : render(props);
        }
      }}
    />
  );
}
