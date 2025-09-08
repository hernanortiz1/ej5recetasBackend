import { Router } from "express";
import { crearReceta, leerReceta, test, leerRecetaPorId, borrarRecetaPorId, editarRecetaPorId } from "../controllers/receta.controllers.js";
import validacionReceta from "../middleware/validarReceta.js";

const router = Router();

router.route("/test").get(test);
router.route("/").get(leerReceta).post(validacionReceta ,crearReceta)
router.route("/:id").get(leerRecetaPorId).delete(borrarRecetaPorId).put(validacionReceta ,editarRecetaPorId)
export default router;