const Log_alerta = require('../models/log_alerta');

module.exports = {
    //INSERIR LOG ALERTA
    async inserirLog_alerta(req, res) {

        try {
            const { local_acessado, horario, acao, mensagem_aviso, token_id, estabelecimento_id } = req.body

            const log_alerta = await Log_alerta.create({ local_acessado, horario, acao, mensagem_aviso, token_id, estabelecimento_id });

            res.status(200).json({ log_alerta });
        }
        catch (error) {
            res.status(400).json({ error });
        }

    },
    //ATUALIZAR LOG ALERTA
    async atualizarLog_alerta(req, res) {

        try {
            const { id } = req.params
            const { local_acessado, horario, acao, mensagem_aviso, token_id, estabelecimento_id } = req.body
            const log_alerta = await Log_alerta.findOne({ where: { id } })

            if (!log_alerta) {
                res.status(401).json({ message: "Nenhum log de alerta encontrado." });
            }
            else {
                const log_alerta = await Log_alerta.update({ local_acessado, horario, acao, mensagem_aviso, token_id, estabelecimento_id }, { where: { id } })

                res.status(200).json({ log_alerta });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR UM LOG ALERTA
    async listarLog_alerta(req, res) {
        try {
            const { id } = req.params
            const log_alerta = await Log_alerta.findOne({ where: { id } })

            if (!log_alerta) {
                res.status(401).json({ message: "Log de alerta não encontrado." });
            }
            else {
                res.status(200).json({ log_alerta });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //LISTAR TODOS OS LOG ALERTA
    async listarLog_alertas(req, res) {
        try {
            const log_alertas = await Log_alerta.findAll()

            if (!log_alertas) {
                res.status(401).json({ message: "Não existe log de alertas cadastrados." });
            }
            else {
                res.status(200).json({ log_alertas });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    },
    //DELETAR LOG ALERTA
    async deletarLog_alerta(req, res) {

        try {
            const { id } = req.params

            const log_alerta = await Log_alerta.findOne({ where: { id } })

            if (!log_alerta) {
                res.status(401).json({ message: "Log de alerta não encontrado." });
            }
            else {
                await Log_alerta.destroy({ where: { id } })

                res.status(200).json({ ok: true });
            }
        }
        catch (error) {
            res.status(400).json({ error });
        }
    }
}