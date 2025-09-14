import recetaRoutes from "./receta.routes.js";
import { Router } from "express";
import usuariosRoutes from "./usuario.routes.js"

const router = Router();

router.use("/recetas", recetaRoutes);
router.use("/usuarios", usuariosRoutes)

export default router;