module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                username: 'Guest',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {})
    },
}
