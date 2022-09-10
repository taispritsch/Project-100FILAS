const Log_acesso = require('../models/log_acesso');

module.exports = {
    //INSERIR LOG ACESSO
    async inserirLog_acesso(req, res) {

        try {
            const { local_acessado, horario, acao, token_id, estabelecimento_id } = req.body

            const log_acesso = await Log_acesso.create({ local_acessado, horario, acao, token_id, estabelecimento_id });

            res.status(200).json({ log_acesso });
        }
        catch (error) {
            res.status(400).json({ error });
        }

    },
    //ATUALIZAR LOG ACESSO
    async atualizarLog_acesso(req, res) {

        try {
            const { id } = req.params
            const { local_acessado, horario, acao, token_id, estabelecimento_id } = req.body
            const log_acesso = await Log_acesso.findOne({ where: { id } })

            if (!log_acesso) {
                res.status(401).json({ message: "Nenhum log de acesso encontrado." });
            }
            else {
                const log_acesso = await Log_acesso.update({ local_acessado, horario, acao, token_id, estabelecimento_id }, { where: { id } })

                res.status(200).json({ log_acesso });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR UM LOG ACESSO
    async listarLog_acesso(req, res) {
        try {
            const { id } = req.params
            const log_acesso = await Log_acesso.findOne({ where: { id } })

            if (!log_acesso) {
                res.status(401).json({ message: "Log de acesso não encontrado." });
            }
            else {
                res.status(200).json({ log_acesso });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR TODOS OS LOG ACESSO
    async listarLog_acessos(req, res) {
        try {
            const log_acessos = await Log_acesso.findAll()

            if (!log_acessos) {
                res.status(401).json({ message: "Não existe log de acessos cadastrados." });
            }
            else {
                res.status(200).json({ log_acessos });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //DELETAR LOG ACESSO
    async deletarLog_acesso(req, res) {

        try {
            const { id } = req.params

            const log_acesso = await Log_acesso.findOne({ where: { id } })

            if (!log_acesso) {
                res.status(401).json({ message: "Log_acesso não encontrado." });
            }
            else {
                await Log_acesso.destroy({ where: { id } })

                res.status(200).json({ ok: true });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    }
}