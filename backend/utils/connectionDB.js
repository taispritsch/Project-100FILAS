import Sequelize from 'sequelize';

const sequelize = new Sequelize("100filas", "postgres", "admin", {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function(e){
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso!");
    console.log(e);
});

module.exports = sequelize;