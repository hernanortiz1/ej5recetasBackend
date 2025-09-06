import { Router } from "express";
import { crearReceta, leerReceta, test } from "../controllers/receta.controllers.js";

const router = Router();

router.route("/test").get(test);
router.route("/").get(leerReceta).post(crearReceta)
export default router;