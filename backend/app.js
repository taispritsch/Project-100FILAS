const express = require('express');
import cors from 'cors';
const routes = require('./utils/routes.js');
require('./utils/connectionDB');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(8080, () => {
   console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
