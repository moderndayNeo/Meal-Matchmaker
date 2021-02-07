const router = require('express').Router()
// const user = require('') // user controller

module.exports = (app) => {
    router.post('/', (req, res) => {
        res.json({ action: 'creating user' })
    })

    router.get('/', (req, res) => {
        res.json({ page: 'user' })
    })

    app.use('/api/users', router)
}
