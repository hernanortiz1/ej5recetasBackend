import jwt from "jsonwebtoken";

const verificarJWT = (req, res, next) => {
  try {
    const token = req.headers["x-token"];
    console.log(token);

    if (!token) {
      return res
        .status(401)
        .json({ mensaje: "No se envio el token en la solicitud" });
    }

    const payload = jwt.verify(token, process.env.SECRET_JWT);

    req.nombreUsuario = payload.nombreUsuario;
    req.email = payload.email;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ mensaje: "token invalido", error: error.mensaje });
  }
};
export default verificarJWT;
