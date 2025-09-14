import jwt from "jsonwebtoken";

const generarJWT = async (nombreUsuario, email) => {
  try {
    const payload = { nombreUsuario, email };

    const token = await jwt.sign(payload, process.env.SECRET_JWT, {
      expiresIn: "2h",
    });
    return token;
  } catch (error) {
    console.error(error);
    throw new error("No es pudo generar el token");
  }
};

export default generarJWT;
