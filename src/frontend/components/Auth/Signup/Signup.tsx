import React from 'react'
import './Signup.css'
import AuthPage from '../AuthPage'
import SignupForm from './SignupForm'

export default function Signup() {
    return (
        <AuthPage title="Create your account" alternate="login">
            <SignupForm />
        </AuthPage>
    )
}
