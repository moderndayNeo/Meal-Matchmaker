module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        name: Sequelize.STRING,
    })

    return User
}