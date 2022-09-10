const Pedido_has_item = require('../models/pedido_has_item');

module.exports = {
    //INSERIR PEDIDO HAS ITEM
    async inserirPedido_has_item(req, res) {

        try {
            const { pedido_id, item_id } = req.body

            const pedido_has_item = await Pedido_has_item.create({ pedido_id, item_id });

            res.status(200).json({ pedido_has_item });
        }
        catch (error) {
            res.status(400).json({ error });
        }

    },
    //ATUALIZAR PEDIDO HAS ITEM
    async atualizarPedido_has_item(req, res) {

        try {
            const { id } = req.params
            const { pedido_id, item_id } = req.body
            const pedido_has_item = await Pedido_has_item.findOne({ where: { id } })

            if (!pedido_has_item) {
                res.status(401).json({ message: "Nenhum pedido_has_item encontrado." });
            }
            else {
                const pedido_has_item = await Pedido_has_item.update({ pedido_id, item_id }, { where: { id } })

                res.status(200).json({ pedido_has_item });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR UM PEDIDO HAS ITEM
    async listarPedido_has_item(req, res) {
        try {
            const { id } = req.params
            const pedido_has_item = await Pedido_has_item.findOne({ where: { id } })

            if (!pedido_has_item) {
                res.status(401).json({ message: "Pedido_has_item não encontrado." });
            }
            else {
                res.status(200).json({ pedido_has_item });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR TODOS OS PEDIDO HAS ITEM
    async listarPedido_has_itens(req, res) {
        try {
            const pedido_has_itens = await Pedido_has_item.findAll()

            if (!pedido_has_itens) {
                res.status(401).json({ message: "Não existe pedido_has_itens cadastrados." });
            }
            else {
                res.status(200).json({ pedido_has_itens });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //DELETAR PEDIDO HAS ITEM
    async deletarPedido_has_item(req, res) {

        try {
            const { id } = req.params

            const pedido_has_item = await Pedido_has_item.findOne({ where: { id } })

            if (!pedido_has_item) {
                res.status(401).json({ message: "Pedido_has_item não encontrado." });
            }
            else {
                await Pedido_has_item.destroy({ where: { id } })

                res.status(200).json({ ok: true });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    }
}