const Item = require('../models/item');

module.exports = {
    //INSERIR ITEM
    async inserirItem(req, res) {

        try {
            const { nome, descricao, valor, quantidade, estabelecimento_id, tipo_item } = req.body

            const item = await Item.create({ nome, descricao, valor, quantidade, estabelecimento_id, tipo_item });

            res.status(200).json({ item });
        }
        catch (error) {
            res.status(400).json({ error });
        }

    },
    //ATUALIZAR ITEM
    async atualizarItem(req, res) {

        try {
            const { id } = req.params
            const { nome, descricao, valor, quantidade, estabelecimento_id, tipo_item } = req.body
            const item = await Item.findOne({ where: { id } })

            if (!item) {
                res.status(401).json({ message: "Nenhum item encontrado." });
            }
            else {
                const item = await Item.update({ nome, descricao, valor, quantidade, estabelecimento_id, tipo_item }, { where: { id } })

                res.status(200).json({ item });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR UM ITEM
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
    //LISTAR ITENS
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
    //LISTAR ITENS POR ESTABELECIMENTO
    async listarItensPorEstabelecimento(req, res) {
        try {
            const { estabelecimento_id } = req.params
            const itens = await Item.findAll({ where: { estabelecimento_id } })

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
    //DELETAR ITEM
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