import { Router } from "express";
import { crearReceta, leerReceta, test, leerRecetaPorId, borrarRecetaPorId, editarRecetaPorId } from "../controllers/receta.controllers.js";

const router = Router();

router.route("/test").get(test);
router.route("/").get(leerReceta).post(crearReceta)
router.route("/:id").get(leerRecetaPorId).delete(borrarRecetaPorId).put(editarRecetaPorId)
export default router;