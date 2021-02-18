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

exports.create = async (req, res) => {
    const invalidCredentialsMessage = 'Invalid username or password'

    if (!AuthUtils.validUsernameAndPassword(req.body)) {
        res.status(500).send({
            message: invalidCredentialsMessage,
        })
        return
    }

    const { username, password } = req.body
    // hash the password
    // create user with the username and hashed password (passwordDigest)

    User.create({ username, password })
        .then((data) => res.send(data))
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'User could not be created',
            })
        })
}

exports.destroy = (req, res) => {
    User.destroy({
        where: {
            id: req.params.id,
        },
    }).then(() => {
        // sequelize does not return anything from the .destroy() action
        res.status(200).send({
            message: `User successfully deleted`,
        })
    })
}

exports.update = (req, res) => {
    // User.update({ user: req.body }, { where: { id: req.params.id } })
    //     .then(() => {
    //         res.status(200).send({
    //             message: `User successfully updated`,
    //         })
    //     })
    //     .catch((err) => {
    //         res.status(500).send({
    //             message:
    //                 err.message ||
    //                 `Could not update user with id: ${req.params.id}`,
    //         })
    //     })
    res.send('User update action')
}
