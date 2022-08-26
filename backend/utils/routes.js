import { Router } from 'express';
import Estabelecimento from '../models/estabelecimento';
import {  } from '../controllers/estabelecimentoController';

const routes = new Router();

// ESTABELECIMENTO
routes.get("/estabelecimento", async (req, res) => {
   const estabelecimento = await Estabelecimento.findAll();
   return res.json(estabelecimento);
});
routes.get("/estabelecimento/:id", async (req, res) => {
   const user = await Estabelecimento.findByPk(req.params.id);
   return res.json(user);
});
routes.post("/estabelecimento", async (req, res) => {
   await Estabelecimento.create(req.body)
   try {
      return res.json({
         success: true,
         message: "Establishment created successfully"
      })
   } catch (err) {
      return res.status(404).json({
         success: false,
         message: "Establishment was rejected"
      })
   }
});

// FIM ESTABELECIMENTO

export default routes;