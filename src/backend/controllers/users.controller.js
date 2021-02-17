const db = require('../models/index')
const User = require('../models/user.model')

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: 'Content cannot be empty',
        })
        return
    }

    const user = {
        name: req.body.name,
    }

    User.create(user)
        .then((data) => res.send(data))
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'User could not be created',
            })
        })
}
