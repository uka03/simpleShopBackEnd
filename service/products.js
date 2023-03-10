import pool from "../config/sql-config.js";

export async function getProducts(crud) {
    if (crud.limit) {
        const [data] = await pool.query(`select a.id , a.name, a.brand, category.name category,created_date,description, sale, stock, image from (select product.id , product.name, brand.name brand, category_id,created_date,description, sale, stock, image  from product inner join brand  on product.brand_id = brand.id) a inner join category on category.id = a.category_id  ${`limit ${crud.limit}`};`);
        return data
    } else if (crud.brand) {
        const [data] = await pool.query(`select * from(select a.id, a.name, a.brand, category.name category, created_date, description, sale, stock, image from(select product.id, product.name, brand.name brand, category_id, created_date, description, sale, stock, image  from product inner join brand  on product.brand_id = brand.id) a inner join category on category.id = a.category_id) b  where b.brand = '${crud.brand}';`);
        console.log(data)
        return data;
    } else if (crud.category) {
        const [data] = await pool.query(`select * from(select a.id, a.name, a.brand, category.name category, created_date, description, sale, stock, image from(select product.id, product.name, brand.name brand, category_id, created_date, description, sale, stock, image  from product inner join brand  on product.brand_id = brand.id) a inner join category on category.id = a.category_id) b  where b.category = '${crud.category}';`);
        console.log(data)
        return data;
    } else {
        const [data] = await pool.query(`select a.id , a.name, a.brand, category.name category,created_date,description, sale, stock, image from (select product.id , product.name, brand.name brand, category_id,created_date,description, sale, stock, image  from product inner join brand  on product.brand_id = brand.id) a inner join category on category.id = a.category_id ;`);
        return data
    }
    // select * from(select a.id, a.name, a.brand, category.name category, created_date, description, sale, stock, image from(select product.id, product.name, brand.name brand, category_id, created_date, description, sale, stock, image  from product inner join brand  on product.brand_id = brand.id) a inner join category on category.id = a.category_id) b  where b.category = 'laptop' ;
    // return data
}
