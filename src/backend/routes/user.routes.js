const { default: userEvent } = require('@testing-library/user-event')

const router = require('express').Router()
// const user = require('') // user controller

module.exports = (app) => {
    // router.post('/', user.create)
    router.get('/', (req, res) => {
        res.json({ page: 'user' })
    })

    app.use('/api/users', router)
}
