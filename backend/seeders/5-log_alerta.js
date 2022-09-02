'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('log_alertas', [
      {
        local_acessado: 'Predio 9',
        horario: new Date(),
        acao: 'Tela de acesso',
        mensagem_aviso: 'CPF inválido',
        //token_id: '1',
        estabelecimento_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        local_acessado: 'Predio 11',
        horario: new Date(),
        acao: 'Tela de Pagamento',
        mensagem_aviso: 'Senha inválida',
        //token_id: '1',
        estabelecimento_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        local_acessado: 'Predio 9',
        horario: new Date(),
        acao: 'Tela de Finalização',
        mensagem_aviso: 'Pedido não realizado',
        //token_id: '1',
        estabelecimento_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('log_alertas', null, {});
  }
};
