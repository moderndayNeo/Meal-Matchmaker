import React, { createContext, useEffect, useReducer } from 'react'

const AuthContext = createContext<any>({})

interface LoginProps {
    username: string
    password: string
}

export const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const initialState = { isLoggedIn: false, token: null, user: null }

    function reducer(state: any, action: any) {
        switch (action.type) {
            case 'SIGN IN':
                return {
                    isLoggedIn: true,
                    token: action.token,
                    user: action.user,
                }
            case 'SIGN OUT':
                return { isLoggedIn: false, token: null, user: null }
            default:
                return initialState
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        // check for JWT
        return () => {
            // cleanup
        }
    }, [])

    const authContext = {
        signIn: ({ username, password }: LoginProps) => {
            // attempt to login user on BE
            // if successful, set JWT in LS
            dispatch({
                type: 'SIGN IN',
                token: '1234',
                user: { username: 'Guest', password: 'GuestAccount' },
            })
        },
        signOut: () => {
            // sign out user
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
