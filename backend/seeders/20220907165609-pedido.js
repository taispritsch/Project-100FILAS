'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pedidos', [
      {
        observacao: 'sem tomate',
        quantidade_item: 1,
        valor_total: 5,
        item_id: 1,
        nome_cliente: 'Henrique',
        numero_pedido: 1,
        estabelecimento_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        observacao: ' ',
        quantidade_item: 3,
        valor_total: 7.5,
        item_id: 1,
        nome_cliente: 'Caron',
        numero_pedido: 2,
        estabelecimento_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        observacao: 'Sem molhos',
        quantidade_item: 2,
        valor_total: 10,
        item_id: 1,
        nome_cliente: 'Caron',
        numero_pedido: 2,
        estabelecimento_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        observacao: 'Quero sache de maionese',
        quantidade_item: 1,
        valor_total: 7.20,
        item_id: 1,
        nome_cliente: 'Henrique Caron',
        numero_pedido: 3,
        estabelecimento_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        observacao: 'Com molho extra',
        quantidade_item: 2,
        valor_total: 15,
        item_id: 2,
        nome_cliente: 'Caron',
        numero_pedido: 4,
        estabelecimento_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        observacao: 'Sem Alface',
        quantidade_item: 4,
        valor_total: 12,
        item_id: 3,
        nome_cliente: 'Caron',
        numero_pedido: 4,
        estabelecimento_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        observacao: ' ',
        quantidade_item: 1,
        valor_total: 12.5,
        item_id: 3,
        nome_cliente: 'Gabrielli',
        numero_pedido: 5,
        estabelecimento_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        observacao: 'Favor levar guardanapos extra',
        quantidade_item: 3,
        valor_total: 14,
        item_id: 2,
        nome_cliente: 'Gabrielli',
        numero_pedido: 5,
        estabelecimento_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        observacao: 'Favore retirar celoba',
        quantidade_item: 5,
        valor_total: 25,
        item_id: 1,
        nome_cliente: 'Pedro',
        numero_pedido: 6,
        estabelecimento_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pedidos', null, {});
  }
};
