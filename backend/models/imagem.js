const Estabelecimento = require('./estabelecimento');
const Item = require('./item');

const { Model, DataTypes } = require('sequelize');

class imagem extends Model {
  static init(sequelize) {
    super.init({
      caminho: DataTypes.STRING,
      estabelecimento_id: DataTypes.INTEGER,
      item_id: DataTypes.INTEGER
    },
      {
        sequelize
      })
  }
}

imagem.associate = function (models) {
  imagem.belongTo(Estabelecimento, { foreinKey: 'estabelecimento_id', as: 'estabelecimentos' });
  imagem.belongTo(Item, { foreinKey: 'item_id', as: 'items' });
}


module.exports = imagem;