const router = require('express').Router()
const users = require('../controllers/users.controller') // user controller

module.exports = (app) => {
    router.post('/', users.create) // call the relevant users controller action

    router.get('/', users.findAll)

    app.use('/api/users', router)
}