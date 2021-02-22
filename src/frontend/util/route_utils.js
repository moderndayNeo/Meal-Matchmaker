import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from '../contexts/Auth/AuthContext'

export const ProtectedRoute = ({ exact, path, component: Component }) => {
    const { isLoggedIn } = React.useContext(AuthContext)

    return (
        <Route
            path={path}
            exact={exact}
            render={(props) =>
                isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    )
}

export const AuthRoute = ({ exact, path, component: Component }) => {
    const { isLoggedIn } = React.useContext(AuthContext)

    return (
        <Route
            path={path}
            exact={exact}
            render={(props) =>
                isLoggedIn ? <Redirect to="/recipe-generator" /> : <Component {...props} />
            }
        />
    )
}
