import express from "express";
import getBrand from "../service/brand.js";

const Brand = express.Router();

Brand.get("/brand", async (req, res) => {
    let brand = await getBrand()
    res.send(brand).status(200)
})

export default Brand