const User = require('../models').User
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const validateLoginInput = require('../validation/login')
const validateRegisterInput = require('../validation/register')
// const passport = require('passport')

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

exports.current = (req, res) => {
    res.json("Success")
    // res.json({
    //     id: req.user.id,
    //     handle: req.user.handle,
    //     email: req.user.email,
    // })
}

exports.register = (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body)
    if (!isValid) return res.status(400).json(errors)

    let { username, password } = req.body
    User.findOne({ where: { username } }).then((user) => {
        if (user) {
            errors.username = 'Username is already taken'
            return res.status(400).json(errors)
        }

        const newUser = new User({ username, password })
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                newUser.passwordDigest = hash
                newUser
                    .save()
                    .then((user) => {
                        const payload = {
                            id: newUser.id,
                            password: newUser.passwordDigest,
                        }

                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token,
                                })
                            }
                        )
                    })
                    .catch((err) => console.log(err))
            })
        })
    })
}

exports.login = (req, res) => {
    let { username, password } = req.body
    const { errors, isValid } = validateLoginInput(req.body)
    if (!isValid) return res.status(400).json(errors)

    User.findOne({ where: { username } }).then((user) => {
        if (!user) {
            errors.name = 'This user does not exist'
            return res.status(400).json(errors)
        }

        bcrypt.compare(password, user.passwordDigest).then((isMatch) => {
            if (isMatch) {
                const payload = { id: user.id, username: user.username }

                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                        res.json({ success: true, token: 'Bearer ' + token })
                    }
                )
            } else {
                errors.password = 'Incorrect password'
                return res.status(400).json(errors)
            }
        })
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
