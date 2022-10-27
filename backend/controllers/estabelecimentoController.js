const Estabelecimento = require('../models/estabelecimento');

module.exports = {
    //INSERIR ESTABELECIMENTO
    async inserirEstabelecimento(req, res) {
        console.log(req.body)
        try {
            const { nome, senha, descricao, email, telefone, cnpj, hora_abrir, hora_fechar } = req.body

            const estabelecimento = await Estabelecimento.findOne({ where: { email } })

            if (estabelecimento) {
                res.status(401).json({ message: "Já existe esse e-mail cadastrado." });
            }
            else {
                const estabelecimento = await Estabelecimento.create({ nome, senha, descricao, email, telefone, cnpj, hora_abrir, hora_fechar });

                res.status(200).json({ estabelecimento });
            }

        }
        catch (error) {
            res.status(400).json({ error });
        }

    },
    //ATUALIZAR ESTABELECIMENTO
    async atualizarEstabelecimento(req, res) {

        try {
            const { id } = req.params
            const { nome, senha, descricao, email, telefone, cnpj, hora_abrir, hora_fechar } = req.body
            const estabelecimento = await Estabelecimento.findOne({ where: { id } })

            if (!estabelecimento) {
                res.status(401).json({ message: "Nenhum estabelecimento encontrado." });
            }
            else {
                const estabelecimento = await Estabelecimento.update({ nome, senha, descricao, email, telefone, cnpj, hora_abrir, hora_fechar }, { where: { id } })

                res.status(200).json({ estabelecimento });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR UM ESTABELECIMENTO
    async listarEstabelecimento(req, res) {
        try {
            const { id } = req.params
            const estabelecimento = await Estabelecimento.findOne({ where: { id } })

            if (!estabelecimento) {
                res.status(401).json({ message: "Estabelecimento não encontrado." });
            }
            else {
                res.status(200).json({ estabelecimento });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR ESTABELECIMENTOS
    async listarEstabelecimentos(req, res) {
        try {
            const estabelecimentos = await Estabelecimento.findAll()

            if (!estabelecimentos) {
                res.status(401).json({ message: "Não existe estabelecimentos cadastrados." });
            }
            else {
                res.status(200).json({ estabelecimentos });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //DELETAR ESTABELECIMENTO
    async deletarEstabelecimento(req, res) {

        try {
            const { id } = req.params

            const estabelecimento = await Estabelecimento.findOne({ where: { id } })

            if (!estabelecimento) {
                res.status(401).json({ message: "Estabelecimento não encontrado." });
            }
            else {
                await Estabelecimento.destroy({ where: { id } })

                res.status(200).json({ ok: true });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    }
}