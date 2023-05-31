import {pool} from "../db.js"

export const database = async (req, res) => {
    const [result] = await pool.query("SELECT 2 + 2 AS resultado")
    res.json(result)
}