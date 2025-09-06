import mongoose, { Schema } from "mongoose";

recetaSchema = new Schema({
  nombreReceta: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 80,
  },
  categoria: {
    type: String,
    required: true,
    enum: ["Desayunos", "Platos principales", "Postres", "Bebidas"],
  },
  imagen: {
    type: String,
    required: true,
    validate: (valor) => {
      return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png))$/.test(
        valor
      );
    },
  },
  descripcion_breve: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 100,
  },
  descripcion_amplia: {
    type: String,
    required: true,
    minLenght: 10,
    maxLenght: 500,
  },
});

const Receta = mongoose.model("producto", recetaSchema);

export default Receta;
