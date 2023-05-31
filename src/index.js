//const express = require("express")
//La ruta con la configuración de mi proyecto, principalmente llamar las rutas
import app from "./app.js";
//llamar la variable PORT desde config.js asignado por las variables de entorno en el archivo .env
import { PORT } from "./config.js";
//Puerto donde se va a desplegar la aplicación en este caso = 3000
app.listen(PORT);
console.log("Server are runing in port", PORT);
