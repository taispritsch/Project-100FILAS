const Pedido = require('../models/pedido');

module.exports = {
    //INSERIR PEDIDO
    async inserirPedido(req, res) {

        try {
            const { nome, observacao, quantidade_item, valor_total, item_id, nome_cliente } = req.body

            const pedido = await Pedido.create({ nome, observacao, quantidade_item, valor_total, item_id,nome_cliente });

            res.status(200).json({ pedido });
        }
        catch (error) {
            res.status(400).json({ error });
        }

    },
    //ATUALIZAR PEDIDO
    async atualizarPedido(req, res) {

        try {
            const { id } = req.params
            const { nome, observacao, quantidade_item, valor_total, item_id,nome_cliente } = req.body
            const pedido = await Pedido.findOne({ where: { id } })

            if (!pedido) {
                res.status(401).json({ message: "Nenhum pedido encontrado." });
            }
            else {
                const pedido = await Pedido.update({ nome, observacao, quantidade_item, valor_total, item_id,nome_cliente }, { where: { id } })

                res.status(200).json({ pedido });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR PEDIDO
    async listarPedido(req, res) {
        try {
            const { id } = req.params
            const pedido = await Pedido.findOne({ where: { id } })

            if (!pedido) {
                res.status(401).json({ message: "Pedido não encontrado." });
            }
            else {
                res.status(200).json({ pedido });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR TODOS OS PEDIDOS
    async listarPedidos(req, res) {
        try {
            const pedidos = await Pedido.findAll()

            if (!pedidos) {
                res.status(401).json({ message: "Não existe pedidos cadastrados." });
            }
            else {
                res.status(200).json({ pedidos });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //DELETAR PEDIDO
    async deletarPedido(req, res) {

        try {
            const { id } = req.params

            const pedido = await Pedido.findOne({ where: { id } })

            if (!pedido) {
                res.status(401).json({ message: "Pedido não encontrado." });
            }
            else {
                await Pedido.destroy({ where: { id } })

                res.status(200).json({ ok: true });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    }
}