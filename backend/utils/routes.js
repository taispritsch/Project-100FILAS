const {Router}                  = require('express');

const estabelecimentoController = require('../controllers/estabelecimentoController');
const itemController            = require ('../controllers/itemController');
const log_acessoController      = require('../controllers/log_acessoController');
const log_alertaController      = require('../controllers/log_alertaController');
const log_erroController        = require('../controllers/log_erroController');
const log_pedidoController      = require('../controllers/log_pedidoController');
const pedido_has_itemController = require('../controllers/pedido_has_itemController');
const pedidoController          = require('../controllers/pedidoController');
const tokenController           = require('../controllers/tokenController');
const imagemController          = require('../controllers/imagemController');


const router                    = Router();


// ESTABELECIMENTO
router.post('/inserirEstabelecimento', estabelecimentoController.inserirEstabelecimento)
router.put('/atualizarEstabelecimento/:id', estabelecimentoController.atualizarEstabelecimento)
router.get('/listarEstabelecimentos', estabelecimentoController.listarEstabelecimentos)
router.get('/listarEstabelecimento/:id', estabelecimentoController.listarEstabelecimento)
router.delete('/deletarEstabelecimento/:id', estabelecimentoController.deletarEstabelecimento)
// FIM ESTABELECIMENTO


// ITEM
router.post('/inserirItem', itemController.inserirItem)
router.put('/atualizarItem/:id', itemController.atualizarItem)
router.get('/listarItens', itemController.listarItens)
router.get('/listarItem/:id', itemController.listarItem)
router.get('/listarItensPorEstabelecimento/:estabelecimento_id', itemController.listarItensPorEstabelecimento)
router.delete('/deletarItem/:id', itemController.deletarItem)
// FIM ITEM


// TOKEN
router.post('/inserirToken', tokenController.inserirToken)
router.put('/atualizarToken/:id', tokenController.atualizarToken)
router.get('/listarTokens', tokenController.listarTokens)
router.get('/listarToken/:id', tokenController.listarToken)
router.delete('/deletarToken/:id', tokenController.deletarToken)
// FIM TOKEN


// PEDIDO
router.post('/inserirPedido', pedidoController.inserirPedido)
router.put('/atualizarPedido/:id', pedidoController.atualizarPedido)
router.get('/listarPedidos', pedidoController.listarPedidos)
router.get('/listarPedido/:id', pedidoController.listarPedido)
router.get('/listarPedidosPorEstabelecimento/:estabelecimento_id', pedidoController.listarPedidosPorEstabelecimento)
router.delete('/deletarPedido/:id', pedidoController.deletarPedido)
// FIM PEDIDO


// PEDIDO HAS ITEM
router.post('/inserirPedido_has_item', pedido_has_itemController.inserirPedido_has_item)
router.put('/atualizarPedido_has_item/:id', pedido_has_itemController.atualizarPedido_has_item)
router.get('/listarPedido_has_itens', pedido_has_itemController.listarPedido_has_itens)
router.get('/listarPedido_has_item/:id', pedido_has_itemController.listarPedido_has_item)
router.delete('/deletarPedido_has_item/:id', pedido_has_itemController.deletarPedido_has_item)
// FIM PEDIDO HAS ITEM


// LOG ACESSO
router.post('/inserirLog_acesso', log_acessoController.inserirLog_acesso)
router.put('/atualizarLog_acesso/:id', log_acessoController.atualizarLog_acesso)
router.get('/listarLog_acessos', log_acessoController.listarLog_acessos)
router.get('/listarLog_acesso/:id', log_acessoController.listarLog_acesso)
router.delete('/deletarLog_acesso/:id', log_acessoController.deletarLog_acesso)
// FIM LOG ACESSO


// LOG PEDIDO
router.post('/inserirLog_pedido', log_pedidoController.inserirLog_pedido)
router.put('/atualizarLog_pedido/:id', log_pedidoController.atualizarLog_pedido)
router.get('/listarLog_pedidos', log_pedidoController.listarLog_pedidos)
router.get('/listarLog_pedido/:id', log_pedidoController.listarLog_pedido)
router.delete('/deletarLog_pedido/:id', log_pedidoController.deletarLog_pedido)
// FIM LOG PEDIDO


// LOG ALERTA
router.post('/inserirLog_alerta', log_alertaController.inserirLog_alerta)
router.put('/atualizarLog_alerta/:id', log_alertaController.atualizarLog_alerta)
router.get('/listarLog_alertas', log_alertaController.listarLog_alertas)
router.get('/listarLog_alerta/:id', log_alertaController.listarLog_alerta)
router.delete('/deletarLog_alerta/:id', log_alertaController.deletarLog_alerta)
// FIM LOG ALERTA


// LOG ERRO
router.post('/inserirLog_erro', log_erroController.inserirLog_erro)
router.put('/atualizarLog_erro/:id', log_erroController.atualizarLog_erro)
router.get('/listarLog_erros', log_erroController.listarLog_erros)
router.get('/listarLog_erro/:id', log_erroController.listarLog_erro)
router.delete('/deletarLog_erro/:id', log_erroController.deletarLog_erro)
// FIM LOG ERRO

// IMAGEM
router.post('/inserirImagem', imagemController.inserirImagem)
router.put('/atualizarImagem/:id', imagemController.atualizarImagem)
router.get('/listarImagem/:id', imagemController.listarImagem)
router.delete('/deletarImagem/:id', imagemController.deletarImagem)
// FIM IMAGEM


module.exports = router;
