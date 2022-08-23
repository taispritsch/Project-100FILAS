const express =  require('express');
const cors = require('cors');
const routes = require('./utils/routes.js');
require('./utils/connectionDB');

const app = express();


app.use(routes);
app.use(cors());
app.use(express.json());

app.listen(8080, () => {
   console.log("Servidor iniciado na porta 8080: http://localhost:8000");
});