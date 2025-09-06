import Receta from "../models/receta.models.js";

export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

export const leerReceta = async (req, res) => {
  try {
    const listaRecetas = await Receta.find({});
    res.status(200).json(listaRecetas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error  al leer receta" });
  }
};

export const leerRecetaPorId = async (req, res) => {
  try {
    const recetaBuscada = await Receta.findById(req.params.id);
    if (!recetaBuscada) {
      return res.status(404).json({ mensaje: "Receta no encontrada" });
    }
    res.status(200).json(recetaBuscada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener receta" });
  }
};

export const crearReceta = async (req, res) => {
  try {
    const nuevaReceta = new Receta(req.body);
    await nuevaReceta.save();

    res.status(201).json({ mensaje: "La Receta fue creada exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear receta" });
  }
};
