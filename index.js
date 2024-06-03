import express from "express";

import rutasCandidatos from "./routes/rutasCandidatos.js";
import rutasVotos from "./routes/rutasVotos.js";
const app = express();
const PORT = process.env.PORT || 3000;

//Motor de Plantilla

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api", rutasCandidatos);
app.use("/voto", rutasVotos);

app.listen(PORT, () =>
  console.log(`Example app listening on port http://localhost:${PORT}`)
);
