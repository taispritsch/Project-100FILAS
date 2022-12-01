'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('estabelecimentos', [{
      nome: 'John Doe',
      senha: '21232f297a57a5a743894a0e4a801fc3',
      descricao: 'John Doe without a name',
      email: 'john@doe.com.br',
      telefone: '51-9999-0000',
      cnpj: '95.435.669/0001-12',
      hora_abrir: new Date(),
      hora_fechar: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Larry Shoes',
      senha: '21232f297a57a5a743894a0e4a801fc3',
      descricao: 'Larry Shoes without a name',
      email: 'larry@shoes.com.br',
      telefone: '51-9874-5400',
      cnpj: '18.832.921/0001-86',
      hora_abrir: new Date(),
      hora_fechar: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Jennyfer String',
      senha: '21232f297a57a5a743894a0e4a801fc3',
      descricao: 'Jennyfer String without a name',
      email: 'janny@String.com.br',
      telefone: '54-1878-9978',
      cnpj: '39.557.847/0001-77',
      hora_abrir: new Date(),
      hora_fechar: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('estabelecimentos', null, {});
  }
};
