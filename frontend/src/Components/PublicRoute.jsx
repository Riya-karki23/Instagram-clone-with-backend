// src/components/PublicRoute.js
import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
useNavigate();
const PublicRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
            navigate ('/home')
        )
      }
    />
  );
};

export default PublicRoute;
