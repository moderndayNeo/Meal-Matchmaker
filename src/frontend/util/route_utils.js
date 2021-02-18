import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const ProtectedRoute = ({
    exact,
    path,
    loggedIn,
    component: Component,
}) => (
    <Route
        path={path}
        exact={exact}
        render={(props) =>
            loggedIn ? (
                <Component {...props} />
            ) : (
                // Redirect to the login page if the user is already authenticated
                <Redirect to="/" />
            )
        }
    />
)

/*
// Passed in from parent component or from mapStateToProps
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        // Redirect to the tweets page if the user is authenticated
      <Redirect to="/tweets" />
    )
  )} />
);
*/
