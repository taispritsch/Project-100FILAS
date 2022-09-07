const Token = require('../models/token');

module.exports = {
    async inserirToken(req, res) {

        try {
            const { localizacao } = req.body

            const token = await Token.create({ localizacao });

            res.status(200).json({ token });
        }
        catch (error) {
            res.status(400).json({ error });
        }

    },

    async atualizarToken(req, res) {

        try {
            const { id } = req.params
            const { localizacao } = req.body
            const token = await Token.findOne({ where: { id } })

            if (!token) {
                res.status(401).json({ message: "Nenhum token encontrado." });
            }
            else {
                const token = await Token.update({ localizacao }, { where: { id } })

                res.status(200).json({ token });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },

    async listarToken(req, res) {
        try {
            const { id } = req.params
            const token = await Token.findOne({ where: { id } })

            if (!token) {
                res.status(401).json({ message: "Token não encontrado." });
            }
            else {
                res.status(200).json({ token });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },

    async listarTokens(req, res) {
        try {
            const tokens = await Token.findAll()

            if (!tokens) {
                res.status(401).json({ message: "Não existe tokens cadastrados." });
            }
            else {
                res.status(200).json({ tokens });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },

    async deletarToken(req, res) {

        try {
            const { id } = req.params

            const token = await Token.findOne({ where: { id } })

            if (!token) {
                res.status(401).json({ message: "Token não encontrado." });
            }
            else {
                await Token.destroy({ where: { id } })

                res.status(200).json({ ok: true });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    }
}