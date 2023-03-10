import pool from "../config/sql-config.js";

export default async function getBrand() {
    const [brand] = await pool.query(`select * from brand ;`)
    return brand;
}