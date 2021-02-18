const router = require('express').Router()
const users = require('../controllers/users.controller')

module.exports = (app) => {
    router.post('/', users.create)

    router.get('/', users.findAll)

    router.delete('/:id', users.destroy)

    router.put('/:id', users.update)

    app.use('/api/users', router)
}
