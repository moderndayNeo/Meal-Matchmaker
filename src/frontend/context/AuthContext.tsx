import React, { createContext, useEffect, useReducer } from 'react'
import APIUtil from '../util/api.utils'
import { setAuthToken } from '../util/http-common'

export const AuthContext = createContext<any>({})
const LOCAL_STORAGE_AUTH_TOKEN = 'auth_jwt'

interface LoginProps {
    username: string
    password: string
}

interface AuthState {
    isLoggedIn: boolean
    token: string
    user: object
}

const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const initialState = {
        isLoggedIn: false,
        token: null,
        user: {},
    }

    function reducer(prevState: AuthState, action: any) {
        switch (action.type) {
            case 'RESTORE TOKEN':
                return {
                    ...prevState,
                    token: action.token,
                    user: action.user,
                }
            case 'SIGN IN':
                return {
                    ...prevState,
                    isLoggedIn: true,
                    token: action.token,
                    user: action.user,
                }
            case 'SIGN OUT':
                return {
                    ...prevState,
                    isLoggedIn: false,
                    token: null,
                    user: {},
                }
            default:
                return initialState
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)
        if (!token) {
            console.log('No token in localStorage')
            return
        }

        // if valid get back user from BE, update token in state, set token in LS.
        setAuthToken(token) // add auth token to axios header
        APIUtil.checkToken() // make a get request to see if BE verifies it
            .then((user) => {
                dispatch({ type: 'SIGN IN', user, token })
            })
            .catch((err) => console.log(err))
    }, [])

    /*
    make login page work
    login with guest account
    call the login function from the login page
    check that JWT is held in LS
    if user is logged in, we should we Welcome, Username in the navbar
    */

    const authContext = {
        signIn: async ({ username, password }: LoginProps) => {
            try {
                const response: any = await APIUtil.signInUser({
                    password,
                    username,
                })

                const { token, id } = await response.data
                setAuthToken(token)
                localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, token)
                dispatch({
                    type: 'SIGN IN',
                    token,
                    user: { username, id },
                })
                console.log('login successful')
            } catch (err) {
                console.log('Login attempt failed', { err })
            }
        },
        signOut: () => {
            setAuthToken(null)
            localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN)
            dispatch({ type: 'SIGN OUT' })
        },
        user: state.user,
        isLoggedIn: state.isLoggedIn,
    }

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )
}

export default Auth

// imports
// declare constants
// delcare and extend interfaces

// const Auth = ( {children} ) => {

//     define reducer
//     define useEffect to run on every render

//     define authContext = {
//         signIn: (email, password) => {
//             POST details to BE, get JWT
//             dispatch new details to reducer
//         },
//         signOut: () => {
//             remove JWT from browser localStorage
//             dispatch SIGN OUT action
//         },
//         user: state.user
//     }

//     return (
//         <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
//       )
// }
