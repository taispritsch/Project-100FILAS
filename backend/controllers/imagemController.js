const Imagem = require('../models/imagem');

module.exports = {
    //INSERIR IMAGEM
    async inserirImagem(req, res) {

        try {
            const { caminho, estabelecimento_id, item_id } = req.body

            const imagem = await Imagem.create({ caminho, estabelecimento_id, item_id });

            res.status(200).json({ imagem });
        }
        catch (error) {
            res.status(400).json({ error });
        }

    },
    //ATUALIZAR IMAGEM
    async atualizarImagem(req, res) {

        try {
            const { id } = req.params
            const { caminho, estabelecimento_id, item_id } = req.body
            const imagem = await Imagem.findOne({ where: { id } })

            if (!imagem) {
                res.status(401).json({ message: "Nenhuma imagem encontrada." });
            }
            else {
                const imagem = await Imagem.update({ caminho, estabelecimento_id, item_id }, { where: { id } })

                res.status(200).json({ imagem });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR UMA IMAGEM
    async listarImagem(req, res) {
        try {
            const { id } = req.params
            const imagem = await Imagem.findOne({ where: { id } })

            if (!imagem) {
                res.status(401).json({ message: "Imagem não encontrada." });
            }
            else {
                res.status(200).json({ imagem });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR IMAGENS
    async listarImagens(req, res) {
        try {
            const imagens = await Imagem.findAll()

            if (!imagens) {
                res.status(401).json({ message: "Não existe imagem cadastrada." });
            }
            else {
                res.status(200).json({ imagem });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //DELETAR IMAGEM
    async deletarImagem(req, res) {

        try {
            const { id } = req.params

            const imagem = await Imagem.findOne({ where: { id } })

            if (!imagem) {
                res.status(401).json({ message: "Imagem não encontrada." });
            }
            else {
                await Imagem.destroy({ where: { id } })

                res.status(200).json({ ok: true });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    }
}