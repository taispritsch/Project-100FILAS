const Log_pedido = require('../models/log_pedido');

module.exports = {
    //INSERIR LOG PEDIDO
    async inserirLog_pedido(req, res) {

        try {
            const { pedido_id, token_id } = req.body

            const log_pedido = await Log_pedido.create({ pedido_id, token_id });

            res.status(200).json({ log_pedido });
        }
        catch (error) {
            res.status(400).json({ error });
        }

    },
    //ATUALIZAR LOG PEDIDO
    async atualizarLog_pedido(req, res) {

        try {
            const { id } = req.params
            const { pedido_id, token_id } = req.body
            const log_pedido = await Log_pedido.findOne({ where: { id } })

            if (!log_pedido) {
                res.status(401).json({ message: "Nenhum log_pedido encontrado." });
            }
            else {
                const log_pedido = await Log_pedido.update({ pedido_id, token_id }, { where: { id } })

                res.status(200).json({ log_pedido });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR UM LOG PEDIDO
    async listarLog_pedido(req, res) {
        try {
            const { id } = req.params
            const log_pedido = await Log_pedido.findOne({ where: { id } })

            if (!log_pedido) {
                res.status(401).json({ message: "Log_pedido não encontrado." });
            }
            else {
                res.status(200).json({ log_pedido });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR TODOS OS LOG PEDIDO
    async listarLog_pedidos(req, res) {
        try {
            const log_pedidos = await Log_pedido.findAll()

            if (!log_pedidos) {
                res.status(401).json({ message: "Não existe log_pedidos cadastrados." });
            }
            else {
                res.status(200).json({ log_pedidos });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //DELETAR LOG PEDIDO
    async deletarLog_pedido(req, res) {

        try {
            const { id } = req.params

            const log_pedido = await Log_pedido.findOne({ where: { id } })

            if (!log_pedido) {
                res.status(401).json({ message: "Log_pedido não encontrado." });
            }
            else {
                await Log_pedido.destroy({ where: { id } })

                res.status(200).json({ ok: true });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    }
}