import React, { createContext, useEffect, useReducer } from 'react'
import APIUtil from '../util/api.utils'
import { setAuthToken } from '../util/http-common'

const AuthContext = createContext<any>({})
const LOCAL_STORAGE_AUTH_TOKEN = 'auth_jwt'

interface LoginProps {
    username: string
    password: string
}

export const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const initialState = {
        isLoggedIn: false,
        token: null,
        user: {},
    }

    interface AuthState {
        isLoggedIn: boolean
        token: string
        user: object
    }

    function reducer(state: AuthState, action: any) {
        switch (action.type) {
            case 'SIGN IN':
                return {
                    isLoggedIn: true,
                    token: action.token,
                    user: action.user,
                }
            case 'SIGN OUT':
                return {
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
        // check for JWT in browser localStorage
        // if JWT found, attach it to axios Authorization header
        // if no JWT,

        return () => {
            // cleanup
        }
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
