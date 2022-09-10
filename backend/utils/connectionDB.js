const Sequelize         = require('sequelize');
const db                = require('../config/config');

const Estabelecimento   = require('../models/estabelecimento');
const Item              = require('../models/item');
const Log_acesso        = require('../models/log_acesso');
const Log_alerta        = require('../models/log_alerta');
const Log_erro          = require('../models/log_erro');
const Log_pedido        = require('../models/log_pedido');
const Pedido            = require('../models/pedido');
const Pedido_has_item   = require('../models/pedido_has_item');
const Token             = require('../models/token');


const connection = new Sequelize(db);

Estabelecimento.init(connection);
Item.init(connection);
Log_acesso.init(connection);
Log_alerta.init(connection);
Log_erro.init(connection);
Log_pedido.init(connection);
Pedido.init(connection);
Pedido_has_item.init(connection);
Token.init(connection);

module.exports = connection;


/* const db = require('../utils/connectionDB');
import Sequelize from 'sequelize';

const sequelize = new Sequelize("100filas", "postgres", "admin", {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamp: true
    }
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function(e){
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso!");
    console.log(e);
});

module.exports = sequelize; */