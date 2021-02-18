// import validUsernameAndPassword from '../util/auth_utils'
const AuthUtils = require('../util/auth_utils')
const User = require('../models').User

exports.findAll = (req, res) => {
    User.findAll()
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(404).send({
                message: err.message || `No users found`,
            })
        })
}

exports.create = (req, res) => {
    const invalidCredentialsMessage = 'Invalid username or password'

    if (!AuthUtils.validUsernameAndPassword(req.body)) {
        res.status(500).send({
            message: invalidCredentialsMessage,
        })
        return
    }

    const user = User.findOne({
        where: { username: req.body.username }
    })

    res.send(user || "no user found")

    // if (!req.body.username) {
    //     res.status(400).send({
    //         message: 'Must provide a username',
    //     })
    //     return
    // }

    // const user = {
    //     username: req.body.username,
    // }

    // User.create(user)
    //     .then((data) => res.send(data))
    //     .catch((error) => {
    //         res.status(500).send({
    //             message: error.message || 'User could not be created',
    //         })
    //     })
}
