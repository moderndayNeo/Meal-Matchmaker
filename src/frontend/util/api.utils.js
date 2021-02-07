import http from './http-common'

const getUsers = () => http.get('/users')

const createUser = () => http.post('/users')

export default {
    getUsers,
    createUser
}