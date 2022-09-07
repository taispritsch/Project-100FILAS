'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('log_acessos', [
      {
        local_acessado: 'Prédio 9',
        horario: new Date(),
        acao: 'comprar',
        token_id: 1,
        estabelecimento_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        local_acessado: 'Prédio 12',
        horario: new Date(),
        acao: 'visualizar cardápio',
        token_id: 2,
        estabelecimento_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        local_acessado: 'Prédio 9',
        horario: new Date(),
        acao: 'comprar',
        token_id: 3,
        estabelecimento_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('log_acessos', null, {});
  }
};
