# SOBRE O PROJETO
A aplicação consiste em formas de agilizar o pedido de refeições por estabelecimento, através de dispositivos
espalhados pelo local, onde o usuário poderá selecionar o alimento desejado e pagar pela aplicação ou pagar no estabelecimento,
no momento da retirada. Já pelo lado do estabelecimento, o mesmo poderá gerenciar seus produtos e pedidos.

# ----------------------------COMANDOS INICIAIS----------------------------
# Instalar todas dependências
npm install

# Comandos para rodar o front (2 terminais)
npm start
gulp watch

# Comandos para rodar o back
npm start

# ----------------------------MIGRATIONS----------------------------
# criar uma nova migration
npx sequelize-cli migration:generate --name create-nome

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


# ----------------------------SEEDERS-----------------------------------

# Criar SEEDS
npx sequelize-cli seed:generate --name <NOME QUE EU QUISER>

# Rodar todas seeders
npx sequelize-cli db:seed:all

# Rodar uma seeder específica
npx sequelize-cli db:seed --seed <NOME>

# Voltar todas seeders
npx sequelize-cli db:seed:undo:all
