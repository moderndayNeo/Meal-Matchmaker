import React from 'react'
import './Signin.css'
import { useHistory } from 'react-router-dom'

export default function Signin() {
    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const history = useHistory()

    return <div>Signin page</div>
}
