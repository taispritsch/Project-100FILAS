'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('imagems', [
      {
        caminho: 'DUSERPCTESTE1',
        estabelecimento_id: 1,
        item_id: 1,
      },
      {
        caminho: 'EUSERPCTESTE2',
        estabelecimento_id: 2,
        item_id: 2,
      },
      {
        caminho: 'CUSERPCTESTE3',
        estabelecimento_id: 3,
        item_id: 3,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('imagems', null, {});
  }
};
