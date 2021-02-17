const db = require('../models/index')
const User = db.users // access the user model from index.js (the 'central' model)

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
