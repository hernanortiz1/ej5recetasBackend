import recetaRoutes from "./receta.routes.js";
import { Router } from "express";

const router = Router();

router.use("/recetas", recetaRoutes);

export default router;