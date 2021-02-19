const AuthUtils = require('../util/auth_utils')
const User = require('../models').User
const bcrypt = require('bcryptjs')

exports.findAll = (req, res) => {
    res.send(req)

    User.findAll()
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(404).send({
                message: err.message || `No users found`,
            })
        })
}

exports.register = (req, res) => {
    // if (!AuthUtils.validUsernameAndPassword(req.body)) {
    //     res.status(500).send({
    //         message: invalidCredentialsMessage,
    //     })
    //     return
    // }

    let { username, password } = req.body

    User.findOne({ where: { username } }).then((user) => {
        if (user) {
            return res.status(400).json({
                username: 'A user has already registered with this username',
            })
        } else {
            const newUser = new User({ username, password })

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) throw err
                    newUser.passwordDigest = hash
                    newUser
                        .save()
                        .then((user) => res.json(user))
                        .catch((err) => console.log(err))
                })
            })
        }
    })
}

exports.login = (req, res) => {
    let { username, password } = req.body

    User.findOne({ where: { username } }).then((user) => {
        if (user) {
            bcrypt.compare(password, user.passwordDigest).then((isMatch) => {
                if (isMatch) {
                    res.json({ message: 'Success' })
                    // login user
                } else {
                    return res.status(400).json({
                        message: 'Incorrect password',
                    })
                }
            })
        } else {
            res.status(404).send({
                message: `User with username ${username} not found`,
            })
        }
    })
}

exports.findById = (req, res) => {
    User.findByPk(req.params.id).then((user) => {
        if (!user) {
            res.status(404).send({
                message: 'User not found',
            })
            return
        }

        res.send(user)
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
