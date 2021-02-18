import React from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const history = useHistory()

    return <div>Signin page</div>
}
