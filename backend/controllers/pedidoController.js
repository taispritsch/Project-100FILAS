const Pedido = require('../models/pedido');

module.exports = {
    //INSERIR PEDIDO
    async inserirPedido(req, res) {

        try {
            const { nome, observacao, quantidade_item, valor_total, item_id, nome_cliente } = req.body

            const pedido = await Pedido.create({ nome, observacao, quantidade_item, valor_total, item_id, nome_cliente });

            res.status(200).json({ pedido });
        }
        catch (error) {
            res.status(400).json({ error });
        }

        const nodemailer = require('nodemailer');

        var transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "d060b33c41cd14",
                pass: "e92ccea6efde17"
            }
        });

        const mailOptions = {
            from: 'gabrielli.sartori@universo.univates.br',
            to: 'gabrielli.sartori@universo.univates.br',
            subject: 'Detalhes do seu Pedido',
            html: "Olá! <br><br>Seu pedido foi finalizado com sucesso."
        };

        transport.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado: ' + info.response);
            }
        });


    },
    //ATUALIZAR PEDIDO
    async atualizarPedido(req, res) {

        try {
            const { id } = req.params
            const { nome, observacao, quantidade_item, valor_total, item_id, nome_cliente } = req.body
            const pedido = await Pedido.findOne({ where: { id } })

            if (!pedido) {
                res.status(401).json({ message: "Nenhum pedido encontrado." });
            }
            else {
                const pedido = await Pedido.update({ nome, observacao, quantidade_item, valor_total, item_id, nome_cliente }, { where: { id } })

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
    //LISTAR PEDIDOS POR ESTABELECIMENTO
    async listarPedidosPorEstabelecimento(req, res) {
        try {
            const { estabelecimento_id } = req.params
            const pedidos = await Pedido.findAll({ where: { estabelecimento_id } })

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