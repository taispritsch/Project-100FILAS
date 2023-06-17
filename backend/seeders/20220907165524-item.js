'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items', [
      {
        nome: 'Coca-cola',
        descricao: 'Bebida gelada',
        valor: 8,
        quantidade: 10,
        estabelecimento_id: 1,
        tipo_item: 'Bebida',
        caminho_imagem: 'est_1/coca-cola-1l.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Doce de Banana',
        descricao: 'Super saborosa',
        valor: 3,
        quantidade: 30,
        estabelecimento_id: 1,
        tipo_item: 'Doce',
        caminho_imagem: 'est_1/doce-de-banana.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pão de queijo',
        descricao: 'Macio e com bastante queijo',
        valor: 4,
        quantidade: 15,
        estabelecimento_id: 1,
        tipo_item: 'Salgado',
        caminho_imagem: 'est_1/pao-queijo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pastel de Frango',
        descricao: 'Pastel de Frango com bastante requeijão',
        valor: 7,
        quantidade: 15,
        estabelecimento_id: 1,
        tipo_item: 'Salgado',
        caminho_imagem: 'est_1/pastel.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fatia de Pizza Calabresa',
        descricao: 'Cada fatia de pizza por um preço camarada',
        valor: 7.5,
        quantidade: 10,
        estabelecimento_id: 1,
        tipo_item: 'Salgado',
        caminho_imagem: 'est_1/pizza-calabresa-fatia.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Docinho de MM's",
        descricao: "Docinho sabor brigadeiro com mm's",
        valor: 2.75,
        quantidade: 10,
        estabelecimento_id: 2,
        tipo_item: 'Doce',
        caminho_imagem: 'est_2/brigadeiro-com-mem.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Croassaint",
        descricao: "Croassaint de massa folhada salgado",
        valor: 3.25,
        quantidade: 10,
        estabelecimento_id: 2,
        tipo_item: 'Salgado',
        caminho_imagem: 'est_2/croassaint.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Suco de abacaxi",
        descricao: "Suco fresquinho feito na hora",
        valor: 5,
        quantidade: 5,
        estabelecimento_id: 2,
        tipo_item: 'Bebida',
        caminho_imagem: 'est_2/suco-de-abacaxi.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Suco de Limão",
        descricao: "Suco fresquinho feito na hora",
        valor: 5,
        quantidade: 5,
        estabelecimento_id: 3,
        tipo_item: 'Bebida',
        caminho_imagem: 'est_3/limonada.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Salgadinho",
        descricao: "Salgadinho sabor bacon",
        valor: 6.75,
        quantidade: 10,
        estabelecimento_id: 3,
        tipo_item: 'Salgado',
        caminho_imagem: 'est_3/salgadinho-de-bacon.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Torta de bolacha",
        descricao: "Torta de bolacha com cobertura de ganache",
        valor: 4.25,
        quantidade: 15,
        estabelecimento_id: 3,
        tipo_item: 'Doce',
        caminho_imagem: 'est_3/torta-de-bolacha.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('items', null, {});
  }
};
