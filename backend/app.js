import express from 'express';
import cors from 'cors';
import routes from './utils/routes.js';

const app = express();


app.use(routes);
app.use(cors());
app.use(express.json());

app.listen(8080, () => {
   console.log("Servidor iniciado na porta 8080: http://localhost:8000");
});