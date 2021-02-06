import http from './http-common'

const getUsers = () => http.get('/users')

export default {
    getUsers
}