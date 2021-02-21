import http from './http-common'

interface User {
    username: string
    password: string
}

const getUsers = () => http.get('/users')

const createUser = (user: User) => http.post('/users', user)

const signInUser = (user: User) => http.post('/login', user)

const checkToken = () => http.get('/current')

export default {
    getUsers,
    createUser,
    signInUser,
    checkToken,
}
