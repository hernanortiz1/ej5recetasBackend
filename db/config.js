import mongoose from "mongoose";

try {
  mongoose.connect(process.env.MONGODB).then(() => {
    console.info("BD ej5 conectada");
  });
} catch (error) {
  console.error(error);
}
