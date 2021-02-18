import http from './http-common'

const getUsers = () => http.get('/users')

const createUser = (user) => http.post('/users', user)

export default {
    getUsers,
    createUser,
}
