import { createPool } from "mysql2/promise"; //Llamar el metodo promise para poder usar el createPool
import { HOST, USER, PASSWORD, PORT_DB, DATABASE } from "./config.js"; //Importar las variables de entorno
//Asignar los valores de coneccion, la palabra reservada export me permite exportarlo a cualquier archivo donde lo necesite
export const pool = createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  port: PORT_DB,
  database: DATABASE,
});
