'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pedidos', [
      {
        observacao: 'sem tomate',
        quantidade_item: 1,
        valor_total: 5,
        item_id: 13,
        item_nome: 'Pizza',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        observacao: ' ',
        quantidade_item: 3,
        valor_total: 7.5,
        item_id: 13,
        item_nome: 'Pizza',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        observacao: 'Quero sache de maionese',
        quantidade_item: 1,
        valor_total: 7.20,
        item_id: 15,
        item_nome: 'Aaaa',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pedidos', null, {});
  }
};
