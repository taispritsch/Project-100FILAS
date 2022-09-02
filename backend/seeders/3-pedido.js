'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pedidos', [
      {
        observacao: 'sem tomate',
        item_id: 1,
        item_nome: 'Sanduíche',
        quantidade_item: 1,
        valor_total: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        observacao: '',
        item_id: 2,
        item_nome: 'Pão de Queijo',
        quantidade_item: 3,
        valor_total: 7.5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        observacao: 'Quero sache de maionese',
        item_id: 3,
        item_nome: 'Pastel de Frango',
        quantidade_item: '1',
        valor_total: 7.20,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pedidos', null, {});
  }
};
