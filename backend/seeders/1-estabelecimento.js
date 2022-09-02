'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('estabelecimentos', [{
      nome: 'John Doe',
      senha: '123',
      descricao: 'John Doe without a name',
      email: 'john@doe.com.br',
      telefone: '51-9999-0000',
      cnpj: '95.435.669/0001-12',
      hora_abrir: new Date(),
      hora_fechar: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('estabelecimentos', null, {});
  }
};
