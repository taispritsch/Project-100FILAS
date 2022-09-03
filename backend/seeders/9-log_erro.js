'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('log_erros', [{
      horario: new Date(),
      acao: 'Reiniciar aplicação',
      token_id: 1,
      estabelecimento_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      horario: new Date(),
      acao: 'Fechar aplicação',
      token_id: 2,
      estabelecimento_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      horario: new Date(),
      acao: 'Desintalar aplicação',
      token_id: 3,
      estabelecimento_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('log_erros', null, {});
  }
};
