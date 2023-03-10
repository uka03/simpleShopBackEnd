import express from "express";
import getCategory from "../service/category.js";


const Category = express.Router();

Category.get("/category", async (req, res) => {
    let category = await getCategory()
    res.send(category).status(200)
})

export default Category