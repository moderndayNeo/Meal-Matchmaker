import React, { useEffect, useReducer } from 'react'
import AuthContext from './AuthContext'
import APIUtil from '../../util/api.utils'
import { setAxiosAuthHeader } from '../../util/http-common'
import jwt_decode, { JwtPayload } from 'jwt-decode'
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
        if (!token) return console.log('No token in localStorage')

        const decodedUser: any = jwt_decode<JwtPayload>(token)
        if (decodedUser) {
            dispatch({
                type: 'SIGN IN',
                user: { id: decodedUser.id, username: decodedUser.username },
                token,
            })
        } else {
            console.log('code expired')
        }

        // setAxiosAuthHeader(token)
        // APIUtil.checkToken()
        //     .then((user) => {
        //         dispatch({ type: 'SIGN IN', user, token })
        //     })
        //     .catch((err) => console.log(err))
    }, [])

    const extractData = (response: any) => ({
        user: response.data.user,
        token: response.data.token,
    })

    const authContext = {
        signIn: async ({ username, password }: LoginProps) => {
            if (!username || !password) return

            try {
                const { token, user } = await APIUtil.signInUser({
                    username,
                    password,
                }).then(extractData)

                setAxiosAuthHeader(token)
                localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, token)
                dispatch({
                    type: 'SIGN IN',
                    token,
                    user,
                })
                console.log('login successful')
            } catch (err) {
                console.log('Login attempt failed', { err })
            }
        },
        signOut: () => {
            setAxiosAuthHeader(null)
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
