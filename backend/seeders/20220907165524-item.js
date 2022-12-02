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
        caminho_imagem: 'coca-cola-1l.webp',
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
        caminho_imagem: 'imagem/...',
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
        caminho_imagem: 'imagem/...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fatia Pizza Calabresa',
        descricao: 'Bastante Calabresa',
        valor: 5.50,
        quantidade: 10,
        estabelecimento_id: 1,
        tipo_item: 'Salgado',
        caminho_imagem: 'imagem/...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Croissant de Calabresa',
        descricao: 'Muito Macio e Recheado',
        valor: 4,
        quantidade: 10,
        estabelecimento_id: 2,
        tipo_item: 'Salgado',
        caminho_imagem: 'imagem/...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Salgadinho de Bacon',
        descricao: 'Feito com ingredientes de extrema qualidade',
        valor: 3,
        quantidade: 20,
        estabelecimento_id: 3,
        tipo_item: 'Salgado',
        caminho_imagem: 'imagem/...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Doce de Banana',
        descricao: 'Doce feito com Bananas da Terra',
        valor: 2,
        quantidade: 30,
        estabelecimento_id: 1,
        tipo_item: 'Doce',
        caminho_imagem: 'imagem/...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Brigadeiro com M&M',
        descricao: 'Doce feito com pó de cacau meio amargo e M&Ms',
        valor: 3,
        quantidade: 22,
        estabelecimento_id: 2,
        tipo_item: 'Doce',
        caminho_imagem: 'imagem/...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fatia de Torta de Bolacha',
        descricao: 'Torta feito com bolacha maria, chocolate branco e doce de leite',
        valor: 6,
        quantidade: 15,
        estabelecimento_id: 3,
        tipo_item: 'Doce',
        caminho_imagem: 'imagem/...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Coca Cola 1L',
        descricao: 'Bebida gaseificada',
        valor: 10,
        quantidade: 8,
        estabelecimento_id: 1,
        tipo_item: 'Bebida',
        caminho_imagem: 'imagem/...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Suco de Abacaxi com Hortelã',
        descricao: 'Suco com polpa de abacaxi e folhas de hortelã',
        valor: 7,
        quantidade: 20,
        estabelecimento_id: 2,
        tipo_item: 'Bebida',
        caminho_imagem: 'imagem/...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Limonada Suiça',
        descricao: 'Feito com limão Siciliano e Açucar do Himalaia',
        valor: 7,
        quantidade: 10,
        estabelecimento_id: 3,
        tipo_item: 'Bebida',
        caminho_imagem: 'imagem/...',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('items', null, {});
  }
};
