'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items', [
      {
        nome: 'Sanduíche',
        descricao: 'Sanduiche de frango, com tomate e alface',
        valor: 5,
        quantidade: 10,
        estabelecimento_id: 1,
        tipo_item: 'Salgado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pão de Queijo',
        descricao: 'Muito mais queijo',
        valor: 2.50,
        quantidade: 15,
        estabelecimento_id: 1,
        tipo_item: 'Bebida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pastel de Frango',
        descricao: 'Pastel de Frango a milanesa com catupiry',
        valor: 7.20,
        quantidade: 5,
        estabelecimento_id: 1,
        tipo_item: 'Doce',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('items', null, {});
  }
};
