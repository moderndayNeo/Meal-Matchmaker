const router = require('express').Router()
const users = require('../controllers/users.controller')
const passport = require('passport')

module.exports = (app) => {
    router.post('/', users.register)
    router.post('/login', users.login)

    router.get(
        '/current',
        passport.authenticate('jwt', { session: false }),
        users.current
    )

    router.get('/:id', users.findById)
    router.get('/', users.findAll)

    router.delete('/:id', users.destroy)

    router.put('/:id', users.update)

    app.use('/api/users', router)
}
