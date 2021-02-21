import React, { createContext, useEffect, useReducer } from 'react'
import APIUtil from '../util/api.utils'
import { setAuthToken } from '../util/http-common'

const AuthContext = createContext<any>({})
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

    const authContext = {
        signIn: async ({ username, password }: LoginProps) => {
            const response: any = await APIUtil.signInUser({
                username,
                password,
            })

            if (response.success) {
                setAuthToken(response.token)
                localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, response.token)
                dispatch({
                    type: 'SIGN IN',
                    token: response.token,
                    user: { username },
                })
            } else {
                setAuthToken(null)
                localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN)
                dispatch({ type: 'SIGN OUT' }) // do we want to sign out the user here?
            }
        },
        signOut: () => {
            setAuthToken(null)
            localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN)
            dispatch({ type: 'SIGN OUT' })
        },
        user: state.user,
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
