'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tokens', [{
      localizacao: 'Prédio 3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      localizacao: 'Prédio 12',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      localizacao: 'Prédio 16',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tokens', null, {});
  }
};
