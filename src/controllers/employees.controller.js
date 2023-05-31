import { pool } from "../db.js"; //Importar la const llamada pool la cual almacena la coneccion a la base de datos
//creando una function asyncrona
export const getEmployees = async (req, res) => {
  try {
    //pool(coneccion al database) query mi consulta en sql
    //await es necesario para ASYNC
    const [rows] = await pool.query("SELECT * FROM employee");
    //Imprimir resultado en formato JSON
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salió mal",
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      req.params.id,
    ]);
    console.log(rows);
    if (rows.length <= 0)
      return res.status(404).json({
        mensaje: "Empleado not found",
      });
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salió mal",
    });
  }
};

export const createEmployees = async (req, res) => {
  try {
    //req.body requesición del body en html
    const { name, salary } = req.body;
    console.log(req.body);
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    //res para mostrar un resultado
    return res.status(500).json({
      message: "Algo salió mal",
    });
  }
};

export const updateEmployees = async (req, res) => {
  //req.params parametros requeridos {especificar que dato se recibe y se almacena aqui}
  const { id } = req.params;
  const { name, salary } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    //console.log(result)
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Ha sucedido un error y no se pudo actualizar los datos",
      });

    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salió mal",
    });
  }
};

export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "No se encontró un registro para eliminar",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salió mal",
    });
  }
};
