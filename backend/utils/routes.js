import { Router } from 'express';

const routes = new Router();

routes.get("/establishment", async (req, res) => {
   const establishment = await establishment.findAll();
   return res.json(establishment);
});

routes.get("/establishment/:id", async (req, res) => {
   const user = await establishment.findByPk(req.params.id);
   return res.json(user);
});

routes.post("/establishmentRegister", async (req, res) => {
   await Establishment.create(req.body)
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

export default routes;