# PIntegradorI


# ----------------------------MIGRATIONS----------------------------
# rodar todas migrations que ainda não foram executadas
npx sequelize-cli db:migrate

# voltar a ultima migration
npx sequelize-cli db:migrate:undo

# voltar todas migrations
npx sequelize-cli db:migrate:undo:all

# voltar uma migration específica
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXX-create-nome.js


# ----------------------------OQUE NÃO FAZER----------------------------
# Não excluir o arquivo da migrations antes de fazer o **UNDO**
# Não subir arquivos com problemas pro git!