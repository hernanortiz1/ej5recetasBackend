import { validationResult } from "express-validator";

const resultadoValidacionReceta = (req, res, next) =>{
    const errores = validationResult(req)
    if(!errores.isEmpty()){
        return res.status(400).json(errores.array())
    }
    next()
}
export default resultadoValidacionReceta