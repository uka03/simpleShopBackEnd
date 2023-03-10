import express from "express";
import { getProducts } from "../service/products.js";

const Router = express.Router();


Router.get("/products", async (req, res) => {
    let query = (req.query)
    let data = (await getProducts(query))
    res.send(data).status(200)

})


export default Router;