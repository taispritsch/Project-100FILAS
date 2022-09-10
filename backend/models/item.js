const Estabelecimento = require('./estabelecimento');

const { Model, DataTypes } = require('sequelize');

class item extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING,
      valor: DataTypes.DOUBLE,
      quantidade: DataTypes.INTEGER,
      estabelecimento_id: DataTypes.INTEGER
    },
      {
        sequelize
      })
  }
}

item.associate = function (models) {
  item.belongTo(Estabelecimento, { foreinKey: 'estabelecimento_id', as: 'estabelecimentos' });
}

module.exports = item;
