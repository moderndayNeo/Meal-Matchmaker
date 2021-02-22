import React from 'react'
import './Login.css'
import UIContext from '../../../contexts/UI/UIContext'
import AuthPage from '../AuthPage'
import LoginForm from './LoginForm'

export default function Login() {
    const { setSignInModal } = React.useContext(UIContext)
    React.useEffect(() => setSignInModal(false))

    return (
        <AuthPage title={'Sign In to your account'} alternate={'signup'}>
            <LoginForm />
        </AuthPage>
    )
}
