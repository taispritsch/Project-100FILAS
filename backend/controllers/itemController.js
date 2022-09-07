const Item = require('../models/item');

module.exports = {
    async inserirItem(req, res) {

        try {
            const { nome, descricao, valor, quantidade, estabelecimento_id } = req.body

            const item = await Item.create({ nome, descricao, valor, quantidade, estabelecimento_id });

            res.status(200).json({ item });
        }
        catch (error) {
            res.status(400).json({ error });
        }

    },

    async atualizarItem(req, res) {

        try {
            const { id } = req.params
            const { nome, descricao, valor, quantidade, estabelecimento_id } = req.body
            const item = await Item.findOne({ where: { id } })

            if (!item) {
                res.status(401).json({ message: "Nenhum item encontrado." });
            }
            else {
                const item = await Item.update({ nome, descricao, valor, quantidade, estabelecimento_id }, { where: { id } })

                res.status(200).json({ item });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },

    async listarItem(req, res) {
        try {
            const { id } = req.params
            const item = await Item.findOne({ where: { id } })

            if (!item) {
                res.status(401).json({ message: "Item não encontrado." });
            }
            else {
                res.status(200).json({ item });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },

    async listarItens(req, res) {
        try {
            const itens = await Item.findAll()

            if (!itens) {
                res.status(401).json({ message: "Não existe itens cadastrados." });
            }
            else {
                res.status(200).json({ itens });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },

    async deletarItem(req, res) {

        try {
            const { id } = req.params

            const item = await Item.findOne({ where: { id } })

            if (!item) {
                res.status(401).json({ message: "Item não encontrado." });
            }
            else {
                await Item.destroy({ where: { id } })

                res.status(200).json({ ok: true });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    }
}