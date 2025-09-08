import { body } from "express-validator";
import resultadoValidacionReceta from "./resultadoValidacionReceta.js"
import Receta from "../models/receta.models.js";

const validacionReceta = [
  body("nombreReceta")
    .notEmpty()
    .withMessage("El nombre de la receta es obligatorio")
    .isLength({ min: 3, max: 80 })
    .withMessage("El nombre de la receta debe tener entre 3 y 80 caracteres"),
  body("imagen")
    .notEmpty()
    .withMessage("La imagen es un campo obligatorio")
    .matches(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png))$/)
    .withMessage(
      "La imagen debe ser una URL valida y terminar en jpg, jpeg, png"
    ),
  body("categoria")
    .notEmpty()
    .withMessage("La categoria es un dato obligarorio")
    .isIn(["Desayunos", "Platos principales", "Postres", "Bebidas"])
    .withMessage("La categoria debe ser: Desayunos, Platos principales, Postres, Bebidas"),
  body("descripcion_breve")
    .notEmpty()
    .withMessage("La descripcion breve es obligatoria")
    .isLength({ min: 3, max: 100 })
    .withMessage("La descripcion breve debe tener entre 3 y 100 caracteres"),
  body("descripcion_amplia")
    .notEmpty()
    .withMessage("La descripcion amplia es obligatoria")
    .isLength({ min: 10, max: 500 })
    .withMessage("La descripcion amplia debe tener entre 10 y 500 caracteres"),
  (req, res, next) => resultadoValidacionReceta(req, res, next),
];

export default validacionReceta;