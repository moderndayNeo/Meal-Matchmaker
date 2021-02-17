const { Sequelize } = require('sequelize/types')

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        username: Sequelize.STRING,
    })

    return User
}

// module.exports = (sequelize, Sequelize) => {
//     const Language = sequelize.define('language', {
//         name: Sequelize.STRING,
//         year_created: {
//             type: Sequelize.INTEGER,
//         },
//         creator: {
//             type: Sequelize.STRING,
//         },
//         extension: {
//             type: Sequelize.STRING,
//         },
//     })

//     return Language
// }
