import express from "express"; //importar las funciones de Express
import employeesRoutes from "./routes/employees.routes.js"; //Importar las rutas que defini
import rutas from "./routes/index.routes.js"; //Ruta de ejemplo que defini

const app = express();

app.use(express.json());

app.use("/api", employeesRoutes);
app.use(rutas);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Ruta no encontrada",
  });
});

export default app;
