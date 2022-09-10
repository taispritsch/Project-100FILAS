const Log_erro = require('../models/log_erro');

module.exports = {
    //INSERIR LOG ERRO
    async inserirLog_erro(req, res) {

        try {
            const { horario, acao, token_id, estabelecimento_id } = req.body

            const log_erro = await Log_erro.create({ horario, acao, token_id, estabelecimento_id });

            res.status(200).json({ log_erro });
        }
        catch (error) {
            res.status(400).json({ error });
        }

    },
    //ATUALIZAR LOG ERRO
    async atualizarLog_erro(req, res) {

        try {
            const { id } = req.params
            const { horario, acao, token_id, estabelecimento_id } = req.body
            const log_erro = await Log_erro.findOne({ where: { id } })

            if (!log_erro) {
                res.status(401).json({ message: "Nenhum log_erro encontrado." });
            }
            else {
                const log_erro = await Log_erro.update({ horario, acao, token_id, estabelecimento_id }, { where: { id } })

                res.status(200).json({ log_erro });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR UM LOG ERRO
    async listarLog_erro(req, res) {
        try {
            const { id } = req.params
            const log_erro = await Log_erro.findOne({ where: { id } })

            if (!log_erro) {
                res.status(401).json({ message: "Log_erro não encontrado." });
            }
            else {
                res.status(200).json({ log_erro });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR TODOS OS LOG ERRO
    async listarLog_erros(req, res) {
        try {
            const log_erros = await Log_erro.findAll()

            if (!log_erros) {
                res.status(401).json({ message: "Não existe log_erros cadastrados." });
            }
            else {
                res.status(200).json({ log_erros });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //DELETAR LOG ERRO
    async deletarLog_erro(req, res) {

        try {
            const { id } = req.params

            const log_erro = await Log_erro.findOne({ where: { id } })

            if (!log_erro) {
                res.status(401).json({ message: "Log_erro não encontrado." });
            }
            else {
                await Log_erro.destroy({ where: { id } })

                res.status(200).json({ ok: true });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    }
}