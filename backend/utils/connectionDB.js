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