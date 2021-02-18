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

exports.create = async (req, res) => {
    const invalidCredentialsMessage = 'Invalid username or password'

    if (!AuthUtils.validUsernameAndPassword(req.body)) {
        res.status(500).send({
            message: invalidCredentialsMessage,
        })
        return
    }

    // const users = await User.findAll({
    //     where: { username: req.body.username }
    // })

    // if (users === null) {
    //     console.log('Not found!');
    // } else {
    //     res.send(users)
    //   }

    // res.send(user.id || "no user found")

    const user = {
        username: req.body.username,
        password: req.body.password,
    }

    User.create(user)
        .then((data) => res.send(data))
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'User could not be created',
            })
        })
}
