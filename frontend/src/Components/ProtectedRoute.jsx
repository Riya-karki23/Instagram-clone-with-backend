// src/components/ProtectedRoute.js
import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();
  const navigate=useNavigate();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          navigate ('/login')
        )
      }
    />
  );
};

export default ProtectedRoute;
