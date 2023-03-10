import express from "express"
import cors from "cors"
import Router from "./routes/products.js";
import Brand from "./routes/brand.js";
import Category from "./routes/category.js";

const app = express();
const port = 2050;

app.use(express.json())
app.use(cors())

app.use(Router)
app.use(Brand)
app.use(Category)
app.listen(port, () => {
    console.log(port, "deer server aslaa")
})