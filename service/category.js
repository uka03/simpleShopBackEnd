import pool from "../config/sql-config.js";

export default async function getCategory() {
    const [category] = await pool.query(`select * from category ;`)
    return category;
}